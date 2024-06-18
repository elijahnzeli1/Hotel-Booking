import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiModelService } from "./aiModel.service";
import { AiModelControllerBase } from "./base/aiModel.controller.base";

@swagger.ApiTags("aiModels")
@common.Controller("aiModels")
export class AiModelController extends AiModelControllerBase {
  constructor(protected readonly service: AiModelService) {
    super(service);
  }
}
