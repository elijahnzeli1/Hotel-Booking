import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiModelWhereInput = {
  description?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
};
