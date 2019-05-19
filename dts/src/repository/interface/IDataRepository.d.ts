import Response from '../../models/Response';
import Request from '../../models/Request';
export default interface IDataRepository {
    find(id: number): Response;
    save(request: Request): Response;
    update(request: Request): Response;
}
