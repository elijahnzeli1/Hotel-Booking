import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AiModelController } from "../aiModel.controller";
import { AiModelService } from "../aiModel.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  architecture: "exampleArchitecture",
  architectureData: "exampleArchitectureData",
  createdAt: new Date(),
  creationTimestamp: new Date(),
  description: "exampleDescription",
  filePath: "exampleFilePath",
  id: "exampleId",
  modelId: "exampleModelId",
  trainingData: "exampleTrainingData",
  trainingDataDescription: "exampleTrainingDataDescription",
  updatedAt: new Date(),
  version: "exampleVersion",
  versionData: "exampleVersionData",
};
const CREATE_RESULT = {
  architecture: "exampleArchitecture",
  architectureData: "exampleArchitectureData",
  createdAt: new Date(),
  creationTimestamp: new Date(),
  description: "exampleDescription",
  filePath: "exampleFilePath",
  id: "exampleId",
  modelId: "exampleModelId",
  trainingData: "exampleTrainingData",
  trainingDataDescription: "exampleTrainingDataDescription",
  updatedAt: new Date(),
  version: "exampleVersion",
  versionData: "exampleVersionData",
};
const FIND_MANY_RESULT = [
  {
    architecture: "exampleArchitecture",
    architectureData: "exampleArchitectureData",
    createdAt: new Date(),
    creationTimestamp: new Date(),
    description: "exampleDescription",
    filePath: "exampleFilePath",
    id: "exampleId",
    modelId: "exampleModelId",
    trainingData: "exampleTrainingData",
    trainingDataDescription: "exampleTrainingDataDescription",
    updatedAt: new Date(),
    version: "exampleVersion",
    versionData: "exampleVersionData",
  },
];
const FIND_ONE_RESULT = {
  architecture: "exampleArchitecture",
  architectureData: "exampleArchitectureData",
  createdAt: new Date(),
  creationTimestamp: new Date(),
  description: "exampleDescription",
  filePath: "exampleFilePath",
  id: "exampleId",
  modelId: "exampleModelId",
  trainingData: "exampleTrainingData",
  trainingDataDescription: "exampleTrainingDataDescription",
  updatedAt: new Date(),
  version: "exampleVersion",
  versionData: "exampleVersionData",
};

const service = {
  createAiModel() {
    return CREATE_RESULT;
  },
  aiModels: () => FIND_MANY_RESULT,
  aiModel: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AiModel", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AiModelService,
          useValue: service,
        },
      ],
      controllers: [AiModelController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /aiModels", async () => {
    await request(app.getHttpServer())
      .post("/aiModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /aiModels", async () => {
    await request(app.getHttpServer())
      .get("/aiModels")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creationTimestamp:
            FIND_MANY_RESULT[0].creationTimestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /aiModels/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiModels"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /aiModels/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiModels"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creationTimestamp: FIND_ONE_RESULT.creationTimestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /aiModels existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/aiModels")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationTimestamp: CREATE_RESULT.creationTimestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/aiModels")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
