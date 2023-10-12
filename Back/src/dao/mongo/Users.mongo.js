import User from "./models/users.model.js";

export default class UserDaoMongo {
    constructor() {
        this.User = User;
    }

    async getAll() {
        return await this.User.find({});
    }

    async create(userData) {
        return await this.User.create(userData);
    }

    async getById(id) {
        return await this.User.findById(id);
    }

    async update(id, data) {
        return await this.User.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await this.User.findByIdAndDelete(id);
    }
}