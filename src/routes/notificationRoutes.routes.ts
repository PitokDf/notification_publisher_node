import { Router } from "express";
import { publishNotification } from "../controllers/notification.controller";

const notificationRouter = Router()

notificationRouter.post('/publish', publishNotification)

export default notificationRouter;