const { HttpCode } = require('../helpers/constants.js')
const { ApartmentService } = require('../services')

const apartmentService = new ApartmentService();

const getAll = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.getAll(userId)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                apartment,
            }
        })
    } catch (error) {
        next(error)
    }
}

const getByID = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.getByID(req.params, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.create(req.body, userId)
        res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: {
                apartment,
            }
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.update(req.params, req.body, userId)

        if (note) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const patch = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.update(req.params, req.body, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.remove(req.params, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAll,
    getByID,
    create,
    update,
    patch,
    remove
}