import {Request, Response} from 'express';
import knex from '../database/connection';

class ServicesController{
    async create (request: Request, response: Response){
        const {
            services_name,
            services_valor,
            services_description,
        } = request.body;
    
        await knex('services').insert({
            services_name,
            services_valor,
            services_description,
        });
    
        return response.json({message: 'Cadastro feito com sucesso!'});
    }
}

export default ServicesController;