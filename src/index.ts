import BootStrap from "../inversify.config";
import IService from './service/interface/IService';
import Service from './service/implementation/Service';
import Request from './models/Request';
import Response from './models/Response';

console.log("**** Statement from ts inversify library ****");
console.log(BootStrap)
export {BootStrap, IService, Service, Request, Response};