import React from "react";
import ReactDOM from "react-dom";
import { useFindTaskQuery } from "./generated/query";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const MyComponent = () => {
  const { status, data, error, isFetching } = useFindTaskQuery(
    {
      endpoint: "http://localhost:3000/graphql",
      fetchParams: {
        headers: new Headers({
          "Accept": "application/json",
          "content-type": "application/json"
        })
      }
    },
    { id: "hi" }
  );

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MyComponent></MyComponent>
  </QueryClientProvider>,
  document.getElementById("root")
);
