import { Router } from "express";
import { createCategory, deleteCategoryById, getCategories, getCategoryById } from "../controllers/categoryController";
import { Category } from "../models/category";

const router=Router();

router.get('/', async (req, res) => {
	const categories=await getCategories();
	res.json(categories);
});

router.get('/:id', async (req, res) => {
	const selectedCategoryId=Number(req.params.id);
	if (!selectedCategoryId) {
		res.sendStatus(400);
	} else {
		const selectedCategory=await getCategoryById(selectedCategoryId);
		if (!selectedCategory) {
			res.sendStatus(404);
		}
		res.json(selectedCategory);
	}
});

router.delete('/:id', async (req, res) => {
	const selectedCategoryId=Number(req.params.id);
	if (!selectedCategoryId) {
		res.sendStatus(400);
	}
	try {
		await deleteCategoryById(selectedCategoryId);
		return res.sendStatus(200);
	}
	catch (e) {
		return res.status(404).send(e);
	}
});

router.post('/', async (req, res) => {
	const data = req.body as Category;
	try {
		const newCategory = await createCategory(data);
		return res.json(newCategory)
	} catch (e) {
		return res.status(400).send(e);
	}
});


export default router;