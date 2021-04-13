import { StoreContext } from "storeon/react";
import store from "../store";

import "tachyons";
function PageApp({ Component, pageProps }) {
  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
export default PageApp;
