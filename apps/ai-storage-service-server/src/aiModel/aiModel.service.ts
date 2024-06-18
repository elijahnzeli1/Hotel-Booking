import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiModelServiceBase } from "./base/aiModel.service.base";

@Injectable()
export class AiModelService extends AiModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
