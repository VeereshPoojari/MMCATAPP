 /* mongoose db Connection */
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
module.exports = database;

/* MY SQL Connection  */
// const mysql = require('mysql2/promise');
// require('dotenv').config();

// const database = async () => {
//     try {
//         const connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME
//         });
//         console.log('Database connected successfully');

//         // Optional: Store the connection globally if needed elsewhere in your app
//         global.dbConnection = connection;

//         return connection;
//     } catch (error) {
//         console.error('Database connection failed:', error);
//         process.exit(1);
//     }
// };

// module.exports = database;
