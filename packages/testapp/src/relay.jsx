import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = (operation, variables) => {
    let headers = {
        "Content-Type": "application/json",
    };

    return fetch(process.env.GRAPHQL_API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then((response) => {
        return response.json();
    });
};

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());
const environment = new Environment({ network, store });

export default environment;
