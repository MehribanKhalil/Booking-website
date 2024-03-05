import expressAsyncHandler from "express-async-handler";
import Faqs from "../../models/faqModel/faqModel.js";
import faqs from "../../routes/faqsRoute.js";


//GET FAQ
export const getFaqs = expressAsyncHandler(async (req, res) => {
  const faqs = await Faqs.find({});
  res.status(200).json(faqs);
});


//GET FAQ BY ID
export const getFaqById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  let faq = await Faqs.findById(id);
  if (!faq) {
    return res.status(404).json({ message: "Faq not found" });
  }
  res.status(200).json(faq );
});


//CREATE FAQ
export const createFaq = expressAsyncHandler(async (req, res) => {
  const faq = new Faqs({...req.body});
  await faq.save();
  res.status(200).json({ faq });
});


// UPDATE FAQ
export const updateFaq = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const existingFaq = await Faqs.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!existingFaq) {
    return res.status(400).json({ message: "Faq not found" });
 }
  res.status(200).json({ existingFaq });
});


// DELETE FAQ
export const deleteFaq = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedFaq = await Faqs.findByIdAndDelete(id);
  if (!deletedFaq) {
    return res.status(400).json({message : "deleted Faq not found"});
  }
  res.status(200).json({message:'Faq deleted' });
});
