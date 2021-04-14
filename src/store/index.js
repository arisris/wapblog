import { createStoreon } from "storeon";
import counter from "./counter";
import auth from "./auth";
export const store = createStoreon([counter, auth]);
export default store;
