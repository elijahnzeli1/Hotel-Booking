import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetadataServiceBase } from "./base/metadata.service.base";

@Injectable()
export class MetadataService extends MetadataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
