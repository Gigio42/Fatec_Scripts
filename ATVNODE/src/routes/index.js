import { Router } from "express"
import ProdutoRouter from "./produto.route.js"
import fotoRouter from "./foto.route.js"

const router = Router()

router.use("/produtos", ProdutoRouter)
router.use("/fotos", fotoRouter)

export default router