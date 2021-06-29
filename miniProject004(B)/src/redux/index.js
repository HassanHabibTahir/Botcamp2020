import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../redux/reducers";

export const store = createStore(reducer, applyMiddleware(thunk));
