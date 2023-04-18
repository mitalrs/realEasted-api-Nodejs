const Property = require('../models/realEstatePropertyList.js');


const propertyList = async (req, res)=>{
  try{
     const listofPropertys = await Property.find({});
    res.status(200).json({ listofPropertys });
  }catch(e){
    console.log(e)
  }
   
}

module.exports = { propertyList };
