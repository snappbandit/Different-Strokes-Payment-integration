import express from "express";
import { 
    checkout,
    paymentVerfification } from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerfification)

export default router;
