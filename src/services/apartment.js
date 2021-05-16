const { ApartmentRepository } = require('../repository')


class ApartmentServices {
    constructor() {
        this.repositories = {
            apartment: new ApartmentRepository()
        }
    }

    async getAll(userId) {
        const data = await this.repositories.apartment.getAll(userId)
        return data
    }

    async getByID({ id }, userId) {
        const data = await this.repositories.apartment.getByID(id, userId)
        return data
    }

    async create(body, userId) {
        const data = await this.repositories.apartment.create(body, userId)
        return data
    }

    async update({ id }, body, userId) {
        const data = await this.repositories.apartment.update(id, body, userId)
        return data
    }

    async remove({ id }, userId) {
        const data = await this.repositories.apartment.remove(id, userId)
        return data
    }
}

module.exports = ApartmentServices