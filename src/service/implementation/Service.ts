import IDataRepository from '../../repository/interface/IDataRepository';
import { inject, injectable } from 'inversify';
import IService from '../interface/IService';
import Request from '../../models/Request';
import Response from '../../models/Response';

@injectable()
export default class Service implements IService{

    private _repository: IDataRepository;

    constructor(@inject("IDataRepository") repository: IDataRepository) {
        this._repository = repository;
    }

    save(request: Request): Response {
        return this._repository.save(request);
    }

}