import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import CategoriesReducer from "../page/admin/Categories/CategoriesSlice";
import StoreReducer from "../page/admin/Store/StoreSlice";
import OrderReducer from "../page/client/Orders/OrderSlice";
import ServiceReducer from "../page/admin/Services/ServiceSlice";

const persistConfig = {
  key: "storeOrder",
  storage,
};

const reducers = combineReducers({
  categories: CategoriesReducer,
  stores: StoreReducer,
  orders: OrderReducer,
  services: ServiceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
