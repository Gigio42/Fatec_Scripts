import { validationResult } from 'express-validator'
import Foto from '../models/foto.model.js'

export default class FotoController {
    static async index(req, res) {
        const fotos = await Foto.findMany()
        res.json(fotos);
    }

    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const foto = await Foto.create({
            data: req.body
        })
        res.json(foto);
    }
}  