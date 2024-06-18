import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  thumbnails?: SortOrder;
  updatedAt?: SortOrder;
};
