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

module.exports = {
    category_create_category
    
    
}