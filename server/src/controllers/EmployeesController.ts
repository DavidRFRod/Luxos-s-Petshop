import {Request, Response} from 'express';
import knex from '../database/connection';

class EmployeesController{
    async show(request:Request, response: Response){
        const {employees_id} = request.params;

        const employee = await knex('employees').where('employees_id', employees_id).first();

        if(!employee){
            return response.status(400).json({message: 'Não foi possivel encontrar cliente'});
        }

        const adress = await knex('address')
        .join('employees_adress', 'adress_id', '=', 'employees_adress.adress_id')
        .where('employees_adress.employees_id', employees_id);

        return response.json({employee, adress});
    }
    async create (request: Request, response: Response){
        const {
            employees_name,
            employees_cpf,
            employees_whats,
            employees_salary,
            employees_commission,
            employees_email,
            employees_password

        } = request.body;
    
        await knex('employees').insert({
            employees_name,
            employees_cpf,
            employees_whats,
            employees_salary,
            employees_commission,
            employees_email,
            employees_password
        });
    
        return response.json({message: true});
    }
}

export default EmployeesController;