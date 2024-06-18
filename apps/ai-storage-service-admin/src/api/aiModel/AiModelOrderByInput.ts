import { SortOrder } from "../../util/SortOrder";

export type AiModelOrderByInput = {
  architecture?: SortOrder;
  architectureData?: SortOrder;
  createdAt?: SortOrder;
  creationTimestamp?: SortOrder;
  description?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  modelId?: SortOrder;
  trainingData?: SortOrder;
  trainingDataDescription?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  versionData?: SortOrder;
};
