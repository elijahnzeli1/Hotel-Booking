import { AiModel as TAiModel } from "../api/aiModel/AiModel";

export const AIMODEL_TITLE_FIELD = "filePath";

export const AiModelTitle = (record: TAiModel): string => {
  return record.filePath?.toString() || String(record.id);
};
