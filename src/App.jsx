import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { explorerPlugin } from "@graphiql/plugin-explorer";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { version } from "../package.json";
// Style
import "./index.scss";
import "./App.css";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const backendUuid = urlParams.get("buuid") || "undefined";
const ClusterUuid = urlParams.get("cuuid") || "undefined";

const fetcher = createGraphiQLFetcher({
  url: `https://${backendUuid}.${ClusterUuid}.backend.agoston.io/data/graphql`,
  subscriptionUrl: `wss://${backendUuid}.${ClusterUuid}.backend.agoston.io/data/graphql`,
});

const explorer = explorerPlugin();

function App() {
  return (
    <div className="container-fluid windows-fill">
      <div className="row align-items-center p-2 header-row">
        <div className="col-2">
          <a
            className="fs-5 text-primary m-0"
            href="https://agoston.io"
            target="_blank"
          >
            AGOSTON{" "}
          </a>
          <span className="fs-6 text-primary">
            <a
              className="fs-5 text-primary m-0"
              href="https://graphql.org"
              target="_blank"
            >
              Graph<span className="text-white">i</span>QL{" "}
              <span className="text-muted fs-6">v{version}</span>
            </a>
          </span>
        </div>
        <div className="col-10">
          <span className="text-primary">Backend GraphQL endpoint: </span>
          <span className="text-white">
            https://{backendUuid}.{ClusterUuid}
            .backend.agoston.io/data/graphql
          </span>
        </div>
      </div>
      <div className="row graphiql-row">
        <div className="col-12 g-0">
          <GraphiQL
            fetcher={fetcher}
            plugins={[explorer]}
            defaultEditorToolsVisibility={true}
            defaultQuery={`# A simple query to retrieve the user session data:
query CurrentSession {
  session
}

# Open the explorer (icon on the left) to build your queries.
# Once you create tables, functions, or views in your Postgres database,
# the GraphQL server of your backend detects them and
# exposes them in the GraphQL endpoint automatically.
            `}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
