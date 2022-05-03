import express from "express";
import {currentUser, getAuth} from "../controllers/authController.js";
import {findUser} from "../middlewares/index.js";

const router = express.Router();

router
    .get('/auth', getAuth)
    .post('/auth', findUser, currentUser)

export default router;