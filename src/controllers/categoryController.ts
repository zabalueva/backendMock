import { Category } from "../models/category";
import * as categoriesList  from "../db/categories.json";
const categories = categoriesList.categories;

export function getCategories(): Promise<Category[]> {
	return Promise.resolve(categories);
};

export function getCategoryById(id:number): Promise<Category | undefined> {
	const selectedCategory = categories.find((category) => category.id === id);
	return Promise.resolve(selectedCategory);
};

export function updateNameCategoryById(id:number): Promise<Category | undefined> {
	const selectedCategory =categories.find((category) => category.id === id);
	return Promise.resolve(selectedCategory);
};

export function deleteCategoryById(id:number): Promise<void> {
	const selectedCategoryIndex = categories.findIndex((category) => category.id === id);
	selectedCategoryIndex > 0 ? categories.splice(selectedCategoryIndex, 1) : Promise.reject('Not exist');
	return Promise.resolve();
};

export function addWordToCategoryById(id:number): Promise<Category | undefined> {
	const selectedCategory = Array.from(categories).find((category) => category.id === id);
	return Promise.resolve(selectedCategory);
};


/*

exports.postUser= function(req: Request, res:Response){
	const username = req.body.name;
	const userage = req.body.age;
	const user = new User(username, userage);
	user.save();
	res.redirect("/users");
}; */