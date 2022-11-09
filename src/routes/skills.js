import { Router } from "express";
import { getSkills, getSkill, createSkills, updateSkills, deleteSkills } from "../constrollers/skills.js";

const skillRouter = Router()

skillRouter.get('/skill', getSkills)
skillRouter.get('/skill/:id', getSkill)
skillRouter.post('/skill', createSkills)
skillRouter.patch('/skill/:id', updateSkills)
skillRouter.delete('/skill/:id', deleteSkills)


export { skillRouter }