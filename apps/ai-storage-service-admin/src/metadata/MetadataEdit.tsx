import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MetadataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attribute_name" source="attributeName" />
        <TextInput label="attribute_value" source="attributeValue" />
        <TextInput label="item_id" source="itemId" />
      </SimpleForm>
    </Edit>
  );
};
