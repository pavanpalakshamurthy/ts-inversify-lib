import "reflect-metadata";
import {Container} from "inversify";
import IDataRepository from './src/repository/interface/IDataRepository';
import MongoDataRepository from './src/repository/implementation/MongoDataRepository';
import SqlDataRepository from './src/repository/implementation/SqlDataRepository';
import IService from './src/service/interface/IService';
import Service from './src/service/implementation/Service';

export let container = new Container({ defaultScope: "Singleton" });

container.bind<IDataRepository>("IDataRepository").to(MongoDataRepository).inSingletonScope();
container.bind<IService>("IService").to(Service).inSingletonScope()

