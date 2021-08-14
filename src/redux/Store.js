import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";

// import logger from "redux-logger";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
