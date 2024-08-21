import express from "express";
const routes = express.Router();

import { homeController } from "../controllers/homeController.js";
import { aboutUsController } from "../controllers/aboutUsController.js";
import employeeController from "../controllers/employeeController.js";
import {saveEmployeeController} from "../controllers/saveEmployeeController.js";

routes.get("/", homeController);
routes.get("/aboutus", aboutUsController);
routes.get("/emp", employeeController);
routes.post("/saveemp", saveEmployeeController);

// routes.post("/saveemp", (req,res)=>
// {
//     console.log(req.body)
// })

export default routes;