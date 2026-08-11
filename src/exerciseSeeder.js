const exercises = [
    {
      "id": "d9bb588d-07cd-4cf3-a22e-fecf9bc5d721",
      "code": "DUMBBELL_SHRUGS",
      "primaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Shrugs",
      "description": "Stand upright with a dumbbell in each hand, arms fully extended at your sides, and palms facing your body. Keep your chest lifted, shoulders pulled slightly back, and core engaged. Without bending your elbows, lift your shoulders straight up toward your ears as high as you can. Focus on contracting your trapezius muscles at the top of the movement. Pause briefly, then slowly lower your shoulders back down under control. Avoid rolling or rotating the shoulders — the motion should be vertical and controlled."
    },
    {
      "id": "5e11a729-4787-4141-8938-aa92b7924f47",
      "code": "FRONT_RAISE_WITH_DUMBBELLS",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Front Raise with Dumbbells",
      "description": "Stand upright with a dumbbell in each hand, arms extended down in front of your thighs, and palms facing your body. Keep your chest lifted, shoulders relaxed, and engage your core. Raise one or both arms straight in front of you until they reach shoulder height, keeping your elbows slightly bent and wrists neutral. Pause briefly at the top to contract your shoulder muscles. Lower the dumbbells slowly and under control back to the starting position. Avoid using momentum or swinging your body during the movement."
    },
    {
      "id": "c3b3f07f-f287-4b6b-a1c9-d21b5945c473",
      "code": "DUMBBELL_SHOULDER_PRESS",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Shoulder Press",
      "description": "Sit on a bench with back support and hold a dumbbell in each hand resting on your thighs. Using your legs, help lift the dumbbells up to shoulder height, elbows bent and palms facing forward. Press the dumbbells upward until your arms are fully extended above your head, bringing the weights slightly together at the top without locking your elbows. Lower the dumbbells in a controlled manner back to shoulder level. Keep your core tight and avoid arching your back. This exercise can also be performed standing, but requires strict posture and core engagement."
    },
    {
      "id": "68e1ab6b-576a-4f6c-83e9-cbf2fc2e0a99",
      "code": "BARBELL_SHOULDER_PRESS",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Barbell Shoulder Press",
      "description": "Stand tall with your feet shoulder-width apart and a barbell resting at shoulder level, palms facing forward and elbows slightly in front of the bar. Engage your core and retract your shoulder blades. Press the barbell upward in a straight line until your arms are fully extended above your head without locking the elbows. At the top, keep the bar slightly behind your head for proper alignment. Lower the barbell back to shoulder level with control. Keep your torso upright throughout the movement and avoid leaning back."
    },
    {
      "id": "469676ed-de8e-4f8d-a470-dc31788dffa7",
      "code": "ABDUCTORS_MACHINE",
      "primaryMuscles": [
        {
          "id": "13d435cc-47f9-4049-a2e7-2d1383d4c528",
          "code": "ABDUCTORS",
          "color": "#F8961E",
          "name": "Abductors"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Abductors machine",
      "description": "Sit on the machine with your back pressed against the backrest. Position your legs so that the outsides of your thighs and your feet rest against the pads. Push your legs outward by contracting your abductors, then slowly control the return to the starting position."
    },
    {
      "id": "8024f6c8-bf61-48e5-9172-3303e4bc8c5a",
      "code": "LATERAL_RAISE_WITH_DUMBBELLS",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Lateral Raise with Dumbbells",
      "description": "Stand upright with a dumbbell in each hand, arms relaxed at your sides, and palms facing your body. Engage your core and keep your chest lifted. With a slight bend in your elbows, raise both arms out to the sides until they reach shoulder height, keeping the motion smooth and controlled. Pause briefly at the top while contracting your shoulder muscles. Lower the dumbbells slowly back to the starting position. Avoid swinging or using momentum. This exercise can also be performed seated for greater isolation."
    },
    {
      "id": "e740fe5e-1806-42ae-8fcf-ba8bd3deba04",
      "code": "CABLE_LATERAL_RAISE",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Cable Lateral Raise",
      "description": "Set the cable pulley to the lowest position and attach a single handle. Stand sideways to the machine, holding the handle with the hand farthest from the pulley. Let your arm rest alongside your body with a slight bend in the elbow. Engage your core and raise your arm out to the side until it reaches shoulder height, keeping the movement slow and controlled. Pause briefly at the top, then lower the handle back to the starting position. Keep your torso still and avoid swinging. Repeat the movement on the opposite side."
    },
    {
      "id": "ca06dd2b-a359-485d-ac07-4fb75a34591e",
      "code": "ARNOLD_DUMBBELL_PRESS",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Arnold Dumbbell Press",
      "description": "Sit on a bench with back support, holding a dumbbell in each hand resting on your thighs. Lift the dumbbells to chest level with your palms facing your body and elbows bent in front of you. Begin the press by rotating your wrists outward as you press the weights overhead. At the top of the movement, your arms should be fully extended and your palms facing forward. Reverse the motion as you lower the dumbbells, rotating your wrists back inward to return to the starting position. Keep your core tight and perform the movement in a smooth and controlled manner."
    },
    {
      "id": "b0f52bf5-5109-411f-8741-3a0b203edd4d",
      "code": "UPRIGHT_ROW",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Upright Row",
      "description": "Stand upright holding a barbell with a narrow, overhand grip at hip level. Keep your back straight, chest up, and core engaged. Pull the barbell straight up along your body, leading with your elbows and keeping the bar close to your torso. Raise the bar until it reaches upper chest or neck level, with elbows flaring outward and positioned above the wrists. Pause briefly at the top, then lower the bar slowly and under control back to the starting position. Avoid swinging or using momentum throughout the movement."
    },
    {
      "id": "cb7c5b77-8250-4b03-b807-b2628d0c4cfa",
      "code": "CABLE_FRONT_RAISE",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Cable Front Raise",
      "description": "Set the cable pulley to the lowest position and attach a single handle. Stand facing away from the machine with the handle held in one hand, arm resting alongside your body and palm facing your thigh. Engage your core and raise your arm straight in front of you to shoulder height, keeping your elbow slightly bent and wrist neutral. Pause briefly at the top, then slowly lower the handle back to the starting position with control. Avoid using momentum or leaning backward. Repeat the same motion with the other arm."
    },
    {
      "id": "ba597d31-1cab-42ba-8824-5e21a8894dc5",
      "code": "REVERSE_FLY_ON_INCLINE_BENCH",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Reverse Fly on Incline Bench",
      "description": "Lie face down on an incline bench with a dumbbell in each hand, arms extended toward the floor and palms facing each other. Keep your chest in contact with the bench and engage your core. With a slight bend in the elbows, raise your arms out to the sides in a wide arc until they reach shoulder height. Focus on squeezing the shoulder blades together at the top. Lower the dumbbells slowly and under control back to the starting position. Avoid using momentum or swinging the arms."
    },
    {
      "id": "b3bb1c8f-7ebb-46f8-8868-cef454397506",
      "code": "INCLINE_DUMBBELL_REVERSE_FLY",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Incline Dumbbell Reverse Fly",
      "description": "Stand with a dumbbell in each hand, arms extended down at your sides. Hinge forward at the hips with a flat back and slight bend in your knees, bringing your torso close to parallel with the floor. With a slight bend in the elbows, raise your arms out to the sides in a wide arc until they reach shoulder height, squeezing your shoulder blades together at the top. Lower the dumbbells slowly and under control back to the starting position. The movement can also be performed seated on an incline bench for greater stability."
    },
    {
      "id": "f7dd3ddd-45e6-41b7-bff4-a7d17535edac",
      "code": "CABLE_REVERSE_FLY",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Cable Reverse Fly",
      "description": "Stand facing the cable machine with both pulleys set at the highest position. Grab the left handle with your right hand and the right handle with your left hand, so that your arms are crossed in front of you with elbows slightly bent and hands just below shoulder height. Engage your core and pull both arms out and back in a wide arc until your hands are aligned with your shoulders and your arms are perpendicular to your torso. Focus on contracting the rear delts at the peak of the movement. Slowly return to the starting crossed-arm position with control, avoiding momentum or using your back."
    },
    {
      "id": "91c42b82-fc87-4640-b62d-ebcfa680e4e3",
      "code": "FACE_PULL",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Face Pull",
      "description": "Set the cable pulley to a high position and attach a rope handle. Stand facing the machine and grab each end of the rope with a neutral grip, thumbs pointing toward you. Step back slightly and extend your arms forward, keeping a slight bend in your elbows. Pull the rope toward your face by driving your elbows back and out while squeezing your shoulder blades together. At the end of the movement, your elbows should be at shoulder height, and your forearms should form a 90-degree angle, with the rope spread apart near your face. Reverse the motion slowly to return to the starting position, keeping tension on the cable at all times."
    },
    {
      "id": "fc9a3107-4438-482b-9731-a47d2643d8aa",
      "code": "REVERSE_BUTTERFLY",
      "primaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Reverse Butterfly",
      "description": "Sit facing the rear side of the butterfly (pec deck) machine and adjust the seat so that your shoulders are aligned with the handles. Grab the handles with a neutral grip and keep your elbows slightly bent. Pull the handles outward and backward in a wide arc, focusing on squeezing your shoulder blades together at the peak of the movement. Keep your chest in contact with the pad and avoid using momentum. Slowly return the handles to the starting position under control to complete the rep."
    },
    {
      "id": "5e663e6e-d154-42fe-8187-a362bc5e641a",
      "code": "DUMBBELL_BICEPS_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Biceps Curl",
      "description": "Stand upright with a dumbbell in each hand, arms fully extended at your sides and palms facing forward. Keep your elbows close to your torso and your back straight. Curl the dumbbells upward by flexing your elbows, bringing the weights toward your shoulders while keeping your upper arms stationary. Focus on contracting your biceps at the top of the movement. Lower the dumbbells slowly back to the starting position without locking your elbows completely. This exercise can also be performed seated on a bench."
    },
    {
      "id": "c1a1aec9-a7f7-4cad-b194-d4b3029e091c",
      "code": "DUMBBELL_HAMMER_GRIP_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Hammer Grip Curl",
      "description": "Stand upright with a dumbbell in each hand, arms extended at your sides and palms facing your body in a neutral grip. Keep your elbows close to your torso and maintain a straight back. Curl the dumbbells upward by bending your elbows, bringing the weights toward your shoulders while keeping the palms facing inward throughout the movement. Squeeze your biceps at the top, then lower the dumbbells slowly and under control back to the starting position without locking your elbows. This exercise can also be performed seated on a bench."
    },
    {
      "id": "9c77daf2-4670-4c41-9cc8-ff18874c53de",
      "code": "STANDING_CALF_RAISES",
      "primaryMuscles": [
        {
          "id": "a410c2fb-c73e-4a91-abb8-c4a752b3a944",
          "code": "CALVES",
          "color": "#4CC9F0",
          "name": "Calves"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Standing calf raises",
      "description": "Stand facing the machine with the balls of your feet on the edge of the platform. Adjust the shoulder pads to rest on your shoulders. With legs straight and back upright, raise your heels by contracting your calves to stand on your tiptoes. Then lower your heels slowly to return to the starting position."
    },
    {
      "id": "92e3cdb4-de91-451f-97f1-3fea1a8e8071",
      "code": "BARBELL_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Barbell Curl",
      "description": "Stand upright holding a barbell with both hands using a shoulder-width underhand grip, palms facing forward. Let your arms hang fully extended in front of your thighs. Keep your elbows close to your torso and curl the barbell upward by flexing your elbows, bringing the bar toward your shoulders. Focus on keeping your upper arms stationary and avoid swinging. Squeeze the biceps at the top, then lower the barbell in a controlled manner back to the starting position without locking your elbows. Maintain a straight back throughout the movement."
    },
    {
      "id": "2e02f98f-2f37-483d-acae-fd64e1161975",
      "code": "BICEPS_CURL_MACHINE",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Biceps Curl Machine",
      "description": "Adjust the seat height so your upper arms rest comfortably on the arm pad, with your elbows aligned with the machine’s pivot point. Grasp the handles or bar with an underhand grip. Keeping your upper arms fixed against the pad, curl the weight toward your shoulders by bending your elbows and contracting your biceps. Pause briefly at the top, then lower the weight slowly back to the starting position without fully locking your elbows. Maintain smooth and controlled movement throughout the exercise."
    },
    {
      "id": "e81e1e1b-8069-4d27-abf1-4b63f2d4acfe",
      "code": "REVERSE_BARBELL_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        },
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Reverse Barbell Curl",
      "description": "Stand upright holding a barbell with both hands using an overhand (pronated) grip, palms facing down, and hands at shoulder-width. Keep your elbows close to your body and your arms fully extended in front of your thighs. Curl the barbell upward by bending your elbows, bringing the bar toward your shoulders while keeping your upper arms stationary. Focus on contracting your forearms and biceps. Lower the bar slowly and under control back to the starting position, without locking your elbows. Maintain a straight posture throughout the movement."
    },
    {
      "id": "068f7fd1-0553-46b0-ba11-3bd1b015ac59",
      "code": "SPIDER_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Spider Curl",
      "description": "Lie face down on an incline bench with your chest supported and your arms hanging straight down, holding a dumbbell in each hand with your palms facing forward. Keep your upper arms vertical and stationary. Curl the weights toward your shoulders by bending your elbows and contracting your biceps. Pause briefly at the top, then lower the dumbbells slowly and under control to the starting position, without locking your elbows. This exercise can also be performed using a barbell."
    },
    {
      "id": "2345bcd2-d62b-43d6-9f80-c3f097c10015",
      "code": "SEATED_CALF_RAISES",
      "primaryMuscles": [
        {
          "id": "a410c2fb-c73e-4a91-abb8-c4a752b3a944",
          "code": "CALVES",
          "color": "#4CC9F0",
          "name": "Calves"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Seated calf raises",
      "description": "Sit on the machine seat and adjust the pads so they rest securely on your thighs. Unlock the weight by raising your heels using your calves, lifting onto the balls of your feet. Then lower your heels slowly back to the starting position."
    },
    {
      "id": "e10b8d2e-eb9c-4ba2-9f3a-e2b809ca9efd",
      "code": "BICEPS_CABLE_CURL",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Biceps Cable Curl",
      "description": "Stand facing a low cable pulley with a straight bar attachment. Grab the bar with an underhand grip, hands about shoulder-width apart, and arms fully extended in front of your thighs. Keep your elbows close to your torso and curl the bar upward by bending your elbows, bringing the bar toward your shoulders. Contract your biceps at the top of the movement. Slowly lower the bar back down to the starting position, maintaining control and avoiding full elbow lockout."
    },
    {
      "id": "f91a3c7c-bbcd-4c07-b099-fd1900f9004f",
      "code": "HIGH_CABLE_CURLS",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "High Cable Curls",
      "description": "Stand in the center of a cable crossover machine with both pulleys set at the highest position. Grab a handle in each hand using a supinated grip, and extend your arms out to the sides at shoulder height without locking your elbows. Keep your upper arms parallel to the floor and stationary. Curl the handles toward your head by bending your elbows and contracting your biceps. Pause briefly at the peak of the movement, then slowly return to the starting position while maintaining tension in the cables."
    },
    {
      "id": "88a8a194-5c31-48ef-8f54-295a822b3b0f",
      "code": "SUPINATED_GRIP_PULL_UPS",
      "primaryMuscles": [
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        },
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Supinated Grip Pull-Ups",
      "description": "Grab a pull-up bar with an underhand (supinated) grip, palms facing you, and hands about shoulder-width apart. Start from a dead hang with arms fully extended. Engage your core and pull your chest toward the bar by bending your elbows and squeezing your shoulder blades together. Continue pulling until your chin rises above the bar. Pause briefly at the top, then lower yourself slowly back down in a controlled manner without fully locking your elbows. Keep your body stable and avoid swinging throughout the movement."
    },
    {
      "id": "25547b23-4f0b-498f-965f-19e56c49953a",
      "code": "DIPS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Dips",
      "description": "Position yourself between parallel bars, using a step or platform if needed to reach the start. Grab the bars with a neutral grip and fully extend your arms without locking the elbows. Engage your core to maintain stability. Lower your body in a controlled motion by bending your elbows until your upper arms are about parallel to the ground. Avoid letting your elbows go higher than your shoulders. Push back up to the starting position, focusing on your triceps and chest. Keep your body upright and avoid swinging throughout the movement."
    },
    {
      "id": "056dfbc5-1c60-4e7d-9fdd-a693b0e0560f",
      "code": "LYING_BARBELL_EXTENSIONS",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Lying Barbell Extensions",
      "description": "Sit on a flat bench with a barbell resting on your thighs, gripping it with a narrow overhand grip. Lie back on the bench and extend your arms fully so the barbell is directly above your chest, perpendicular to your torso. Keeping your elbows tucked in and stationary, lower the barbell toward your forehead by bending only at the elbows. Once the bar is close to your forehead, extend your arms back up to the starting position without locking the elbows. Only your forearms should move throughout the exercise."
    },
    {
      "id": "24c56fcf-3acf-4ba0-9ada-230a8fac6331",
      "code": "CLOSE_GRIP_CHEST_PRESS",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Close Grip Chest Press",
      "description": "Sit on a flat bench with a barbell resting on your thighs, and grip it with a close overhand grip, palms facing down. Lie back and press the barbell straight up so your arms are fully extended above your chest. Keep your elbows close to your torso and lower the barbell down in a controlled motion until it touches or nearly touches your mid-chest. Press the bar back up to the starting position by extending your arms, without locking your elbows. Focus on keeping tension on the triceps throughout the movement."
    },
    {
      "id": "53c48eca-eebe-43e3-a6d4-19cbb00952f5",
      "code": "BENCH_DIPS",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Bench Dips",
      "description": "Position yourself with your back to a flat bench and place your hands on the edge behind you, fingers pointing forward. Extend your legs in front of you with your heels on the floor and your hips elevated. Lower your body by bending your elbows until your upper arms are about parallel to the ground. Avoid letting your shoulders drop below your elbows. Push yourself back up by extending your arms, without locking the elbows at the top. Engage your core throughout to keep the movement stable."
    },
    {
      "id": "70743c9c-e210-49e1-803f-b9b48268dca2",
      "code": "DUMBBELL_KICKBACK",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Kickback",
      "description": "Place one knee and the same-side hand on a flat bench for support, keeping your back straight and head in a neutral position. Hold a dumbbell in the opposite hand with your arm bent and upper arm parallel to your torso. Extend your arm fully by straightening the elbow until the dumbbell points backward. Keep your upper arm stationary and close to your body throughout. Squeeze your triceps at the top, then slowly return to the starting position without letting your elbow drop. Perform the desired reps and switch sides."
    },
    {
      "id": "e7861b4c-56ec-4139-befd-8e4996bed566",
      "code": "DUMBBELL_OVERHEAD_TRICEPS_EXTENSION",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Overhead Triceps Extension",
      "description": "Sit on a bench with back support, holding a single dumbbell with both hands. Grip the dumbbell by the upper end with your palms facing the weight plate for stability. Extend your arms overhead, keeping the dumbbell positioned above your head. Slowly bend your elbows to lower the weight behind your head, making sure your upper arms remain stationary and close to your ears. Do not allow the dumbbell to touch your neck. Once you reach a deep stretch, extend your arms again to return to the starting position. Keep your back straight and only move your forearms throughout the exercise."
    },
    {
      "id": "3ed7efc9-df29-4eb2-8382-611f50306637",
      "code": "ROPE_TRICEPS_EXTENSION",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Rope Triceps Extension",
      "description": "Attach a rope handle to a high pulley and stand facing the cable machine. Grab the rope with a neutral grip, elbows tucked close to your body and forearms parallel to the floor. Extend your arms downward, pushing the rope toward your thighs while slightly separating the ends of the rope at the bottom of the movement. Contract your triceps at the end, then slowly return to the starting position by bending your elbows. Only your forearms should move during the exercise."
    },
    {
      "id": "99ecaeb2-4829-44c3-9811-b62f49184e9e",
      "code": "OVERHEAD_TRICEPS_EXTENSION",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Overhead Triceps Extension",
      "description": "Attach a rope handle to a high pulley and stand facing away from the machine. Grab the rope with a neutral grip and bring your hands behind your head with your elbows bent and pointing forward. Take a small step forward and lean slightly. Extend your arms fully in front of you, pushing the rope forward and upward until your arms are straight. Focus on keeping your elbows in position. Slowly return to the starting position by bending your elbows. Keep your back straight and only move your forearms during the exercise."
    },
    {
      "id": "1023b10c-bfea-4bd9-8a29-759a5a4b048d",
      "code": "CLOSE_GRIP_PUSH_UPS",
      "primaryMuscles": [
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Close Grip Push-Ups",
      "description": "Get into a kneeling position and place your hands on the floor close together, just under your chest. Extend your legs back to form a plank, resting on the balls of your feet. Keep your body straight and engage your core. Lower your chest toward the floor by bending your elbows while keeping them close to your torso. Avoid letting your elbows flare out. Once your chest is just above the ground, push through your palms to return to the starting position. Maintain a straight back and controlled motion throughout."
    },
    {
      "id": "e39a2e31-14cd-4d74-95cd-267dcd7de83b",
      "code": "BARBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Barbell Bench Press",
      "description": "Lie flat on a bench with your feet firmly planted on the floor. Grip the barbell slightly wider than shoulder-width, keeping your wrists aligned over your elbows. Unrack the bar and position it above your chest. Lower the bar under control by bending your elbows, bringing it down to your mid-chest while keeping your elbows at about a 45-degree angle from your torso. Press the bar upward until your arms are extended, without locking your elbows. Maintain symmetry between both arms and avoid excessive arching of your lower back. At the end of your set, carefully rerack the bar."
    },
    {
      "id": "b2fa447f-c6bb-4e3a-b1a0-e0ec4cc86443",
      "code": "INCLINE_BARBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Incline Barbell Bench Press",
      "description": "Lie back on an incline bench, with your feet firmly planted on the floor. Grip the barbell slightly wider than shoulder-width. Unrack the bar and position it directly above your upper chest. Lower the bar under control by bending your elbows, bringing it to the upper portion of your chest. Press the bar back upward by extending your arms, stopping just before locking your elbows. Keep your back flat against the bench, maintain symmetry, and avoid excessive arching. Rerack the bar safely after completing your set."
    },
    {
      "id": "e4bba463-ea6c-4cb7-b0bc-84be43bcf871",
      "code": "DECLINE_BARBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Decline Barbell Bench Press",
      "description": "Lie back on a decline bench with your feet secured under the foot pads and your back firmly supported. Grip the barbell slightly wider than shoulder-width. Unrack the bar and position it over your lower chest. Lower the bar slowly and under control by bending your elbows, keeping them at a slight angle from your torso. Press the bar back up by extending your arms until they are almost straight, without locking the elbows. Focus on maintaining symmetry, keeping your back stable, and returning the bar safely to the rack after your set."
    },
    {
      "id": "552b8806-3c9d-40d9-ac10-ae2292af55ce",
      "code": "DUMBBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Bench Press",
      "description": "Sit on a flat bench with a dumbbell in each hand, using a neutral or standard grip. Lie back with your feet firmly planted on the floor and bring the dumbbells to chest level. Press the weights upward until your arms are nearly extended, allowing the dumbbells to come close together at the top. Lower the dumbbells under control by bending your elbows, bringing them down to the sides of your chest according to your shoulder mobility. Press back up while keeping your arms moving in a controlled arc. Do not lock out the elbows. Keep your back flat on the bench and ensure even movement on both sides."
    },
    {
      "id": "778d78b2-bbf1-49b6-8e19-2f0a6f707ca1",
      "code": "INCLINE_DUMBBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Incline Dumbbell Bench Press",
      "description": "Sit on an incline bench with a dumbbell in each hand, using a neutral or standard grip. Lie back with your feet firmly planted on the floor and position the dumbbells at chest level. Press the dumbbells upward at a slight angle until your arms are almost fully extended, bringing the weights close together at the top. Slowly lower them under control by bending your elbows, allowing the dumbbells to descend toward the upper chest. Avoid locking your elbows at the top and maintain control throughout the motion. Keep your back pressed to the bench and ensure symmetrical movement with both arms."
    },
    {
      "id": "4e00180a-932f-47b4-b43c-c90efbe88f7f",
      "code": "DECLINE_DUMBBELL_BENCH_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Decline Dumbbell Bench Press",
      "description": "Sit on a decline bench with a dumbbell in each hand using a neutral or standard grip. Lie back and secure your feet under the support pads. Bring the dumbbells to chest level and press them upward until your arms are nearly extended, bringing the weights close together at the top. Slowly lower the dumbbells in a controlled arc toward the lower chest by bending your elbows. Avoid locking your elbows at the top. Maintain control and symmetry between both arms, keep your back supported on the bench, and avoid excessive arching."
    },
    {
      "id": "6c5960d4-eeaa-48bb-b5f0-b878b1b4bda6",
      "code": "DUMBBELL_CHEST_FLYS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Dumbbell Chest Flys",
      "description": "Sit on a flat bench with a dumbbell in each hand using a neutral grip. Lie back with your feet firmly planted on the ground and extend your arms above your chest with the dumbbells close together. Open your arms out to the sides in a wide arc, keeping a slight bend in your elbows. Lower the dumbbells until they reach approximately chest level, depending on your shoulder mobility. Engage your chest to bring the dumbbells back together over your chest in a controlled motion. Avoid locking the elbows. To emphasize the upper chest, you can use a slightly inclined bench, but too much incline will shift the focus to the shoulders."
    },
    {
      "id": "29309a66-018c-40cd-9a19-462760fa68f8",
      "code": "PUSH_UPS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Push-Ups",
      "description": "Start on all fours, placing your hands shoulder-width apart or slightly wider, and your feet extended behind you with your toes on the ground. Keep your body in a straight line from head to heels by engaging your core and glutes. Lower your chest toward the floor by bending your elbows, keeping them close to your sides. When your chest nearly touches the floor, push through your palms to extend your arms and return to the starting position. Maintain a straight spine and avoid letting your hips sag or rise throughout the movement."
    },
    {
      "id": "07bb04f5-d49c-4d2d-8d53-22a21876bb49",
      "code": "LEG_RAISES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Leg raises",
      "description": "Lie on your back on a mat with your arms at your sides and your legs straight or slightly bent. Contract your abs to lift your legs up to about a 90° angle, then control the descent back to the starting position, stopping just before your feet touch the ground to maximize muscle engagement. Keep your lower back pressed against the mat throughout the exercise."
    },
    {
      "id": "9c779edb-ed82-4c8c-b5d6-6aa5636a8c53",
      "code": "PEC_DECK",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Pec-Deck / Butterfly",
      "description": "Adjust the seat so that your elbows are aligned with shoulder height when you grip the handles. Sit with your back firmly against the pad and your feet flat on the floor. Keep a slight bend in your elbows and bring the handles together in front of your chest by contracting your chest muscles. Pause briefly at the top, then slowly return to the starting position by opening your arms in a controlled motion. Keep the movement smooth and your back supported throughout the exercise."
    },
    {
      "id": "a1845d34-57d3-466f-8835-b9820cb636ee",
      "code": "SEATED_CHEST_PRESS",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Seated Chest Press",
      "description": "Adjust the seat so that the handles are aligned with the middle of your chest. Sit down with your back flat against the pad and feet firmly on the floor. Grasp the handles with elbows bent around 90 degrees. Press the handles forward by extending your arms in a controlled motion, without locking your elbows at the top. Slowly return to the starting position by bending your elbows, keeping tension on your chest muscles throughout the movement."
    },
    {
      "id": "ca2d88b1-64ff-40f9-800a-f7375f4330bd",
      "code": "HIGH_CABLE_CHEST_FLY",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "High Cable Chest Fly",
      "description": "Set the pulleys to a high position and stand in the center of the machine. Grab the handles with a neutral grip and take a small step forward to create tension. With a slight bend in your elbows, open your arms wide, then bring your hands together in front of your chest by contracting your pectorals. Keep the movement slow and controlled, especially during the negative phase. Do not let the handles go too far behind you to avoid shoulder strain. You can lean slightly forward to better isolate specific areas of the chest."
    },
    {
      "id": "ee03ea81-05bb-46ab-b197-ad3c2b36da50",
      "code": "LOW_CABLE_CHEST_FLY",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Low Cable Chest Fly",
      "description": "Set the pulleys to a low position and stand in the center of the machine. Grab the handles with a neutral grip and step slightly forward to create tension. With a slight bend in your elbows, raise your arms upward in a wide arc while bringing your hands together in front of your head, contracting your chest muscles. Pause briefly at the top, then slowly lower your arms back to the starting position in a controlled motion. Focus on keeping your chest engaged throughout the movement."
    },
    {
      "id": "2a7edcb5-5007-4644-a66a-04e2e53db655",
      "code": "PLANK",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Plank",
      "description": "Kneel down, then place your elbows on the mat and extend your legs to distribute your weight between your toes and forearms. Your back should remain straight throughout the hold. Contract your abs to maintain this position for the set duration, then relax."
    },
    {
      "id": "2b6dfd9d-cbde-416c-a78c-f4c6464b2d8e",
      "code": "INCLINE_CHEST_PRESS_MACHINE",
      "primaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Incline Chest Press Machine",
      "description": "Adjust the seat height so the handles align with your upper chest. Sit with your back firmly against the pad and feet flat on the floor. Grasp the handles with a firm grip and press them upward and slightly forward by extending your arms, without locking your elbows at the top. Slowly bring the handles back down in a controlled motion to return to the starting position. Keep your chest engaged and back supported throughout the movement."
    },
    {
      "id": "1a3871a0-8eb9-4c5a-9729-5f5decb3d30b",
      "code": "PRONATED_GRIP_PULL_UPS",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Pronated Grip Pull-Ups",
      "description": "Grab the pull-up bar with an overhand (pronated) grip, hands at or slightly wider than shoulder-width apart. Engage your back muscles and pull your body upward until your chin passes the height of the bar. Focus on keeping the movement smooth and controlled. Slowly lower yourself back down without fully locking your elbows at the bottom. Keep your body tight and avoid swinging. Emphasize pulling with your back rather than relying too much on the biceps, especially in the early phase of the lift."
    },
    {
      "id": "16617d96-9515-43cd-8a8b-1e6d92d149d7",
      "code": "HORIZONTAL_ROW_MACHINE",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Horizontal Row Machine",
      "description": "Sit facing the machine and place your feet on the supports. Bend your knees to reach the handles while keeping your back straight. Then extend your legs slightly to unlock the weight stack and create space. Retract your shoulders and squeeze your shoulder blades together as you pull the handles toward your midsection, ideally around your navel. Slowly return to the starting position with control. After completing your repetitions, bend your knees again to bring the weight stack back without rounding your back."
    },
    {
      "id": "547a7cc9-e77a-42e0-8392-ccc7b92492cc",
      "code": "PULL_DOWN",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Pull-Down",
      "description": "Sit on the seat facing the machine and grasp the bar with a pronated grip (palms facing away), hands shoulder-width or slightly wider. Engage your lats to pull the bar down toward your upper chest, keeping your torso upright. Pause briefly at the bottom, then slowly return to the starting position without locking out your elbows. Focus on controlling the negative phase of the movement. This exercise can also be performed with a supinated grip (palms facing you) for increased biceps activation."
    },
    {
      "id": "43922050-4019-459e-9891-a705dd6dea2f",
      "code": "BARBELL_BENT_OVER_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Barbell Bent Over Row",
      "description": "Stand with your feet shoulder-width apart and grasp the barbell with a pronated grip (palms facing down), holding it at hip level. Bend forward at the hips, keeping your back straight and chest up. Pull the bar toward your lower abdomen by retracting your shoulders and squeezing your shoulder blades together. Lower the bar in a controlled manner back to the starting position. Maintain a straight back throughout the movement. This exercise can also be performed with a supinated grip (palms facing up) to place more emphasis on the biceps."
    },
    {
      "id": "6d770c06-b673-4a5f-84fa-bed46b1cbea0",
      "code": "BENT_OVER_DUMBBELL_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Bent Over Dumbbell Row",
      "description": "Stand with a dumbbell in each hand, arms hanging at your sides. Slightly bend your knees and hinge forward at the hips while keeping your back straight and chest up. Pull the dumbbells toward your hips by retracting your shoulders and squeezing your shoulder blades together. Lower the weights in a controlled motion until your arms are nearly fully extended. Focus on using your back muscles and minimize biceps involvement to better isolate the upper and mid-back."
    },
    {
      "id": "466c1af0-dd87-4a7b-bc29-c477f07eec6a",
      "code": "UNILATERAL_BENT_OVER_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Unilateral Bent Over Row",
      "description": "Place one knee and the same-side hand on a flat bench to support your body, ensuring your back remains flat and parallel to the ground. With your free hand, grab a dumbbell and pull it up toward your hip by retracting your shoulder and squeezing your shoulder blade. Pause briefly at the top, then lower the dumbbell under control until your arm is nearly fully extended. Focus on using your back muscles rather than the biceps. After completing one side, switch and perform the movement on the other arm."
    },
    {
      "id": "9fe1bfcf-2b79-4944-9429-7b13c199e8f9",
      "code": "AUSTRALIAN_PULL_UPS",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Australian Pull-Ups",
      "description": "Set the bar at a height that allows you to grip it while keeping your heels on the ground. Grab the bar with an overhand grip (palms facing away from you), hands shoulder-width apart or slightly wider. Engage your shoulder blades to pull your chest toward the bar while keeping your body straight and core tight. Lower yourself in a controlled manner without locking out the elbows at the bottom. Focus on using your back muscles throughout the movement and avoid relying on the biceps too early in the pull."
    },
    {
      "id": "a75d2916-f033-4519-9f68-750d61ab03cf",
      "code": "T_BAR_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "T-Bar Row",
      "description": "Stand over the T-bar with your feet shoulder-width apart. Bend your knees slightly and hinge forward at the hips while keeping your back flat and chest up. Grab the handles with either a pronated or neutral grip, depending on the handle type. Pull the bar toward your torso by retracting your shoulder blades and driving your elbows back. Squeeze your back at the top, then lower the weight under control without locking your arms at the bottom. Focus on using your back muscles and limit biceps involvement early in the pull."
    },
    {
      "id": "85e8b77a-d1c9-408d-a0a8-4241a87c5b76",
      "code": "DEADLIFT",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        },
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "fa594710-7835-42f6-bf47-6a2ffa1dbe25",
          "code": "FOREARMS",
          "color": "#219EBC",
          "name": "Forearms"
        },
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Deadlift",
      "description": "Stand with your feet shoulder-width apart, the barbell positioned over the middle of your feet. Bend at the hips and knees while keeping your back flat and chest up. Grab the bar with a pronated grip (palms facing you) and engage your lats by pulling your shoulders back. Push through your heels to lift the bar, extending your hips and knees simultaneously until you're standing upright. Pause briefly at the top without leaning back. Lower the bar in a controlled motion by hinging at the hips and bending your knees, keeping your back straight throughout the descent."
    },
    {
      "id": "8f2236ad-bfee-47c7-9d3d-cd691ef7a71a",
      "code": "BACK_EXTENSIONS",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Back extensions",
      "description": "Position yourself on the back extension machine, securing your feet and adjusting the pad so it rests just below your hips. Start with your upper body straight in line with your legs. Lower your torso by hinging at the hips, keeping your back flat and descending as far as your mobility allows. Reverse the movement by contracting your lower back muscles to raise your torso until your body is straight again, avoiding hyperextension. To increase difficulty, you can hold a weight plate against your chest."
    },
    {
      "id": "952cf8fb-56dc-4ce1-b8a5-8317a9e03c45",
      "code": "PUSHDOWN_STRAIGHT_ARM",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "7b4e6ed4-208c-4fe5-b90e-236988391642",
          "code": "TRAPEZIUS",
          "color": "#264653",
          "name": "Trapezius"
        },
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Pushdown straight arm",
      "description": "Stand facing the cable machine and grab the straight bar with a pronated grip (palms facing down). Step slightly back and bend your knees slightly while keeping your back straight. With arms fully extended but not locked, use your lats to push the bar down toward your thighs, maintaining your arms straight throughout the motion. Once at the bottom, slowly return the bar to the starting position in a controlled manner. Keep your back straight and core engaged at all times."
    },
    {
      "id": "fa70baca-877c-4cce-8bce-75fb4c5b36b4",
      "code": "LOW_CABLE_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Low cable row",
      "description": "Stand or sit facing the low pulley machine and grab the handle with a pronated grip (palms facing down). Keep your back straight and chest up as you pull the handle toward your torso, focusing on squeezing your shoulder blades together. Pause briefly at the top, then slowly return to the starting position with control. You may also perform this exercise with a supinated grip (palms facing up) for more biceps engagement, or unilaterally to isolate each side."
    },
    {
      "id": "be976a19-31b8-4aee-b902-3faacf2c599d",
      "code": "TRX_ROW",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "5f492cb3-0286-4fb2-b0b1-b954f7a515f2",
          "code": "BICEPS",
          "color": "#FFBE0B",
          "name": "Biceps"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "TRX row",
      "description": "Grab the two handles with a neutral grip and lean back while keeping your arms and legs extended but not locked. Pull your chest toward the handles by bending your elbows and keeping them close to your body. Control the descent back to the starting position. Maintain a straight body line throughout the movement. You can increase or decrease the difficulty by adjusting your foot placement and the height of the handles. Changing your grip (pronated or supinated) also helps target different muscle fibers."
    },
    {
      "id": "841838ea-a3b4-4a07-b6a4-09441e5d62c7",
      "code": "PULLOVER",
      "primaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Pullover",
      "description": "Place a dumbbell on your knees while sitting on the bench. Lie back and bring the dumbbell above your chest, holding it with both palms against the inside of the weight plate for better control. Extend your arms slightly bent and pivot the shoulders backward to lower the dumbbell behind your head. Engage your lats to bring the weight back above your chest and repeat. Maintain a strong grip on the weight to avoid injury. This exercise can also be performed with a barbell."
    },
    {
      "id": "162e33cf-954b-4813-b5b5-20532be5adce",
      "code": "CRUNCHES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Crunches",
      "description": "Lie on your back on a mat with your knees bent. Place your hands at your temples or cross your arms over your chest. Contract your abdominal muscles to lift your upper body off the floor, keeping your lower back pressed against the mat at all times. Return to the starting position and repeat."
    },
    {
      "id": "b108db4a-033a-48bd-8888-cc1e47dd7b1c",
      "code": "ROTATION_CRUNCHES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        },
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Rotation crunches",
      "description": "Lie on your back on a mat with your knees bent. Place your hands at your temples and cross one leg over the other by placing your ankle on the opposite knee. Contract your abs while slightly rotating your torso to bring your elbow toward the crossed leg. Return to the starting position and repeat with the opposite leg. Keep your lower back pressed against the mat throughout the exercise."
    },
    {
      "id": "f0f2ca4f-8a61-4893-8028-afa72f6db5a0",
      "code": "LATERAL_PLANK",
      "primaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Lateral plank",
      "description": "Kneel down and place one of your elbows on the mat, then extend your legs on the opposite side to distribute your weight between one foot and the active forearm. You will be positioned sideways to engage the oblique muscle. Your back should remain straight throughout the hold. Contract your abs to maintain this position for the set duration, then relax. Repeat on the other side."
    },
    {
      "id": "e732b585-8ef8-4e70-8cba-7eaf2ab51fe9",
      "code": "MOUNTAIN_CLIMBERS",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Mountain climbers",
      "description": "Kneel down and place your hands flat on the mat, then extend your legs. Bend one knee to bring it toward your chest. At that moment, extend that same leg back to the starting position while bending the opposite knee. Repeat this cycle at a fast pace to work on your cardio. Remember to contract your abs throughout the movement."
    },
    {
      "id": "892ab817-0a94-44b0-ae91-6524992dc8e1",
      "code": "RUSSIAN_TWIST",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        },
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Russian twist",
      "description": "Sit on a mat with your knees bent and your hands joined in front of you. Slightly lift both feet off the floor, and rotate your torso to bring your hands to one side of your body while keeping them together. Do the same on the opposite side and continue. Keep your abs engaged to optimize core work and maintain posture and balance."
    },
    {
      "id": "2ecb1988-3f72-43a0-970e-ddb2d2837103",
      "code": "V_UPS",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "V-ups",
      "description": "Lie down on a mat with your legs together and your arms by your sides. Contract your abs to raise your legs while keeping them straight, and lift your torso to try to touch your feet with your hands. The goal is to balance on your glutes during each repetition."
    },
    {
      "id": "790f5330-befd-4bd3-889f-0916bf580e20",
      "code": "SCISSORS",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Scissors",
      "description": "Lie down on a mat with your legs together and your arms along your sides. Slightly lift both legs off the ground, then raise one leg while keeping it straight, as the other remains close to the floor. Lower the raised leg while lifting the other, and alternate like this throughout the set. Keep your lower back pressed into the mat during the entire movement."
    },
    {
      "id": "5b11e277-0a7c-4a18-bcd3-83f4473b277c",
      "code": "SQUAT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Squat",
      "description": "Place a bar on a rack at a suitable height. Rest the bar on your traps behind your neck, then straighten your legs to lift it off the rack. Step back slightly and position your feet shoulder-width apart or slightly wider. Keep your back straight and your abs tight, bend your knees while focusing the load on your heels to maintain balance. Imagine sitting down on a chair and keep a straight path throughout the movement. Once you reach the bottom (depth depends on your mobility), contract your quads and glutes to lift the bar back up. After your set, carefully rack the bar. Always keep your back straight and avoid pushing your knees too far forward during the squat."
    },
    {
      "id": "ea1baf5b-cf79-4bbc-9ad5-5ecb69bc58d1",
      "code": "ROMAN_CHAIR_LEG_RAISES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Roman chair leg raises",
      "description": "Press your back against the pad and place your elbows on the armrests so that your arms are bent at 90°. With legs straight and together, bend them to raise your knees as high as possible, contracting your abs throughout the movement. While maintaining this contraction, return to the starting position with legs extended, and repeat. This exercise can also be performed with legs kept straight the entire time, which makes it harder and more effective. Always keep your back pressed against the pad during execution."
    },
    {
      "id": "608cc441-59ff-483a-b025-088ba20d0123",
      "code": "HEEL_TOUCHES",
      "primaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Heel touches",
      "description": "Lie on a mat with your knees bent and arms along your sides. By contracting your obliques, reach to touch your heel on one side with your hand, without lifting your back off the mat. Return to the starting position and repeat on the other side. Keep your abs contracted throughout the movement to maximize muscle engagement."
    },
    {
      "id": "9f1f11b1-22fe-434c-8757-ab7b39d8da54",
      "code": "CABLE_CRUNCHES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "68247c09-703c-40c3-836f-b53429f8d2e0",
          "code": "CABLE",
          "name": "Cable"
        }
      ],
      "name": "Cable crunches",
      "description": "Attach a rope to a high pulley and kneel facing it. Grab the rope with both hands in a neutral grip (palms facing inward), keeping your back straight at the start. Contract your abs to round your back forward, keeping the ends of the rope near your ears. Once you've reached maximum contraction, return to the starting position slowly to optimize muscle engagement. Avoid going too low to prevent engaging the hip flexors and focus on the abs."
    },
    {
      "id": "f4841d90-ca1e-4479-9308-473edc54c55f",
      "code": "AB_WHEEL",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        },
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "AB Wheel",
      "description": "Kneel down (preferably on a mat) and grab the AB Wheel in front of you while bending forward. Roll it as far as possible while engaging your abs until your back is straight. Hold this extended position for 2 or 3 seconds, then contract your abs to roll the wheel back to the starting position. Keep your arms and knees close together throughout the movement."
    },
    {
      "id": "4c4be49b-fc91-49e1-a806-bc4f870712ab",
      "code": "HANGING_LEG_RAISES",
      "primaryMuscles": [
        {
          "id": "61916ac6-3f2c-4d4b-86bf-29e909fc6c3f",
          "code": "ABS",
          "color": "#E76F51",
          "name": "Abdominals"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "9606cc81-9b0c-42c6-9331-b0b9c1ac2d3c",
          "code": "OBLIQUES",
          "color": "#00B4D8",
          "name": "Obliques"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Hanging leg raises",
      "description": "Grab the bar with an overhand grip (palms facing away), keep your body straight and abs engaged to avoid swinging. Contract your abs to lift your legs in front of you while keeping them straight. Touch the bar with your feet (or get as close as possible), then control the descent back to the starting position. This exercise can also be performed with bent knees at 90° to make it easier."
    },
    {
      "id": "ae09d63b-589f-4fd8-b898-cb81758b0530",
      "code": "PISTOL_SQUAT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Pistol squat",
      "description": "Stand upright with your arms down at your sides. While balancing on one leg, perform a squat, going as low as your mobility allows. As you descend, extend your arms in front of you to help distribute your weight and maintain alignment. At the bottom, contract your quadriceps to return to the starting position, then repeat with the opposite leg. Make sure not to let your knee move too far forward during the descent."
    },
    {
      "id": "c6524898-6ee0-4752-a5a2-db48c57d576d",
      "code": "FRONT_SQUAT",
      "primaryMuscles": [
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Front Squat",
      "description": "Set a barbell on a rack at a height that suits you. Rest the bar on the front of your shoulders and grip it with your palms facing up (you can also cross your arms over the bar to reduce wrist strain). Stand up to lift the bar off the rack. Step back slightly and position your feet shoulder-width apart or a bit wider. With your back straight and abs tight, bend your knees, keeping your weight on your heels for balance. Lower yourself as if sitting in a chair, maintaining a straight movement path. Once you reach the bottom (depth depending on your mobility), contract your quads and glutes to return to the starting position. After your set, re-rack the bar. Always keep your back straight and avoid pushing your knees too far forward."
    },
    {
      "id": "4df07df5-c3f7-48fa-8398-b9d4c74347d2",
      "code": "LEG_EXTENSION",
      "primaryMuscles": [
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Leg extension",
      "description": "Sit on the machine with your back flat against the pad. Place your feet under the pad so that it rests near your ankles. Contract your quadriceps to lift the pad, extending your legs fully. Then, control the descent back to the starting position and repeat. This exercise can also be performed unilaterally, one leg at a time."
    },
    {
      "id": "7ef8d083-5b81-4016-80ed-4aa66157dc31",
      "code": "JUMP_SQUAT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Jump squat",
      "description": "Stand with your feet shoulder-width apart or slightly wider. Extend your arms or clasp your hands in front of you, then bend your legs to perform a squat. Go as low as your mobility allows. At the bottom of the movement, jump explosively by contracting your quadriceps, landing softly on the balls of your feet and bending your legs to absorb the impact. Keep your back straight throughout the movement."
    },
    {
      "id": "7754c59d-8cb5-4c35-af3a-a2681eabab64",
      "code": "JUMPING_JACKS",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        },
        {
          "id": "a410c2fb-c73e-4a91-abb8-c4a752b3a944",
          "code": "CALVES",
          "color": "#4CC9F0",
          "name": "Calves"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Jumping Jacks",
      "description": "Stand upright with your feet shoulder-width apart and your arms at your sides. Jump and spread your legs wider while raising your arms to the sides until your hands meet above your head. Jump again to return to the starting position, lowering your arms back to your sides and bringing your feet back to shoulder-width. Keep your posture upright throughout the movement."
    },
    {
      "id": "c0443103-7d0f-4899-ab0e-0fc4077cc9fc",
      "code": "LUNGES",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        },
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Lunges",
      "description": "Stand with your feet hip-width apart. Step forward and bend the front leg until it forms a 90° angle, keeping your torso upright. Your rear leg should be supported on the ball of the foot, parallel to the ground. Push through the front leg to return to the starting position. You can continue alternating legs or perform all reps on one side. Keep your back straight and avoid letting your knees go too far forward during the lunge."
    },
    {
      "id": "062bdae9-1516-4773-a0a2-08f4808800d1",
      "code": "JUMPING_LUNGES",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Jumping lunges",
      "description": "Stand with your feet hip-width apart. Step forward and bend the front leg to form a 90° angle, keeping your torso upright. Your back leg should be on the ball of the foot, parallel to the ground. Explosively push off the front leg to jump and switch legs mid-air, landing with the opposite leg forward. Land softly on the balls of your feet and bend your knees to absorb the impact. Repeat by alternating legs. Keep your back straight and avoid pushing your knees too far forward."
    },
    {
      "id": "e2608e5a-1eaf-4abb-9d28-d275270b8721",
      "code": "LEG_PRESS",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Leg press",
      "description": "Sit down with your back pressed firmly against the backrest. Place your feet shoulder-width apart on the platform, positioning them higher or lower depending on the muscle focus. Unlock the press using the handles, then extend your legs without locking your knees to release the weight. Bend your legs to lower the platform in a controlled manner, going as low as your mobility allows. Once at the bottom, contract your quads and glutes to push the platform back to the starting position. Keep your back and glutes in contact with the seat at all times, and avoid locking your knees when extending your legs."
    },
    {
      "id": "df89ea70-53a7-459d-8f95-d9e0cc0d9fc5",
      "code": "HACK_SQUAT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Hack squat",
      "description": "Step onto the platform with your back pressed firmly against the backrest and position yourself between the shoulder pads. Place your feet shoulder-width apart on the platform, adjusting their position depending on the muscle focus. Unlock the sled using the handles and extend your legs without locking your knees to engage the weight. Bend your knees to lower the sled in a controlled motion, stopping as low as your mobility allows. Once at the bottom, contract your quads and glutes to push the sled back to the starting position. Keep your back in contact with the pad at all times, maintain an upright torso, and avoid locking your knees at the top."
    },
    {
      "id": "0c1af7d8-df8d-45c0-a8de-5be09d7df377",
      "code": "WALL_SIT",
      "primaryMuscles": [
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Wall sit",
      "description": "Stand with your back against a wall, feet shoulder-width apart or slightly wider. Lower yourself by bending your knees until they form a 90-degree angle. Rest your hands on your thighs or against the wall. Engage your thighs and hold this position for the desired duration, focusing your weight on your heels. Keep your back pressed firmly against the wall throughout the exercise."
    },
    {
      "id": "6db6bf0f-d713-4e40-b6ec-964a9d8e2c07",
      "code": "BURPEES",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "a83480c1-951e-4820-b250-235083ca664d",
          "code": "CHEST",
          "color": "#D62828",
          "name": "Chest"
        },
        {
          "id": "75ab5abe-51e3-46c8-a7fe-ce4b077b69ff",
          "code": "TRICEPS",
          "color": "#2DC653",
          "name": "Triceps"
        },
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "a410c2fb-c73e-4a91-abb8-c4a752b3a944",
          "code": "CALVES",
          "color": "#4CC9F0",
          "name": "Calves"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "f0a2647c-cec5-44ac-884d-114f8a272cf2",
          "code": "BODY_WEIGHT",
          "name": "Body weight"
        }
      ],
      "name": "Burpees",
      "description": "Stand with your feet shoulder-width apart or slightly wider. Bend your knees to perform a squat and place your hands on the ground at the bottom of the movement. While crouching, support your weight with your arms and kick your legs back to get into a plank position. Perform a push-up while keeping your body tight and your back straight. Then bring your feet back to your hands, returning to the bottom of a squat. Explosively jump up by contracting your quads and raising your arms for momentum. Land softly on your toes with bent knees to absorb the impact. Continue immediately by squatting again."
    },
    {
      "id": "4d13cd77-3a9d-4689-9002-77e9b69f9ca8",
      "code": "GOBLET_SQUAT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Goblet squat",
      "description": "Stand with your feet shoulder-width apart or slightly wider. Grab a dumbbell vertically with your palms facing the plate, and bring it up to chest level with your elbows bent. Keep your back straight and your core tight. Bend your knees and push your hips back as if sitting in a chair, keeping the weight centered over your heels. Descend as low as your mobility allows, then contract your quads and glutes to return to the starting position. Make sure to keep your back straight and avoid letting your knees move too far forward."
    },
    {
      "id": "813fbb58-ca83-4925-b7b6-03c87fd78cc5",
      "code": "LEG_CURL",
      "primaryMuscles": [
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Leg curl",
      "description": "Lie face down on the machine and place your feet under the pad, positioning it just above your heels. Grab the handles in front of you. Contract your hamstrings to bring the pad closer to your glutes. Slowly lower the weight back to the starting position without fully locking your knees, and repeat. This exercise can also be performed unilaterally, one leg at a time."
    },
    {
      "id": "5a81b49e-247b-4901-8f75-8a62f01a8981",
      "code": "STIFF_LEG_DEADLIFT",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "a76d169a-29e1-4fb4-b27b-eb5990531b9a",
          "code": "BACK",
          "color": "#1D4ED8",
          "name": "Back"
        },
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "types": [
        {
          "id": "9136147e-f617-4a13-98b2-b3fa5b81f716",
          "code": "POLYARTICULAR",
          "name": "Polyarticular"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Stiff leg deadlift",
      "description": "Stand in front of the barbell placed on the floor. Bend forward while keeping your back straight and legs slightly bent to grasp the bar with a pronated grip (palms facing you). Engage your lower back to lift your torso up, keeping your legs nearly straight. Pause briefly at the top, then lower the bar back to the floor while keeping your back straight. Keep your shoulders pulled back throughout the movement."
    },
    {
      "id": "07bbef1d-9227-4619-99be-e2345d342d5e",
      "code": "KETTLEBELL_SWING",
      "primaryMuscles": [
        {
          "id": "b3ad4211-ff54-4e5f-901b-2fdb0601dc7c",
          "code": "GLUTES",
          "color": "#6D597A",
          "name": "Glutes"
        },
        {
          "id": "f7b57be1-1470-4370-b7bf-cc91c4fc2572",
          "code": "HAMSTRINGS",
          "color": "#90BE6D",
          "name": "Hamstrings"
        }
      ],
      "secondaryMuscles": [
        {
          "id": "96683c99-eaf2-42c5-9ed4-5d6e80b74186",
          "code": "SHOULDERS",
          "color": "#F77F00",
          "name": "Shoulders"
        },
        {
          "id": "92a88d7a-523c-497c-9e50-92abfa1ac507",
          "code": "QUADRICEPS",
          "color": "#577590",
          "name": "Quadriceps"
        }
      ],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "64db35be-eb24-4659-a9c6-2bb7fbba99ad",
          "code": "FREE_WEIGHT",
          "name": "Free weight"
        }
      ],
      "name": "Kettlebell swing",
      "description": "Stand with your feet shoulder-width apart or slightly wider. Bend your knees and hinge at the hips while keeping your back straight to grab the kettlebell with both hands. Initiate a slight swing with your hips and push with your legs to drive the kettlebell upward in front of you with straight arms, ideally until it's at eye level. Your arms should merely guide the movement, with minimal effort. Once at the top, control the descent, allowing the kettlebell to swing between your legs, then use your hips to continue the motion. Keep your back straight throughout the movement. If you're comfortable, you can swing the kettlebell overhead."
    },
    {
      "id": "2da0248a-4b75-4de3-8beb-20a3271e11e4",
      "code": "ADDUCTOR_MACHINE",
      "primaryMuscles": [
        {
          "id": "8f207381-5c35-4c04-9bce-38f276668fd0",
          "code": "ADDUCTORS",
          "color": "#43AA8B",
          "name": "Adductors"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Adductor machine",
      "description": "Sit on the machine with your back pressed against the backrest. Position your legs so that the insides of your thighs and your feet rest against the pads. Squeeze your legs together by contracting your adductors, then slowly control the return to the starting position."
    },
    {
      "id": "532ea8c9-532d-4c45-a7af-cd245af5767b",
      "code": "CALF_PRESS_LEG_PRESS",
      "primaryMuscles": [
        {
          "id": "a410c2fb-c73e-4a91-abb8-c4a752b3a944",
          "code": "CALVES",
          "color": "#4CC9F0",
          "name": "Calves"
        }
      ],
      "secondaryMuscles": [],
      "types": [
        {
          "id": "66ecb2e6-f266-45bd-9e83-02c601f7b1cd",
          "code": "ISOLATION",
          "name": "Isolation"
        }
      ],
      "categories": [
        {
          "id": "fd85432a-1d68-4013-9017-4d059fc11d64",
          "code": "MACHINE",
          "name": "Machine"
        }
      ],
      "name": "Calf press leg press",
      "description": "Sit with your back firmly against the backrest. Place the balls of your feet on the lower part of the platform, shoulder-width apart. Unlock the press using the handles, then extend your legs without locking your knees. Push through your calves to raise your heels and lift onto the balls of your feet. Slowly lower your heels to return to the starting position. Make sure to keep your back and glutes in contact with the seat at all times."
    }
  ]

  console.log ("Exercises recovered from workout API:", exercises.length); 