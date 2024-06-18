import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VideoWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  metadata?: StringNullableFilter;
  thumbnails?: StringNullableFilter;
};
