import { SortOrder } from "../../util/SortOrder";

export type MetadataOrderByInput = {
  attributeName?: SortOrder;
  attributeValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  updatedAt?: SortOrder;
};
