import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiModelWhereInput = {
  architecture?: StringNullableFilter;
  architectureData?: StringNullableFilter;
  creationTimestamp?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  modelId?: StringNullableFilter;
  trainingData?: StringNullableFilter;
  trainingDataDescription?: StringNullableFilter;
  version?: StringNullableFilter;
  versionData?: StringNullableFilter;
};
