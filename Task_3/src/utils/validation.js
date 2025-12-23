import Joi from 'joi';

const userSchema = Joi.object({
    title:Joi.string().min(3).required(),
    author:Joi.string().min(3).required(),
    price:Joi.number().positive().required(),
    description:Joi.string().optional()
});

export default userSchema;