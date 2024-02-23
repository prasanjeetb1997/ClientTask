const mongoose = require('mongoose');


async function main() {
  await mongoose.connect(process.env.MongoDB_URL);
}

main().then((val)=>{console.log("Successfully connected to database")}).catch(err => console.log(err));