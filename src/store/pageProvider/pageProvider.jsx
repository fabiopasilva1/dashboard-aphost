import React, { lazy } from "react";
import { Ctx } from "../ctx/ctx";
import { useParams } from "react-router-dom";
const Home = lazy(() => import("../../pages/Home"));

const pageMap = {
  home: Home,
};
const PageProvider = (props) => {
  const { slug } = useParams();
  const Component = pageMap[slug] || Home;
  return (
    <Ctx.Provider value={<Component data={props.data} />}>
      {props.children}
    </Ctx.Provider>
  );
};

export default PageProvider;
