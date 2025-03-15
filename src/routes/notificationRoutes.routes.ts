import { Router } from "express";
import { publishNotification } from "../controllers/notificationController.controller";

const notificationRouter = Router()

notificationRouter.post('/publish', publishNotification)

export default notificationRouter;