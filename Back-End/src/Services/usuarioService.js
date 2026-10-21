import { usuarioRepository } from "../repositories/usuarioRepository.js";

export const usuarioService = {

    async create(usuario) {
        return await usuarioRepository.create(usuario);
    },

    async getByLogin(email, senha) {
        const usuario = await usuarioRepository.getByLogin(email, senha);


        if (!usuario) {
            throw new Error('Email ou senha inválidos');
        }

        return usuario;
    },

    async findById(id) {
        const usuarioExiste = await usuarioRepository.findById(id);

        if (!usuarioExiste) {
            throw new Error('Usuário não encontrado');
        }

        return usuarioExiste;
    },

    async findAll() {
        return await usuarioRepository.findAll();
    },

    async update(id, usuario) {

        const usuarioExiste = await usuarioRepository.findById(id);

        if (!usuarioExiste) {
            throw new Error('Usuário não encontrado');
        }

        return await usuarioRepository.update(id, usuario);
    },

    async delete(id) {
        const usuarioExiste = await usuarioRepository.findById(id);

        if (!usuarioExiste) {
            throw new Error('Usuário não encontrado');
        }

        return await usuarioRepository.delete(id);
    },

};