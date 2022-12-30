import {
  BrowserRouter as 
  Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Login from "./login";
import Profile from "./profile";
import AdminDashboard from "./admin/dashboard/Dashboard";
import AdminProducts from "./admin/product/Products";
import Users from "./admin/user/Users";
import CreateUser from "./admin/user/create";
import EditUser from "./admin/user/edit";
import EditProduct from "./admin/product/edit";
import ServiceDashboard from "./_service/dashboard/Dashboard";
import ServiceProducts from "./_service/product/Products";
import CreateServiceProduct from "./_service/product/create";
import EditServiceProduct from "./_service/product/edit";
import FactoryDashboard from "./factory/dashboard/Dashboard";
import FactoryProducts from "./factory/product/Products";
import CreateFactoryProduct from "./factory/product/create";
import EditFactoryProduct from "./factory/product/edit";
import ExportProduct from "./factory/product/export";
import StoreDashboard from "./store/dashboard/Dashboard";
import StoreProducts from "./store/product/Products";
import CreateStoreProduct from "./store/product/create";
import EditStoreProduct from "./store/product/edit";
import SellProduct from "./store/product/sell";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="profile" element={<Profile/>} />
          </Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<Users />} />
            <Route path="create" element={<CreateUser />} />
            <Route path="users/edit" element={<EditUser />} />
            <Route path="products/edit" element={<EditProduct />} />
          </Route>
          <Route path="/service" element={<Layout />}>
            <Route index element={<ServiceDashboard />} />
            <Route path="products" element={<ServiceProducts />} />
            <Route path="products/create" element={<CreateServiceProduct />} />
            <Route path="products/edit" element={<EditServiceProduct />} />
          </Route>
          <Route path="/factory" element={<Layout />}>
            <Route index element={<FactoryDashboard />} />
            <Route path="products" element={<FactoryProducts />} />
            <Route path="products/create" element={<CreateFactoryProduct />} />
            <Route path="products/edit" element={<EditFactoryProduct />} />
            <Route path="products/export" element={<ExportProduct />} />
          </Route>
          <Route path="/store" element={<Layout />}>
            <Route index element={<StoreDashboard />} />
            <Route path="products" element={<StoreProducts />} />
            <Route path="products/create" element={<CreateStoreProduct />} />
            <Route path="products/edit" element={<EditStoreProduct />} />
            <Route path="products/sell" element={<SellProduct />} />
          </Route>
          <Route path="login" element={<Login/>} />
          <Route path="profile" element={<Profile/>} />
        </Routes> 
    </Router>
    

  );
}

export default App;
