import "reflect-metadata";
import { Container } from "inversify";
export declare class BootStrap {
    private libContainer;
    constructor();
    private init;
    getContainer(): Container;
}
