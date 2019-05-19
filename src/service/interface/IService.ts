import Request from "../../models/Request";
import Response from '../../models/Response';
import IDataRepository from '../../repository/interface/IDataRepository';
import { inject } from "inversify";

export default interface IService {

    save(request: Request): Response;
}