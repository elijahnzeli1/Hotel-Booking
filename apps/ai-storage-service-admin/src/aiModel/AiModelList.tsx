import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AiModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AIModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="architecture" source="architecture" />
        <TextField label="architecture_data" source="architectureData" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation_timestamp" source="creationTimestamp" />
        <TextField label="description" source="description" />
        <TextField label="file_path" source="filePath" />
        <TextField label="ID" source="id" />
        <TextField label="model_id" source="modelId" />
        <TextField label="training_data" source="trainingData" />
        <TextField
          label="training_data_description"
          source="trainingDataDescription"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
        <TextField label="version_data" source="versionData" />
      </Datagrid>
    </List>
  );
};
