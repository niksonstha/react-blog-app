import { Product } from "../model/productSchema.js";

export const addProduct = async (req,res) => {
    try {
        const addProduct = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categoryId : req.params.categoryid
        })
        
    } catch (error) {
        console.log(error)
        
    }
};
