import { useContext } from "react";
import { Ctx } from "../ctx/ctx";

const Page = () => {
  const ctx = useContext(Ctx);
  return ctx;
};

export default Page;
