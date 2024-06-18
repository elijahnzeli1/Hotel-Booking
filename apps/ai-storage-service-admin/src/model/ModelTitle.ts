import { Model as TModel } from "../api/model/Model";

export const MODEL_TITLE_FIELD = "filePath";

export const ModelTitle = (record: TModel): string => {
  return record.filePath?.toString() || String(record.id);
};
