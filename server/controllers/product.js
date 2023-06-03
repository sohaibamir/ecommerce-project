const Product = require("../models/product");
const cloudinary = require('cloudinary')

exports.getCategories = async (req, res) => {
  try {
    let totalCategories = await Product.distinct("category");

    totalCategories = totalCategories.filter((el) => {
      return (
        el === "Ayush" ||
        el === "Covid Essentials" ||
        el === "Devices" ||
        el === "Fitness" ||
        el === "Mom & Baby" ||
        el === "Personal Care" ||
        el === "Skin Care" ||
        el === "Surgical" ||
        el === "Treatments" ||
        el === "Tools & Appliances" ||
        el === "Eyewear" ||
        el === "Veterinery"
      );
    });
    res.send({ totalCategories });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      _id: id,
    });

    return res.send({
      product,
    });
  } catch (error) {
    return res.status(404).send({ message: "Invalid Route" });
  }
};

exports.getAllProductsByCategory = async (req, res) => {
  try {
    let { category } = req.params;
    let {
      brand,
      pageSize = 30,
      page = 1,
      sortBy = "_id",
      sortOrder = "",
    } = req.query;
    const filters = {
      category,
    };
    if (brand) {
      filters.manufacturer = brand;
    }

    const totalProducts = await Product.find(filters).count();

    if (totalProducts === 0) {
      return res.status(404).send({ message: "Page not found" });
    }
    let subCategories = await Product.find({ category: category }).distinct(
      "sub_category"
    );
    let totalBrands = await Product.find({ category: category }).distinct(
      "manufacturer"
    );

    const products = await Product.find(filters)
      .sort({
        [sortBy]: sortOrder === "asc" ? 1 : -1,
      })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return res.send({
      totalProducts,
      products,
      page,
      pageSize,
      subCategories,
      totalBrands,
      category,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Something went wrong",
    });
  }
};
exports.getAllProductsBySubCategory = async (req, res) => {
  try {
    let { sub_category, category } = req.params;
    let {
      brand = "",
      pageSize = 30,
      page = 1,
      sortBy = "_id",
      sortOrder = "",
    } = req.query;
    const filters = {
      sub_category,
    };

    if (brand.length > 0) {
      filters.manufacturer = brand;
    }

    const totalProducts = await Product.find(filters).count();

    if (totalProducts === 0) {
      return res.status(404).send({ message: "Page not found" });
    }
    let subCategories = await Product.find({ category: category }).distinct(
      "sub_category"
    );
    let totalBrands = await Product.find({
      sub_category: sub_category,
    }).distinct("manufacturer");

    const products = await Product.find(filters)
      .sort({
        [sortBy]: sortOrder === "asc" ? 1 : -1,
      })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return res.send({
      totalProducts,
      products,
      page,
      pageSize,
      subCategories,
      totalBrands,
      category,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Something went wrong",
    });
  }
};
exports.getProductsBySearch = async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q);
    const products = await Product.find({
      title: {
        $regex: q,
      },
    });

    return res.status(201).send({ message: "success", data: products });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.uploadProduct = async (req, res) => {
  try {
    let images = [];
    if (typeof (req.body.images) === 'string') {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }
    let imagesLink = []
    for(let i=0 ; i< images.length ; i++) {
        let result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products"
        })

        imagesLink.push(
            result.secure_url
        )
    }

    imagesLink = imagesLink.slice(0,3);

    let img1='';
    let img2='';
    let img3=''

    for(let i=0; i<imagesLink.length;i++){
      if(i==0){
        img1 = imagesLink[i]
      }
      else if(i==1){
        img2 = imagesLink[i]
      }
      else if(i==2){
        img3 = imagesLink[i]
      }
    }
    

    const {id,title,actual_price,crossed_price,manufacturer,country,category,sub_category}=req.body;
    await Product.create({
      id,title,actual_price,crossed_price,manufacturer,country,category,sub_category,country:"Pakistan",img1,img2,img3
    })
    return res.status(201).send({ message: "success"});
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(201).send({ message: "success", data: products });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
