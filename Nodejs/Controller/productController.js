import { Product } from "../Models/productModal.js";

export const getallproducts = (req,res) => {
    Product.find().then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(400).json({message:"Product Not Found!"})
    })
}

export const findbyid = (req,res) => {
    const userid = req.params.id;

    Product.findById(userid).then((data) => {
        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(data); 
    }).catch((err) => {
        res.status(400).json({message:"Error Not Found!", err})
    })

}

export const addProduct = (req, res) => {
    const newProduct = new Product(req.body);
    
    newProduct.save()
        .then((product) => res.status(201).json({ message: "Product added", product }))
        .catch((err) => res.status(500).json({ message: "Failed to add product", err }));
};

export const updateProduct = (req, res) => {
    const { id } = req.params;

    Product.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedProduct) => {
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product updated", updatedProduct });
        })
        .catch((err) => res.status(500).json({ message: "Failed to update product", err }));
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;

    Product.deleteOne({ _id: id })
        .then((result) => {
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product deleted" });
        })
        .catch((err) => res.status(500).json({ message: "Failed to delete product", err }));
};