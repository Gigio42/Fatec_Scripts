import { body, param } from "express-validator"

export const fotoValidator = [
    body('titulo').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('url é obrigatório'),
    body('produtoId').isNumeric().withMessage('ProdutoId é obrigatória')
]

export const fotoUpdateValidator = [
    param('id').isInt().withMessage('Id é obrigatório'),
    body('titulo').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('url é obrigatório'),
    body('produtoId').isNumeric().withMessage('ProdutoId é obrigatória')
]

export const fotoIdValidator = [
    param('id').isInt().withMessage('Id é obrigatório')
]
