import { Router } from "express";
import { usuarioRepository } from "../repositories/usuarioRepository";


const router =  Router();


router.get('usuario', usuarioRepository.getByLogin);



export default router;