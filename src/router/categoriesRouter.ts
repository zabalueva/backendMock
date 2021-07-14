import { Router } from "express";
import { getCategories, getCategoryById } from "../controllers/categoryController";

const router = Router();

router.get('/', async (req, res) => {
	const categories = await getCategories();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
	const selectedCategoryId = Number(req.params.id);
	if (!selectedCategoryId){
		res.sendStatus(400);
	} else {
	const selectedCategory = await getCategoryById(selectedCategoryId);
	if (!selectedCategory) {
		res.sendStatus(404);
	}
	res.json(selectedCategory);
}
});

router.delete('/:id', async (req, res) => {
	const selectedCategoryId = Number(req.params.id);
	if (!selectedCategoryId){
		res.sendStatus(400);
	} else {
	const selectedCategory = await getCategoryById(selectedCategoryId)
	if (!selectedCategory) {
		res.sendStatus(404);
	}
	res.json();
}
});

export default router;