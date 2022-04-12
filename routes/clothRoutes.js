import express from "express";

import { 
    register_cloth,
    all_cloth
} from "../controllers/clothController.js";

const router = express.Router()

router.route("/")
    .get(all_cloth)
    .post(register_cloth)

export default router