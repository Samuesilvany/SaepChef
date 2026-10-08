import { usuarioRepository } from "../repositories/usuarioRepository";

export const usuarioController =  {
    async findAll(req,res){
        try{
            const buscarUsuarios = await usuarioRepository.getByLogin();
            res.status(200).json(buscarUsuarios);
        }catch(error){
            res.status(500).json({mensagem:'Não foi possível buscar usuários. '})
        }
    },
}