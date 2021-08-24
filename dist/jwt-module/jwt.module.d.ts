import { DynamicModule } from "@nestjs/common";
import { JWTModuleSetupOptions } from "../interfaces";
export declare class JWTModule {
    static forRoot(options: JWTModuleSetupOptions): DynamicModule;
}
