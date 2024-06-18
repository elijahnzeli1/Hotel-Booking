import { AiModelWhereInput } from "./AiModelWhereInput";
import { AiModelOrderByInput } from "./AiModelOrderByInput";

export type AiModelFindManyArgs = {
  where?: AiModelWhereInput;
  orderBy?: Array<AiModelOrderByInput>;
  skip?: number;
  take?: number;
};
