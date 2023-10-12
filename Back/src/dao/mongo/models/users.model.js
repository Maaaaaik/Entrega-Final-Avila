import { Schema, model } from "mongoose";

let collection = 'users'

let schema = new Schema({
    name: { type: String, requred: true },
    photo: { type: String, default: 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png' },
    email: { type: String, required: true, index: true, unique: true },
    age: { type: Number, default: 0 },
    role: { type: Number, default: '0' },
    password: { type: String, required: true },
    passwordHash: { String }

})

let User = model(collection, schema)
export default User