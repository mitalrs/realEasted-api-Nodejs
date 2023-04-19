//this file for put the data in database into the json file

const connectDB = require('./database/mongodb.js');
const Property = require('./models/realEstatePropertyList.js');

const PropertyJson = require('./realEstatePropertyList.json');

const username = 'mitalRealEstateapi';
    const password = 'mitalRealEstateapi';
    const url = 'cluster2.fyjrwke.mongodb.net';

const start = async () => {
  try {
    await connectDB(`mongodb+srv://${username}:${password}@${url}/test`)
    await Property.create(PropertyJson);
    console.log("success");
  } catch(err){
    console.log(err);
  }
};

start();