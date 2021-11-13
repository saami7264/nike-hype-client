import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import PurchaseProduct from './Pages/PurchaseProduct/PurchaseProduct';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Registration from './Pages/Register/Registration';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pay from './Pages/Pay/Pay';
import Review from './Pages/Review/Review';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/pay'>
              <Pay></Pay>
            </PrivateRoute>
            <Route path='/explore'>
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path='/purchase/:productId'>
              <PurchaseProduct></PurchaseProduct>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review></Review>
            </PrivateRoute>
            <AdminRoute path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path='/manageOrders'>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path='/manageProducts'>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </AdminRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
