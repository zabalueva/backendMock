import { Category } from "../models/category";
import * as categories from "../db/categories.json"

export function getCategories(): Promise<Category[]> {
	return Promise.resolve(categories)
	/* res.render("create.hbs"); */
};

export function getCategoryByName(name:string): Promise<Category | undefined> {
	const selectedCategory = categories.find((category) => category.name === name);
	return Promise.resolve(selectedCategory);
	/* res.render("create.hbs"); */
};



/*
export function addUser(req: Request, res:Response) {
	res.render("create.hbs");
};
exports.getUsers = function(req: Request, res:Response) {
	res.render("users.hbs", {
		users: User.getAll()
	});
};

exports.postUser= function(req: Request, res:Response){
	const username = req.body.name;
	const userage = req.body.age;
	const user = new User(username, userage);
	user.save();
	res.redirect("/users");
}; */