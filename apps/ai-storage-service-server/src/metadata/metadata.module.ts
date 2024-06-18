import { Module } from "@nestjs/common";
import { MetadataModuleBase } from "./base/metadata.module.base";
import { MetadataService } from "./metadata.service";
import { MetadataController } from "./metadata.controller";
import { MetadataResolver } from "./metadata.resolver";

@Module({
  imports: [MetadataModuleBase],
  controllers: [MetadataController],
  providers: [MetadataService, MetadataResolver],
  exports: [MetadataService],
})
export class MetadataModule {}
