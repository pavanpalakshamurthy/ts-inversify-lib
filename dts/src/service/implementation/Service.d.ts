import IDataRepository from '../../repository/interface/IDataRepository';
import IService from '../interface/IService';
import Request from '../../models/Request';
import Response from '../../models/Response';
export default class Service implements IService {
    private _repository;
    constructor(repository: IDataRepository);
    save(request: Request): Response;
}
