// src/App.js
import { graphql, QueryRenderer } from "react-relay";

import environment from "./relay";

const appQuery = graphql`
    query AppQuery {
        me {
            data {
                id
                comments
                created_at
            }
        }
    }
`;

const App = () => {
    return (
        <QueryRenderer
            environment={environment}
            query={appQuery}
            render={({ error, props }) => {
                console.log(props);
            }}
        />
    );
};

export default App;
