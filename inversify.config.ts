import "reflect-metadata";
import {Container} from "inversify";
import IDataRepository from './src/repository/interface/IDataRepository';
import MongoDataRepository from './src/repository/implementation/MongoDataRepository';
import SqlDataRepository from './src/repository/implementation/SqlDataRepository';

let container = new Container({ defaultScope: "Singleton" });

container.bind<IDataRepository>("dataRepository").to(MongoDataRepository).inSingletonScope();
container.bind<IDataRepository>("dataRepository").to(SqlDataRepository).inSingletonScope();

export default container;