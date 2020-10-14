import {Request, Response} from 'express';
import knex from '../database/connection';

class PetsController{
    async create (request: Request, response: Response){
        const {
            pets_name,
            pets_breed,
            pets_fur,
            pets_birth,
            pets_observation
        } = request.body;
    
        await knex('pets').insert({
            pets_name,
            pets_breed,
            pets_fur,
            pets_birth,
            pets_observation
        });
            
        return response.json({message: 'Cadastro do pets feito com sucesso!'});
    }
}

export default PetsController;