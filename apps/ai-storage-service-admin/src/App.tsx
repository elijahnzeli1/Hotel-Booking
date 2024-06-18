import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { MetadataList } from "./metadata/MetadataList";
import { MetadataCreate } from "./metadata/MetadataCreate";
import { MetadataEdit } from "./metadata/MetadataEdit";
import { MetadataShow } from "./metadata/MetadataShow";
import { AiModelList } from "./aiModel/AiModelList";
import { AiModelCreate } from "./aiModel/AiModelCreate";
import { AiModelEdit } from "./aiModel/AiModelEdit";
import { AiModelShow } from "./aiModel/AiModelShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AIStorageService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Metadata"
          list={MetadataList}
          edit={MetadataEdit}
          create={MetadataCreate}
          show={MetadataShow}
        />
        <Resource
          name="AiModel"
          list={AiModelList}
          edit={AiModelEdit}
          create={AiModelCreate}
          show={AiModelShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
