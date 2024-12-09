import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./containers/LayoutAdmin";
import LayoutClient from "./containers/LayoutClient";
import Categories from "./page/admin/Categories/Categories";
import Customer from "./page/admin/Services/Services";
import Dashboard from "./page/admin/Dashboard";
import Store from "./page/admin/Store/Store";
import HomePage from "./page/client/HomePage";
import Rating from "./page/client/Rating";
import DetailRating from "./page/client/Rating/DetailRating";
import Staff from "./page/admin/Staff/Staff";
import OrderLayoutAdmin from "./page/admin/Order";
import ChooseStore from "./page/client/Orders/Orders";
import OrderServices from "./page/client/Orders/OrderService";
import Services from "./page/admin/Services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
        <Route path="orders" element={<ChooseStore />} />
        <Route path="orders/service" element={<OrderServices />} />
        <Route path="history" element={<Rating />} />
        <Route path="history/detail" element={<DetailRating />} />
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="store" element={<Store />} />
        <Route path="staff" element={<Staff />} />
        <Route path="customer" element={<Customer />} />
        <Route path="services" element={<Services />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<OrderLayoutAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
