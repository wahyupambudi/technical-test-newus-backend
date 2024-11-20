import Category from "../db/models/Category";

export const getAllCategories = async () => {
    return await Category.findAll();
};

export const getCategoryById = async (id: string) => {
    return await Category.findByPk(id);
};

export const createCategory = async (name: string) => {
    return await Category.create({ name });
};

export const updateCategory = async (id: string, name: string) => {
    const category = await Category.findByPk(id);
    if (!category) return null;
    category.name = name;
    await category.save();
    return category;
};

export const deleteCategory = async (id: string) => {
    const category = await Category.findByPk(id);
    if (!category) return null;
    await category.destroy();
    return category;
};