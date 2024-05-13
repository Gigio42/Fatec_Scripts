import { body, param } from "express-validator"

export const produtoValidator = [
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('preco').isNumeric().withMessage('Preço é obrigatório'),
    body('descricao').isString().withMessage('Descrição é obrigatória')
]

export const produtoUpdateValidator = [
    param('id').isInt().withMessage('Id é obrigatório'),
    body('nome').isString().withMessage('Nome é obrigatório'),
    body('preco').isNumeric().withMessage('Preço é obrigatório'),
    body('descricao').isString().withMessage('Descrição é obrigatória')
]

export const produtoIdValidator = [
    param('id').isInt().withMessage('Id é obrigatório')
]
