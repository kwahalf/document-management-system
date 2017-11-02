const Joi = require('joi');

module.exports = {
    validateParam: (schema, name)=>{
        return (req, res, next)=>{
            const result = Joi.validate({param: req['params'][name]}, schema );
            if (result.error){
                return res.status(400).json(result.error);
            } else { 
                if (!req.value)
                    req.value = {};

                if (!req.value['params'])
                    req.value['params'] = {};
                req.value['params'][name] = result.value.param ;
                next();
            }
        }
    },

    validatebody: (schema)=>{
        return (req, res, next)=>{
            const result = Joi.validate( req.body, schema );
            if (result.error){
                return res.status(400).json(result.error);
            } else { 
                if (!req.value)
                    req.value = {};

                if (!req.value['body'])
                    req.value['body'] = {};
                req.value['body'] = result.value ;
                next();
            }
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),

        userSchema: Joi.object().keys({
            username: Joi.string(),
            name: {
                first: Joi.string().required(),
                last: Joi.string().required()
            },
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }),

        documentSchema: Joi.object().keys({
            title: Joi.string().required(),
            content: Joi.string()
        }),

        roleSchema: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string()
        })

    }
}