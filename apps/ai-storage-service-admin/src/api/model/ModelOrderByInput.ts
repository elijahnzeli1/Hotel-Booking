import { SortOrder } from "../../util/SortOrder";

export type ModelOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  updatedAt?: SortOrder;
};
