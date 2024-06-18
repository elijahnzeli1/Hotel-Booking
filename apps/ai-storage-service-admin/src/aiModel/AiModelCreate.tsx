import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AiModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="architecture" source="architecture" />
        <TextInput label="architecture_data" source="architectureData" />
        <DateTimeInput label="creation_timestamp" source="creationTimestamp" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="file_path" source="filePath" />
        <TextInput label="model_id" source="modelId" />
        <TextInput label="training_data" multiline source="trainingData" />
        <TextInput
          label="training_data_description"
          multiline
          source="trainingDataDescription"
        />
        <TextInput label="version" source="version" />
        <TextInput label="version_data" source="versionData" />
      </SimpleForm>
    </Create>
  );
};
