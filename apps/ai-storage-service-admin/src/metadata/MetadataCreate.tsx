import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MetadataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attribute_name" source="attributeName" />
        <TextInput label="attribute_value" source="attributeValue" />
        <TextInput label="item_id" source="itemId" />
      </SimpleForm>
    </Create>
  );
};
