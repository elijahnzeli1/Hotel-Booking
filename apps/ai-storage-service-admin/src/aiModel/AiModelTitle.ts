import { AiModel as TAiModel } from "../api/aiModel/AiModel";

export const AIMODEL_TITLE_FIELD = "architecture";

export const AiModelTitle = (record: TAiModel): string => {
  return record.architecture?.toString() || String(record.id);
};
