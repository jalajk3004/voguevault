import Product from "../../../models/Product";
import connectDb from "../../../middleware/mongoose";
const dotenv = require("dotenv");
dotenv.config();
const handler = async (req, res) => {
    try {
      if (req.method == "POST"){
        for (let i=0; i<req.body.lenght;i++){

            let p=newProduct({
                title:req.body[i].title ,
                slug:req.body[i].slug ,
                desc:req.body[i].desc ,
                img:req.body[i].img ,
                category:req.body[i].category ,
                size:req.body[i].size ,
                color:req.body[i].color ,
                price:req.body[i].price ,
                availableQty:req.body[i].availableQty ,
                
            })
            await p.save()
        }
        res.status(200).json({success:"success"})
      }else{
        res.status(400).json({error:"this method is not applicable"})
      }
    let products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default connectDb(handler);
