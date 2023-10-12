class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async getUsers() {
        return await this.dao.getAll();
    }

    async getUser(id) {
        return await this.dao.getById(id);
    }

    async createUser(userData) {
        try {
            console.log('Creating user with data:', userData);
            return await this.dao.create(userData);
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async findUser(email) {
        const users = await this.dao.getAll()
        return users.find((user) => user.email === email);
    }

    async updateUser(id, data) {
        return await this.dao.update(id, data);
    }

    async deleteUser(id) {
        return await this.dao.delete(id);
    }
}

export default UserRepository;