import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="file_path" source="filePath" />
        <TextInput label="metadata" multiline source="metadata" />
      </SimpleForm>
    </Edit>
  );
};
