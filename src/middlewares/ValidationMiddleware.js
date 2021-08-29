class ValidationMiddleware {
  constructor(schema){
    this.schema = schema
  }

  async use(req, res, next){
    try{
      await this.schema.validate(req.body)
      return next()
    } catch (error){
      return res.status(400).json({
        name: error.name,
        errors: error.errors
      })
    }
  }
}

module.exports = ValidationMiddleware