import { Router } from "express";
import { getCategories } from "../controllers/categoryController";

const router = Router();

router.get('/', async (req, res) => {
	const categories = await getCategories();
  res.json(categories);
});
/*
router.use("/", getCategories);
router.use("/createCategory", userController.addUser);
router.use("/", categoryController); */

module.exports = router;