import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ModelWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  metadata?: StringNullableFilter;
};
