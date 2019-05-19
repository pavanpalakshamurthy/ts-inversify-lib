import Request from "../../models/Request";
import Response from '../../models/Response';
export default interface IService {
    save(request: Request): Response;
}
