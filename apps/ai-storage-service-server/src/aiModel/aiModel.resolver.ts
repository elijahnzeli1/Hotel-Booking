import * as graphql from "@nestjs/graphql";
import { AiModelResolverBase } from "./base/aiModel.resolver.base";
import { AiModel } from "./base/AiModel";
import { AiModelService } from "./aiModel.service";

@graphql.Resolver(() => AiModel)
export class AiModelResolver extends AiModelResolverBase {
  constructor(protected readonly service: AiModelService) {
    super(service);
  }
}
