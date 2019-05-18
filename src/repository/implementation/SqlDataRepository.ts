import IDataRepository from '../interface/IDataRepository';
import Response from '../../models/Response';
import Record from '../../models/Record';
import Request from '../../models/Request';
import { injectable } from 'inversify';

@injectable()
export default class SqlDataRepository implements IDataRepository {
   
    constructor(){
        
    }

    find(id: number): Response {
       let records: Record[] = [];
       return new Response(records);
    }

    save(request: Request): Response {
       let records: Record[] = [];
       return new Response(records);
    }

    update(request: Request): Response {
        let records: Record[] = [];
        return new Response(records);
    }
}