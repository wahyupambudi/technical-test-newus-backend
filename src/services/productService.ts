import Product from "../db/models/Product";

export const getAllProducts = async () => {
    return await Product.findAll();
};

export const getProductById = async (id: string) => {
    return await Product.findByPk(id);
};

export const createProduct = async (
    name: string,
    desc: Text,
    image: string,
    category_id: number
) => {
    return await Product.create({ name, desc, image, category_id });
};

export const updateProduct = async (
    id: string, 
    name: string,
    desc: Text,
    image: string,
    category_id: number
) => {
    const product = await Product.findByPk(id);
    if (!product) return null;
    product.name = name;
    product.desc = desc;
    product.image = image;
    product.category_id = category_id;
    await product.save();
    return product;
};

export const deleteProduct = async (id: string) => {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.destroy();
    return product;
};
