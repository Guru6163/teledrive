import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Customers from "./pages/Customers";
import Dashbaord from "./pages/Dashbaord";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import DeliveryPartners from "./pages/DeliveryPartners";
import UpdateCustomerDetails from "./components/UpdateCustomerDetails";
import CreateCustomer from "./components/CreateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashbaord />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/update" element={<UpdateCustomerDetails />} />
          <Route path="/customers/create" element={<CreateCustomer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/deliveryPartners" element={<DeliveryPartners />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
