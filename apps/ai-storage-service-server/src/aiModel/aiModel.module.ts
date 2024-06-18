import { Module } from "@nestjs/common";
import { AiModelModuleBase } from "./base/aiModel.module.base";
import { AiModelService } from "./aiModel.service";
import { AiModelController } from "./aiModel.controller";
import { AiModelResolver } from "./aiModel.resolver";

@Module({
  imports: [AiModelModuleBase],
  controllers: [AiModelController],
  providers: [AiModelService, AiModelResolver],
  exports: [AiModelService],
})
export class AiModelModule {}
