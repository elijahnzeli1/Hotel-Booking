import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="file_path" source="filePath" />
        <TextInput label="metadata" multiline source="metadata" />
        <TextInput label="thumbnails" multiline source="thumbnails" />
      </SimpleForm>
    </Edit>
  );
};
