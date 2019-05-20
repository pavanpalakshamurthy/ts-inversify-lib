import "reflect-metadata";
import {Container} from "inversify";
import IDataRepository from './src/repository/interface/IDataRepository';
import MongoDataRepository from './src/repository/implementation/MongoDataRepository';
import SqlDataRepository from './src/repository/implementation/SqlDataRepository';
import IService from './src/service/interface/IService';
import Service from './src/service/implementation/Service';

export default class BootStrap {
    private libContainer: Container;

    constructor() {
       this.init();
    }

    private init(): Container {
        this.libContainer = new Container({ defaultScope: "Singleton" });
        this.libContainer.bind<IDataRepository>("IDataRepository").to(MongoDataRepository).inSingletonScope();
        this.libContainer.bind<IService>("IService").to(Service).inSingletonScope();
        return this.libContainer;
    }

    getContainer() {
        return this.libContainer ? this.libContainer: this.init();
    }
}
console.log("bootstrap was invoked !!!");

