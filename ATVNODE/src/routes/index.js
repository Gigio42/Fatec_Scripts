import { Router } from "express"
import ProdutoRouter from "./produto.route.js"

const router = Router()

router.use("/produtos", ProdutoRouter)

export default router