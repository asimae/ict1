const Product = require('../../models/product');
const multer = require("multer");
const { request } = require('../../routes/userRoutes');
const upload = multer({ dest: "uploads/" });

const addProduct = async (req, res) => {

    try {
        if(!req.body) throw new Error('please fill all the input fields.');
        if(!req.body.productName) throw new Error('please fill the name field.');
        
        const filePath =  req.file.path
        console.log(filePath,'hghfgyyt');
        const {
            Name,
            price,
            size,
            Color,
          
                } = req.body;

        const newProduct = new Product({
            Name,
            price,
            size,
            Color
            // image: filePath,
            // createdAt: new Date()
        });
     
        const newData = await newProduct.save();
        console.log('newDta',newData);
        if(!newData) throw new Error('Error in adding Product..please try again.');
        console.log(newData);
        res.status(200).send({
            message: newData
        });
    } catch (err) {
        // res.status(500).send({
        //     error: err.message
        // })
        console.log(err);
    }
}
/////upload\\\\\\\

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// app.post("/upload_files", upload.array("files"), uploadFiles);

// function uploadFiles(req, res) {
//     console.log(req.body);
//     console.log(req.files);
//     res.json({ message: "Successfully uploaded files" });
// }




///////////////////productlist\\\\\\\\\\\\\\\
const productdetails = async (req, res) => {
    try {
        if(!req.body) throw new Error('please fill all the input fields.');
        if(!req.body.productName) throw new Error('please fill the name field.');
        if(!req.body.items) throw new Error('there is an error in identifying the item Types please try again later.');
       
        const {
            Id,
            Name,
            price,
            size,
            Color
            
        } = req.body;
;
        const productdetails = new productdetails({
            Id,
            Name,
            price,
            size,
            Color
            // createdAt: new Date()
        });
     
        const newData = await newproduct.save();
        
        if(!newData) throw new Error('Error in adding Product..please try again.');
        console.log(newData);
        res.status(200).send({
            message: newproductList
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
};
// const getAllProduct = async (req, res, next) => {
//     try {
//         console.log(1);
//         const product = await Product.find();
//         console.log('find:');
//         console.log(product);
//         if(!product) throw new Error('Product not found');
//         res.status(200).send(product)
//     } catch (error) {
//         res.status(500).send({
//             error: error.message
//         })
//     }
// };


module.exports = {
    addProduct,
    // uploadFiles,
    productdetails,
    // getAllProduct
    
}