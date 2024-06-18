import * as graphql from "@nestjs/graphql";
import { MetadataResolverBase } from "./base/metadata.resolver.base";
import { Metadata } from "./base/Metadata";
import { MetadataService } from "./metadata.service";

@graphql.Resolver(() => Metadata)
export class MetadataResolver extends MetadataResolverBase {
  constructor(protected readonly service: MetadataService) {
    super(service);
  }
}
