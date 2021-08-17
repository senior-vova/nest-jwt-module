import React from "react";
import { Code } from "../components/Code";
import { H4Text } from "../components/ContentH4";
import { HashLink } from "../components/HashLink";
import { MainWrapper } from "../components/MainWrapper";

const HomePage: React.FC = () => {
  return (
    <MainWrapper>
      <div className="mt-3 d-flex flex-column">
        <h2 className="text-center my-3">
          This library created for easy using JWT system. Module can use only in
          NestJS applications.
        </h2>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <HashLink link="Installing" />
          <H4Text text="You can install module with npm:" />
          <Code lang="bash" code={`npm install nest-jwt-module`} />
          <H4Text text="or yarn:" />
          <Code lang="bash" code={`yarn add nest-jwt-module`} />
          <HashLink link="Import module" />
          <H4Text
            text="Before using you need to connect JWTModule in module imports where
            you want to use JWT."
          />
          <H4Text text="Example: (app.module.ts)" />
          <Code
            lang="tsx"
            code={`import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JWTModule } from "nest-jwt-module";

@Module({
  imports: [
    ...,
    JWTModule.forRoot({
    secretKey: "your-secret-key",
    expiresIn: "time", // ex: "12h"
    }),
    ...,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}
          />
          <HashLink link="Use JWT service" />
          <H4Text text="When jwt-module is connected you can use jwt-service." />
          <H4Text text="Example: (app.service.ts)" />
          <Code
            lang="tsx"
            code={`import { Injectable } from "@nestjs/common";
import { JWTService } from "nest-jwt-module";

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JWTService
  ) {}

  async login(body: { email: string, pass: string }): Promise<any> {
    try {
      const user = await userModel.findOne(
        { email: body.email, pass: body.pass }
      ); // this using MongoDB
      if (user) {
        const jwt = await this.jwtService.GenerateToken({ id: user._id });
        return Promise.resolve({ user, jwt });
      } else {
        return Promise.reject({ error: "User is not found" });
      }
    } catch (error) {
      return Promise.reject({ error });
    }
  }
}`}
          />
          <HashLink link="Use JWT service in Middleware" />
          <H4Text text="You can use jwt-service to verify bearer token from request." />
          <H4Text text="Example:" />
          <Code
            lang="tsx"
            code={`import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import { JWTService } from "nest-jwt-module";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JWTService) {}

  async use(req: any, res: Response, next: Function) {
    const token = req.headers["Authorization"] || req.headers["authorization"];
    if (token) {
      try {
        const data = await this.jwtService.Verify(
          (token as string).replace("Bearer ", "")
        );
        if (data) {
          req.user = data.data;
        }
      } catch (error) {
        return res.status(500).json({ error: "Invalid token" });
      }
    }
    next();
  }
}`}
          />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
