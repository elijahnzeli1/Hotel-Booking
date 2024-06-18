import * as graphql from "@nestjs/graphql";
import { ModelResolverBase } from "./base/model.resolver.base";
import { Model } from "./base/Model";
import { ModelService } from "./model.service";

@graphql.Resolver(() => Model)
export class ModelResolver extends ModelResolverBase {
  constructor(protected readonly service: ModelService) {
    super(service);
  }
}
