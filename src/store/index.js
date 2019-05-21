import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
console.log("state",store.getState())
export default store;