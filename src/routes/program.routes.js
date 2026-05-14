const express = require("express"); // server

const { createProgram, getPrograms, getProgramById, deleteProgram, updateProgram, generateProgramController } = require("../controllers/program.controller"); // controller functions
const protect = require("../middleware/auth.middleware");

const router = express.Router();  //import router from express

router.post("/create", protect, createProgram); 

router.get("/", protect, getPrograms); 

router.get("/:id", protect, getProgramById); 

router.delete("/:id", protect, deleteProgram); 

router.patch("/:id", protect, updateProgram); 

router.post("/generate", protect, generateProgramController); 

module.exports = router; 