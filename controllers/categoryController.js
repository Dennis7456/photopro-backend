const Category = require('../models/categoryModel');

const category_create_category = async (req,res) => {
    console.log(req.body);

    const category = new Category({
    	name: req.body.name,
    })

    category.save()
    .then((result) => {
        res.status(201).send({
            message: "Category created successfully",
            result
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error creating category",
            error
        });
    });
}

const getCategories = async (req, res) => {
    console.log(req);
    Category.find()
    .then((categories) => {
        res.status(200).send(categories);
        console.log(categories)
    })
    .catch((error) => {
        rest.status(404).send(error);
        console.log(error)
    });
};  

const getACategory = async (req, res) => {
    console.log(req);
    Category.find({ name: req.params.name })
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((error) => {
        res.status(404).json(category);
    })
};

module.exports = {
    category_create_category,
    getCategories,
    getACategory
    
    
}