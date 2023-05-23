import React from "react";
import PageProvider from "../store/pageProvider/pageProvider";
import Page from "../store/states/page";

const RouteRestrict = (props) => {
  console.log(props);
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
};

export default RouteRestrict;
