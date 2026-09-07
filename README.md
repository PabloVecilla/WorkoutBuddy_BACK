# WorkoutBuddy API

[![Backend CI](https://github.com/PabloVecilla/WorkoutBuddy_BACK/actions/workflows/backend-ci.yaml/badge.svg?branch=develop)](https://github.com/PabloVecilla/WorkoutBuddy_BACK/actions/workflows/backend-ci.yaml)

WorkoutBuddy API is the backend for a fitness application that creates personalized training programs and lets users manage their workouts and exercises.

The project is built as a REST API with Node.js, Express, PostgreSQL, and Sequelize. It includes cookie-based JWT authentication, resource ownership checks, automated workout generation, external exercise-data ingestion, centralized error handling, integration tests, and continuous integration with GitHub Actions.

> This is a learning and portfolio project under active development. The backend is approaching frontend-integration readiness; see [Current status and roadmap](#current-status-and-roadmap).

## Highlights

- Register, log in, restore a session, and log out using JWTs stored in HTTP-only cookies.
- Generate a training program from the user's goal, experience level, and weekly frequency.
- Create complete program structures atomically using Sequelize transactions.
- Read and manage user-owned programs, workouts, and workout exercises.
- Browse a paginated exercise catalogue or filter exercises by movement pattern.
- Fetch, normalize, and seed exercise data from WorkoutAPI.
- Return structured success and error responses through a shared API contract.
- Protect the API with Helmet, CORS, login rate limiting, password hashing, and ownership-scoped queries.
- Run integration tests against PostgreSQL locally and in GitHub Actions.

## Tech stack

| Area | Technology |
|---|---|
| Runtime | Node.js 20+ |
| HTTP API | Express 5 |
| Database | PostgreSQL 16 |
| ORM | Sequelize 6 |
| Authentication | JSON Web Tokens and HTTP-only cookies |
| Password security | bcrypt |
| API security | Helmet, CORS, express-rate-limit |
| External data | Axios and WorkoutAPI |
| Testing | Jest and Supertest |
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
│   └── backend-ci.yaml          # PostgreSQL-backed CI test workflow
├── config/
│   └── database.js              # Sequelize connection
├── data/
│   ├── raw-exercises.json       # Source exercise payload
│   └── normalized-exercises.json
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
└── package.json
```

## Domain model

```text
User 1 ──────── * Program
Program 1 ───── * Workout
Workout 1 ───── * WorkoutExercise * ───── 1 Exercise
```

- A **User** owns multiple programs.
- A **Program** defines a goal, training level, and weekly frequency.
- A **Workout** represents one training day within a program.
- A **WorkoutExercise** is the ordered join resource that stores sets, reps, and rest time for an exercise in a workout.
- An **Exercise** stores reusable catalogue information such as muscles, movement pattern, equipment, instructions, and image URL.

Deleting a user cascades to their programs. Deleting a program cascades to its workouts, and deleting a workout cascades to its workout-exercise records. Exercise deletion is restricted while the exercise is in use.

## Program generation

Program creation is more than a CRUD insert. The generator:

1. Selects training parameters from the requested goal.
2. Selects a workout split from the user's level and frequency.
3. Maps each workout focus to movement-pattern requirements.
4. Randomly selects matching exercises from the catalogue.
5. Adds cardio when required by the goal.
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

The database must contain exercises for the required movement patterns before a program can be generated successfully.

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
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

The supplied Compose file creates the database and persists its data in a named volume:

```bash
docker compose up -d postgres
```

### 4. Seed the exercise catalogue

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

### 5. Start the API

Development mode with automatic restart:

```bash
npm run dev
```

The API is available at `http://localhost:3000` unless `PORT` is changed.

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Run the development server with Nodemon |
| `npm start` | Run the server with Node's watch mode |
| `npm test` | Run the Jest integration suite serially |
| `npm run exercises:fetch` | Fetch the raw WorkoutAPI exercise dataset |
| `npm run exercises:normalize` | Normalize raw exercise data for the local model |
| `npm run exercises:prepare` | Fetch and normalize the dataset |
| `npm run exercises:seed` | Replace and seed the exercise catalogue |

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

Most resource endpoints return:

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "meta": {}
}
```

Collection metadata, including exercise pagination, is placed in `meta`.

### Error responses

Operational errors are handled centrally:

```json
{
  "success": false,
  "error": {
    "code": "PROGRAM_NOT_FOUND",
    "message": "Program not found"
  }
}
```

Unknown routes return `404 ROUTE_NOT_FOUND`. In production, unexpected 500-level errors are returned with a generic message so internal details are not exposed.

## API reference

All routes marked **Protected** require the authentication cookie.

### Authentication

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/auth/register` | Public | Register a new user |
| `POST` | `/auth/login` | Public, rate-limited | Authenticate and set the session cookie |
| `GET` | `/auth/me` | Protected | Return the authenticated user |
| `POST` | `/auth/logout` | Public | Clear the session cookie |

Register or log in with:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "a-strong-password"
}
```

`name` is required only when registering. Password hashes are never included in authentication responses.

### Programs

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/programs/create` | Protected | Generate and persist a complete program |
| `GET` | `/programs` | Protected | List the current user's programs |
| `GET` | `/programs/:id` | Protected | Get an owned program with its workouts and workout exercises |
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
| `GET` | `/programs/:programId/workouts/:workoutId` | Protected | Get one workout |
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
| `GET` | `/programs/:programId/workouts/:workoutId/workout-exercises` | Protected | List the workout's ordered exercises |
| `PATCH` | `/programs/:programId/workouts/:workoutId/workout-exercises/:id` | Protected | Edit an exercise prescription |
| `DELETE` | `/programs/:programId/workouts/:workoutId/workout-exercises/:id` | Protected | Remove an exercise from the workout |

Any supplied workout-exercise fields are updated; omitted fields keep their previous values:

```json
{
  "exerciseId": 42,
  "sets": 4,
  "reps": "8-12",
  "restSeconds": 90,
  "order": 2
}
```

### Exercise catalogue

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/exercises?page=1` | Protected | Get a page of 10 exercises |
| `GET` | `/exercises/:id` | Protected | Get an exercise by ID |
| `GET` | `/exercises/movement-pattern/:movementPattern` | Protected | Find exercises by movement pattern |

The original third-party `raw` payload is intentionally excluded from API responses.

### Development user routes

| Method | Endpoint | Current access | Description |
|---|---|---|---|
| `GET` | `/users` | Public | List users without password hashes |
| `GET` | `/users/:mail` | Public | Find a user's public name/email data |

These routes are useful during backend development but should be removed, protected, or converted to administrative routes before production deployment.

## Testing

Create a dedicated `.env.test` from the supplied example and point it at a test-only PostgreSQL database:

```bash
cp .env.test.example .env.test
npm test
```

Do not point `.env.test` at a development or production database. The integration setup synchronizes the schema and clears test data between cases.

The suite covers the application root, authentication, exercises, programs, workouts, and workout exercises. Tests run serially to keep shared database state deterministic.

GitHub Actions runs the same suite on pushes and pull requests targeting `main` or `develop`, using an isolated PostgreSQL 16 service.

## Security decisions

- Passwords are hashed with bcrypt before persistence.
- Password hashes are excluded from user-facing queries and serialized auth responses.
- JWTs are placed in HTTP-only cookies rather than returned for client-side storage.
- Protected queries include ownership constraints to prevent cross-user access.
- Login attempts are limited to five requests per 15-minute window per rate-limit key.
- Helmet supplies standard HTTP security headers.
- CORS permits the configured frontend origin and supports credentialed requests.
- Unexpected production errors do not expose internal messages.

## Current status and roadmap

The principal backend features are implemented. Before treating the API contract as stable for the frontend, the current priorities are:

- Correct exercise pagination metadata and partial-last-page handling.
- Apply the successful-response envelope to `/auth/me`, `/auth/logout`, and the root route.
- Preserve 500-level database errors in the authentication middleware instead of translating every failure into 401.
- Replace deletion-result strings with structured response data.
- Remove or protect the development user-list and email-lookup routes.
- Add boundary tests for pagination, authentication error classification, and delete operations.
- Document the API through OpenAPI once the response contract is frozen.
- Replace startup schema synchronization with versioned migrations before production use.

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

Keep commits focused, avoid committing environment files, and describe any API-contract change in the pull request.

## Author

Developed by [Pablo Vecilla](https://github.com/PabloVecilla) as a full-stack learning and portfolio project.

## License

The package currently declares the ISC license. Add a root `LICENSE` file before publishing or distributing the project as an open-source package.
