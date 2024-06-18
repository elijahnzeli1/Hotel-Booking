import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="file_path" source="filePath" />
        <TextInput label="metadata" multiline source="metadata" />
      </SimpleForm>
    </Create>
  );
};
