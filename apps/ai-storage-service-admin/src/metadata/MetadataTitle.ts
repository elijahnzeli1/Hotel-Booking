import { Metadata as TMetadata } from "../api/metadata/Metadata";

export const METADATA_TITLE_FIELD = "attributeName";

export const MetadataTitle = (record: TMetadata): string => {
  return record.attributeName?.toString() || String(record.id);
};
