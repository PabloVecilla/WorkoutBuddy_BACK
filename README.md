# WorkoutBuddy API

[![Backend CI](https://github.com/PabloVecilla/WorkoutBuddy_BACK/actions/workflows/backend-ci.yaml/badge.svg?branch=develop)](https://github.com/PabloVecilla/WorkoutBuddy_BACK/actions/workflows/backend-ci.yaml)

WorkoutBuddy API is the backend for a fitness application that creates personalized training programs and lets users manage exercises, complete workouts, and record their training results.

The project is built as a REST API with Node.js, Express, PostgreSQL, and Sequelize. It includes cookie-based JWT authentication, ownership-scoped resources, automated workout generation, resumable workout sessions, strength and cardio set tracking, external exercise-data ingestion, centralized error handling, versioned database migrations, integration tests, and continuous integration with GitHub Actions.

> This is a learning and portfolio project under active development. The API now supports the principal end-to-end flow used by the [WorkoutBuddy React frontend](https://github.com/PabloVecilla/WorkoutBuddy_FRONT); see [Current status and roadmap](#current-status-and-roadmap).

## Highlights

- Register, log in, restore a session, and log out using JWTs stored in HTTP-only cookies.
- Generate a complete training program from the user's goal, experience level, and weekly frequency.
- Create programs, workouts, and workout exercises atomically with Sequelize transactions.
- Read and manage user-owned programs, workouts, and workout prescriptions.
- Start a workout session or resume the existing active session for the same workout.
- Snapshot prescribed exercises into session sets so completed training data remains independent from future program edits.
- Record repetitions and weight for strength sets, or duration and intensity for cardio sets.
- Prevent set updates after a session is finished and prevent workout-exercise changes while a session is active.
- Replace exercises only with alternatives that share the same movement pattern.
- Browse a paginated exercise catalogue or filter exercises by movement pattern, including cardio.
- Fetch, normalize, and seed exercise data from WorkoutAPI.
- Return structured success and error responses through a shared API contract.
- Manage the PostgreSQL schema through reversible Sequelize CLI migrations.
- Protect the API with Helmet, CORS, global and login-specific rate limits, password hashing, and ownership-scoped queries.
- Run PostgreSQL-backed integration tests locally and in GitHub Actions.

## Tech stack

| Area | Technology |
|---|---|
| Runtime | Node.js 20+ |
| HTTP API | Express 5 |
| Database | PostgreSQL 16 |
| ORM | Sequelize 6 |
| Schema management | Sequelize CLI migrations |
| Authentication | JSON Web Tokens and HTTP-only cookies |
| Password security | bcrypt |
| API security | Helmet, CORS, express-rate-limit |
| External data | Axios and WorkoutAPI |
| Testing | Jest and Supertest |
| API development | Postman collection |
| Local infrastructure | Docker Compose |
| Continuous integration | GitHub Actions |

## Architecture

The application follows a layered structure:

```text
HTTP request
    │
    ▼
Routes ──► authentication/rate-limit middleware
    │
    ▼
Controllers ──► validate HTTP input and build responses
    │
    ▼
Services ──► business rules, ownership queries, transactions
    │
    ▼
Sequelize models ──► PostgreSQL
    │
    └──── errors ──► not-found/error middleware ──► JSON response
```

### Project structure

```text
WorkoutBuddy_BACK/
├── .github/workflows/
│   └── backend-ci.yaml          # PostgreSQL-backed CI workflow
├── config/
│   ├── database.js              # Runtime Sequelize connection
│   └── sequelize-cli.js         # Environment-aware migration config
├── data/
│   ├── raw-exercises.json       # Source exercise payload
│   └── normalized-exercises.json
├── migrations/                  # Versioned and reversible database schema
├── postman/                     # Requests for the current API surface
├── scripts/
│   ├── fetchExercises.js        # Download external exercise data
│   ├── normalizeExercises.js    # Convert data to the local schema
│   ├── seedExercises.js         # Seed PostgreSQL
│   └── runExerciseSeeder.js     # Seeder entry point
├── src/
│   ├── controllers/             # Request/response orchestration
│   ├── middleware/              # Auth, rate limiting, 404, error handling
│   ├── models/                  # Sequelize models and associations
│   ├── routes/                  # REST endpoint definitions
│   ├── services/                # Business and persistence logic
│   ├── utils/AppError.js        # Operational error type
│   ├── app.js                   # Express configuration
│   └── server.js                # Database connection and HTTP startup
├── tests/                       # Jest/Supertest integration tests
├── docker-compose.yaml          # Local PostgreSQL service
├── .env.example
├── .env.test.example
└── package.json
```

## Domain model

```text
User 1 ───────────── * Program
User 1 ───────────── * WorkoutSession

Program 1 ────────── * Workout
Workout 1 ────────── * WorkoutExercise * ────── 1 Exercise
Workout 1 ────────── * WorkoutSession

WorkoutSession 1 ─── * WorkoutSet
WorkoutExercise 1 ── * WorkoutSet * ─────────── 1 Exercise
```

- A **User** owns programs and workout sessions.
- A **Program** defines a goal, training level, and weekly frequency.
- A **Workout** represents one ordered training day within a program.
- A **WorkoutExercise** stores the prescription for an exercise: order, sets, target repetitions, rest time, and optional working weight.
- An **Exercise** stores reusable catalogue information such as muscles, movement pattern, equipment, instructions, and image URL.
- A **WorkoutSession** records an attempt to complete a workout, including start time, completion time, and active status.
- A **WorkoutSet** is a session snapshot of one prescribed set. It stores target data plus either strength results (`executedReps`, `weightKg`) or cardio results (`durationMinutes`, `intensityLevel`).

Deleting a user cascades to their programs and sessions. Deleting a program cascades to its workouts; deleting a workout cascades to workout exercises and sessions; deleting a session cascades to its workout sets. Exercise deletion is restricted while the exercise is referenced.

The schema also applies indexes, uniqueness rules, foreign keys, and database-level checks for set numbers, non-negative weight, cardio duration, and intensity.

## Program generation

Program creation is more than a CRUD insert. The generator:

1. Selects training parameters from the requested goal.
2. Selects a workout split from the user's level and frequency.
3. Maps each workout focus to movement-pattern requirements.
4. Randomly selects matching exercises from the catalogue.
5. Adds a cardio prescription when required by the goal.
6. Saves the program, workouts, and workout exercises in one transaction.

Supported goals:

- `muscle_gain`
- `fat_loss`
- `strength`
- `recomp`

Supported program combinations:

| Level | Frequencies |
|---|---|
| `beginner` | 2, 3, or 4 days per week |
| `intermediate` | 3, 4, 5, or 6 days per week |

The database must contain exercises for every required movement pattern before a program can be generated successfully.

## Workout session lifecycle

1. The client starts a session for an owned program and workout.
2. If an unfinished session already exists for that user and workout, the API returns it instead of creating a duplicate.
3. Otherwise, the API creates the session and all prescribed workout sets atomically.
4. Each set can be completed or corrected while the session remains active.
5. Strength sets accept repetitions and weight; cardio sets accept duration and an intensity level from 1 to 10.
6. Finishing the session records `completedAt` and prevents further set updates.

Workout-exercise prescriptions cannot be edited while their workout has an active session. This keeps the generated set snapshot consistent throughout the workout.

## Getting started

### Prerequisites

- Node.js 24 or newer
- npm 11 or newer
- Docker Desktop or another running PostgreSQL 16 instance
- A WorkoutAPI key only if you want to refresh the source exercise dataset

### 1. Clone and install

```bash
git clone https://github.com/PabloVecilla/WorkoutBuddy_BACK.git
cd WorkoutBuddy_BACK
git switch develop
npm install
```

### 2. Configure the environment

The application loads `.env.local` in development, `.env.test` in tests, and `.env` in production.

```bash
cp .env.example .env.local
cp .env.example .env
```

Populate both files with the same local values for now. The development server loads `.env.local`, while the exercise seeder's direct database import currently reads `.env`:

```env
PORT=3000

DB_NAME=workoutbuddy
DB_USER=workoutbuddy_user
DB_PASSWORD=workoutbuddy_password
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=24h
COOKIE_MAX_AGE=86400000

FRONTEND_URL=http://localhost:5173

# Required only to download fresh exercise data
WORKOUT_API_KEY=
WORKOUT_API_BASE_URL=https://api.workoutapi.com
```

Never commit real environment files or secrets.

### 3. Start PostgreSQL

The supplied Compose file creates the development database and persists its data in a named volume:

```bash
docker compose up -d postgres
```

### 4. Apply database migrations

Create or update the development schema before starting the API or seeding data:

```bash
npm run db:migrate:develop
```

Check the current migration state with:

```bash
npm run db:migrate:develop:status
```

### 5. Seed the exercise catalogue

The repository already contains normalized exercise data. Import it into PostgreSQL with:

```bash
npm run exercises:seed
```

To fetch a fresh dataset from WorkoutAPI, normalize it, and then seed it:

```bash
npm run exercises:prepare
npm run exercises:seed
```

`exercises:prepare` requires `WORKOUT_API_KEY` and `WORKOUT_API_BASE_URL`.

### 6. Start the API

Development mode with automatic restart:

```bash
npm run dev
```

The API is available at `http://localhost:3000` unless `PORT` is changed. Use `GET /health` for a lightweight process-health check.

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Run the development server with Nodemon |
| `npm start` | Run the server with Node |
| `npm test` | Apply test migrations and run the Jest integration suite serially |
| `npm run db:migrate:develop` | Apply pending migrations to the development database |
| `npm run db:migrate:develop:status` | Show development migration status |
| `npm run db:migrate:develop:undo` | Revert the latest development migration |
| `npm run db:migrate:test` | Apply pending migrations to the test database |
| `npm run db:migrate:test:undo` | Revert the latest test migration |
| `npm run db:migrate:prod` | Apply pending production migrations |
| `npm run db:migrate:prod:status` | Show production migration status |
| `npm run exercises:fetch` | Fetch the raw WorkoutAPI exercise dataset |
| `npm run exercises:normalize` | Normalize raw exercise data for the local model |
| `npm run exercises:prepare` | Fetch and normalize the dataset |
| `npm run exercises:seed` | Replace and seed the exercise catalogue |

Migration undo commands modify the target database. Confirm the selected environment before running them.

## API conventions

### Authentication

Successful login sets a cookie named `token`. Protected requests must include that cookie.

For browser clients, send credentials with each request:

```js
fetch(`${API_URL}/auth/me`, {
  credentials: "include"
});
```

The configured frontend origin is read from `FRONTEND_URL`. Production cookies use `Secure` and `SameSite=None`; development cookies use `SameSite=Lax`.

### Successful responses

Application endpoints generally return:

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "meta": {}
}
```

Collection metadata, including exercise pagination, is placed in `meta`. The infrastructure-oriented `/health` endpoint intentionally returns a smaller status payload.

### Error responses

Operational and recognized Sequelize errors are normalized centrally:

```json
{
  "success": false,
  "error": {
    "code": "PROGRAM_NOT_FOUND",
    "message": "Program not found"
  }
}
```

Unknown routes return `404 ROUTE_NOT_FOUND`. In production, unexpected 500-level errors are logged server-side and returned with a generic message so internal details are not exposed.

## API reference

All routes marked **Protected** require the authentication cookie.

### System

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/` | Public | Return the standard API-running response |
| `GET` | `/health` | Public | Return lightweight process status and a timestamp |

### Authentication

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/auth/register` | Public | Register a new user |
| `POST` | `/auth/login` | Public, rate-limited | Authenticate and set the session cookie |
| `GET` | `/auth/me` | Protected | Return the authenticated user |
| `POST` | `/auth/logout` | Public | Clear the session cookie |

Register with:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "StrongPassword1!"
}
```

Login requires only `email` and `password`. Registration validates names and email addresses; passwords must be 8–64 characters and include uppercase, lowercase, numeric, and special characters. Password hashes are never included in API responses.

### Programs

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/programs/create` | Protected | Generate and persist a complete program |
| `GET` | `/programs` | Protected | List the current user's programs |
| `GET` | `/programs/:id` | Protected | Get an owned program with its ordered workouts and exercises |
| `PATCH` | `/programs/:id` | Protected | Rename an owned program |
| `DELETE` | `/programs/:id` | Protected | Delete an owned program |

Create a program:

```json
{
  "name": "Summer Strength",
  "goal": "strength",
  "level": "intermediate",
  "frequency": 4
}
```

Rename a program:

```json
{
  "name": "Updated program name"
}
```

### Workouts

Workouts are nested under their parent program.

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/programs/:programId/workouts` | Protected | List workouts in an owned program |
| `GET` | `/programs/:programId/workouts/:workoutId` | Protected | Get one owned workout |
| `PATCH` | `/programs/:programId/workouts/:workoutId` | Protected | Move a workout to another day, swapping conflicting days |
| `DELETE` | `/programs/:programId/workouts/:workoutId` | Protected | Delete a workout |

Update workout order:

```json
{
  "dayNumber": 2
}
```

### Workout exercises

Workout exercises are nested under a workout and remain scoped to the authenticated owner.

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/programs/:programId/workouts/:workoutId/workout-exercises` | Protected | List the workout's ordered exercise prescriptions |
| `PATCH` | `/programs/:programId/workouts/:workoutId/workout-exercises/:id` | Protected | Edit an exercise prescription when no session is active |
| `DELETE` | `/programs/:programId/workouts/:workoutId/workout-exercises/:id` | Protected | Remove an exercise from the workout |

Any supplied fields are updated; omitted fields keep their previous values:

```json
{
  "exerciseId": 42,
  "weightKg": 60,
  "sets": 4,
  "reps": "8-12",
  "restSeconds": 90,
  "order": 2
}
```

When `exerciseId` changes, the replacement must exist and have the same movement pattern as the current exercise. Updates return `409 NO_EXERCISE_UPDATE_ON_ACTIVE_SESSION` while the workout has an active session.

### Exercise catalogue

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/exercises?page=1&limit=10` | Protected | Get a paginated exercise collection; limit is capped at 10 |
| `GET` | `/exercises/:id` | Protected | Get an exercise by ID |
| `GET` | `/exercises/movement-pattern/:movementPattern` | Protected | Find exercises by an accepted movement pattern |

The original third-party `raw` payload is intentionally excluded from API responses.

### Workout sessions

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/programs/:programId/workouts/:workoutId/sessions` | Protected | Start a session or resume the active one, returning its generated sets |
| `GET` | `/workout-sessions/:sessionId` | Protected | Get an owned workout session |
| `PATCH` | `/workout-sessions/:sessionId/finish` | Protected | Finish an active session |

Starting a session requires no request body. The returned `data` includes the session and its `workoutSets`. Starting the same workout again while its session is active returns the existing session without resetting `startedAt` or recreating sets.

### Workout sets

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `PATCH` | `/workout-sessions/:sessionId/sets/:setId` | Protected | Record or update one set in an active owned session |

Complete a strength set:

```json
{
  "executedReps": 10,
  "weightKg": 72.5,
  "isCompleted": true
}
```

Complete a cardio set:

```json
{
  "durationMinutes": 20,
  "intensityLevel": 7,
  "isCompleted": true
}
```

Strength repetitions must be an integer from 1 to 30 and weight must be between 0 and 999.99 kg. Cardio duration must be an integer from 1 to 180 minutes and intensity must be an integer from 1 to 10. Updating a finished session returns `409 SESSION_FINISHED`.

## Testing

Create a dedicated `.env.test` from the supplied example and point it at a test-only PostgreSQL database:

```bash
cp .env.test.example .env.test
docker exec workoutbuddy-db createdb -U workoutbuddy_user workoutbuddy_test
npm test
```

If the test database already exists, only update `.env.test` and run `npm test`. Never point `.env.test` at a development or production database: the integration setup truncates test tables and resets identities between cases.

The test command applies pending test migrations before running Jest. The suite covers:

- Root and health endpoints
- Registration, login, current-user restoration, logout, and login throttling
- Exercise pagination, lookups, and movement-pattern validation
- Program ownership, generation, empty collections, updates, and deletion
- Workout ownership, reads, and day reordering
- Workout-exercise reads, ownership, replacement rules, and active-session protection
- Workout session creation, resumption, ownership, and completion
- Strength and cardio set validation, persistence, and finished-session protection
- Global rate limiting and production-safe error behavior

Tests run serially to keep shared PostgreSQL state deterministic. GitHub Actions runs the same suite on pushes and pull requests targeting `main` or `develop`, using an isolated PostgreSQL 16 service.

## Security decisions

- Passwords are validated and hashed with bcrypt before persistence.
- Password hashes are excluded from user-facing queries and serialized authentication responses.
- JWTs are placed in HTTP-only cookies rather than returned for client-side storage.
- Protected queries include ownership constraints to prevent cross-user access.
- Login attempts are limited to 50 requests per 15-minute window in normal environments; the test environment uses a lower limit to exercise throttling efficiently.
- The entire API is limited to 150 requests per minute per rate-limit key.
- Helmet supplies standard HTTP security headers.
- CORS permits the configured frontend origin and supports credentialed requests.
- Exercise substitutions must preserve movement patterns.
- Active and finished session guards protect workout and set consistency.
- Known Sequelize errors are mapped to safe 400 or 409 responses.
- Unexpected production errors do not expose internal messages or stack traces.

## Current status and roadmap

The principal backend flow is implemented and integrated with the React frontend: users can authenticate, generate a program, choose a workout, start or resume a session, record strength or cardio sets, and finish the session.

Current priorities include:

- Add endpoints for workout-session history, active-session discovery, and richer session detail retrieval.
- Expand concurrency and lifecycle tests around simultaneous session starts and session completion.
- Add end-to-end contract tests shared with the frontend.
- Document the stable API contract with OpenAPI.
- Add structured application logging and make `/health` optionally verify database availability.
- Define a production deployment workflow that applies migrations safely before application startup.
- Add linting and static-analysis checks to continuous integration.
- Remove remaining unmounted development-only user-route code and legacy scripts or dependencies.
- Add a root `LICENSE` file before open-source distribution.

## Contributing workflow

The active integration branch is `develop`.

```bash
git switch develop
git pull
git switch -c feat/short-description
```

Before opening a pull request:

```bash
npm test
```

Keep commits focused, include migrations for schema changes, avoid committing environment files, and describe any API-contract change in the pull request.

## Related repository

- [WorkoutBuddy Frontend](https://github.com/PabloVecilla/WorkoutBuddy_FRONT)

## Author

Developed by [Pablo Vecilla](https://github.com/PabloVecilla) as a full-stack learning and portfolio project.

## License

The package currently declares the ISC license. Add a root `LICENSE` file before publishing or distributing the project as an open-source package.
