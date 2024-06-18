import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MetadataWhereInput = {
  attributeName?: StringNullableFilter;
  attributeValue?: StringNullableFilter;
  id?: StringFilter;
  itemId?: StringNullableFilter;
};
