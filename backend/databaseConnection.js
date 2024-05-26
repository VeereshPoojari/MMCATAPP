const mongoose = require('mongoose');
const database = async () => {
    try {
        mongoose.connect(process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() =>
                console.log("database connected.....")
            ).catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}
module.exports = database