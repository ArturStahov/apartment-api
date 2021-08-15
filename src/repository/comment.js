const CommentShema = require('../schemas/comment.js')
const ObjectId = require('mongoose').Types.ObjectId;
const { HttpCode } = require('../helpers/constants.js')
const { ErrorHandler } = require('../helpers/errorHandler')

class CommentRepository {
    constructor() {
        this.model = CommentShema
    }
  
    async getComment(projectId) {
        const results = await this.model.find({ projectId: projectId }).exec()
        return results
    }

    async create(data) {
        const result = await this.model.create({ ...data})
        return result
    }
}


module.exports = CommentRepository