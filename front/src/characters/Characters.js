import React from "react";
import {
  List,
  TextInput,
  Datagrid,
  TextField,
  DateField,
  TopToolbar,
  SimpleShowLayout,
  Show,
  SimpleForm,
  Create,
  sanitizeListRestProps,
  EditButton,
  ShowButton,
  DeleteButton,
  RichTextField,
} from "react-admin";
import { CreateButton, ExportButton } from "ra-ui-materialui";

// import { Avatar } from "@material-ui/core";

// Liste des actions
const ListActions = (props) => {
  const {
    className,
    maxResults,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
    ...rest
  } = props;

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filter={filterValues}
        exporter={exporter}
      />
    </TopToolbar>
  );
};

const Characters = ({ record, permissions, ...props }) => {
  return (
    <List
      // component="div"
      {...props}
      actions={<ListActions />}
      filterDefaultValues={{ is_published: true }}
      perPage={25}
      ort={{ field: "published_at", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <DateField source="published_at" />
        {/* <Avatar src="" /> */}
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="japanese_name" />
        <TextField source="alias" />
        <TextField source="other_spellings" />
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  );
};

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="published_at" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="jap_name" />
      <TextField source="alias" />
      <TextField source="other_spellings" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" />
      <DateField source="published_at" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="jap_name" />
      <TextField source="alias" />
      <TextField source="other_spellings" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export default Characters;
