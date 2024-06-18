import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModelService } from "./model.service";
import { ModelControllerBase } from "./base/model.controller.base";

@swagger.ApiTags("models")
@common.Controller("models")
export class ModelController extends ModelControllerBase {
  constructor(protected readonly service: ModelService) {
    super(service);
  }
}
