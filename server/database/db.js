import mongoose from "mongoose";


const DBConnection= async()=>{
    try {
        const MONGO_URI = `mongodb+srv://afreentaj306:afreen0709@cluster0.nf5dk46.mongodb.net/`;
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;