import express from "express";
import { createFaq, deleteFaq, getFaqById, getFaqs, updateFaq } from "../controllers/faqController/faqController.js";

const faqs = express.Router();

faqs.get("/faq", getFaqs);
faqs.get("/faq/:id", getFaqById);
faqs.post("/faq", createFaq);
faqs.put("/faq/:id", updateFaq);
faqs.delete("/faq/:id", deleteFaq);

export default faqs;
