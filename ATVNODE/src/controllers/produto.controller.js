import { validationResult } from 'express-validator'
import Produto from '../models/produto.model.js'

export default class produtoController {
    static async index(req, res) {
        const produtos = await Produto.findMany({
            include: {
                fotos: true
            }
        })
        res.json(produtos);
    }

    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const produto = await Produto.create({
            data: req.body
        })
        res.json(produto);
    }

    static async show(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                fotos: true
            }
        })
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' })
        }
        res.json(produto);
    }

    static async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' })
        }
        const updatedProduto = await Produto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedProduto);
    }

    static async delete(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' })
        }
        await Produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: 'Produto excluído com sucesso' });
    }
}