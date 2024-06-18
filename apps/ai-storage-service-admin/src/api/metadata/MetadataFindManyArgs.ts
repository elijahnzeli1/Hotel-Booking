import { MetadataWhereInput } from "./MetadataWhereInput";
import { MetadataOrderByInput } from "./MetadataOrderByInput";

export type MetadataFindManyArgs = {
  where?: MetadataWhereInput;
  orderBy?: Array<MetadataOrderByInput>;
  skip?: number;
  take?: number;
};
