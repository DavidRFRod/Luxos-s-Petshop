import {Request, Response} from 'express';
import knex from '../database/connection';

class AdressController{
    async create (request: Request, response: Response){
        const {
            address_city,
            address_neighborhood,
            address_street,
            address_number,
            address_complement,
        } = request.body;
    
        await knex('address').insert({
            address_city,
            address_neighborhood,
            address_street,
            address_number,
            address_complement,
        });
    
        return response.json({message: 'Cadastro feito com sucesso!'});
    }
}

export default AdressController;