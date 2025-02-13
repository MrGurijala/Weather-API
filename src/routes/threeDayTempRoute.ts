import express from "express";
import { getThreeDayWeatherData } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// route for the getting the three day temperatures for the city
router.get("/:city", validateCityName, getThreeDayWeatherData);

// We will export the router
export default router;
