import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetadataService } from "./metadata.service";
import { MetadataControllerBase } from "./base/metadata.controller.base";

@swagger.ApiTags("metadata")
@common.Controller("metadata")
export class MetadataController extends MetadataControllerBase {
  constructor(protected readonly service: MetadataService) {
    super(service);
  }
}
