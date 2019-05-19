import IDataRepository from '../interface/IDataRepository';
import Response from '../../models/Response';
import Request from '../../models/Request';
export default class MongoDataRepository implements IDataRepository {
    constructor();
    find(id: number): Response;
    save(request: Request): Response;
    update(request: Request): Response;
}
