import Joi from 'joi';

const bookSchema: Joi.ObjectSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    pages: Joi.number().required(),
    genre: Joi.string().required(),
});

export default bookSchema;
