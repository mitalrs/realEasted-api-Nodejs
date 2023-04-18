const mongoose = require('mongoose');

async function connect(){
    const username = 'mitalRealEstateapi';
    const password = 'mitalRealEstateapi';
    const url = 'cluster2.fyjrwke.mongodb.net';


await mongoose.connect(`mongodb+srv://${username}:${password}@${url}/test`)
  
 console.log('MongoDB connected');

}

module.exports =  connect;