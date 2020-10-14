import {Request, Response} from 'express';
import knex from '../database/connection';

class ClientsController{
    async show(request:Request, response: Response){
        const {clients_id} = request.params;

        const client = await knex('clients').where('clients_id', clients_id).first();

        if(!client){
            return response.status(400).json({message: 'Não foi possivel encontrar cliente'});
        }

        const adress = await knex('address')
        .join('clients_adress', 'adress_id', '=', 'clients_adress.adress_id')
        .where('clients_adress.clients_id', clients_id);

        return response.json({client, adress});
    }
    async create (request: Request, response: Response){
        const {
            clients_name,
            clients_cpf,
            clients_whats,
            clients_email,
            clients_password,
        } = request.body;
    
        await knex('clients').insert({
            clients_name,
            clients_cpf,
            clients_whats,
            clients_email,
            clients_password,
        });
    
        return response.json({message: true});
    }
}

export default ClientsController;