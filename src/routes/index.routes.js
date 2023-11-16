import { Router } from "express";
import rotaAnimais from "./animais.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "Servidor rodando perfeitamente!" });
  });

router.use("/animais", rotaAnimais)

export default router;