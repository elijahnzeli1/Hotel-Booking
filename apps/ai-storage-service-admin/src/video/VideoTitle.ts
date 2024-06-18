import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "filePath";

export const VideoTitle = (record: TVideo): string => {
  return record.filePath?.toString() || String(record.id);
};
