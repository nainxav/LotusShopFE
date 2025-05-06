// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// import Layout from '../components/Pages/Layout/Layout';
// import Home from '../components/Pages/Home/Home';
// import Headphones from '../components/Pages/Headphones/Headphones';
// import Speakers from '../components/Pages/Speakers/Speakers';
// import Earphones from '../components/Pages/Earphones/Eearphones';
// import ProductPage from '../components/Pages/ProductPage/ProductPage';
// import CheckoutPage from '../components/Pages/Checkout/CheckoutPage';
// import Dashboard from '../components/Dashboard/Dashboard';
// import Auth from '../components/Auth/Auth';
// import ResetPassword from '../components/Auth/ForgotPassword/ResetPassword';
// import SuccessModal from '../components/SuccessModal/SuccessModal';

// import Profile from '../components/UserProfile/subSection/Profile';
// import MyOrders from '../components/UserProfile/subSection/MyOrders';
// import ShippingDetails from '../components/UserProfile/subSection/ShippingDetails';
// import ProfileSettings from '../components/UserProfile/subSection/ProfileSettings';
// import UserProfile from '../components/UserProfile/UserProfile';
// import NotFound from '../components/Pages/NotFound/NotFound';

// const MyRoutes = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Layout />}>
//         <Route path='/' element={<Home />} />
//         <Route path='headphones' element={<Headphones />} />
//         <Route path='speakers' element={<Speakers />} />
//         <Route path='earphones' element={<Earphones />} />
//         <Route path='product/:slug' element={<ProductPage />} />
//         <Route path='checkout' element={<CheckoutPage />}>
//           <Route path='success' element={<SuccessModal />} />
//         </Route>
//       </Route>

//       <Route path='/users' element={<UserProfile />}>
//         <Route path='/users' element={<NotFound />} />
//         <Route path='me/:id' element={<Profile />} />
//         <Route path='my-orders/:id' element={<MyOrders />} />
//         <Route path='shipping-details/:id' element={<ShippingDetails />} />
//         <Route path='profile-settings/:id' element={<ProfileSettings />} />
//       </Route>

//       <Route path='/auth' element={<Auth />} />
//       <Route path='/forgot-password/:token' element={<ResetPassword />} />

//       <Route path='/admin/dashboard' element={<Dashboard />} />

//       <Route path='*' element={<NotFound />} />
//     </Routes>
//   );
// };

// export default MyRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Pages/Layout/Layout';
import Home from '../components/Pages/Home/Home';
import Headphones from '../components/Pages/Headphones/Headphones';
import Speakers from '../components/Pages/Speakers/Speakers';
import Earphones from '../components/Pages/Earphones/Eearphones';
import ProductPage from '../components/Pages/ProductPage/ProductPage';
import CheckoutPage from '../components/Pages/Checkout/CheckoutPage';
import Dashboard from '../components/Dashboard/Dashboard';
import Auth from '../components/Auth/Auth';
import ResetPassword from '../components/Auth/ForgotPassword/ResetPassword';
import SuccessModal from '../components/SuccessModal/SuccessModal';

import Profile from '../components/UserProfile/subSection/Profile';
import MyOrders from '../components/UserProfile/subSection/MyOrders';
import ShippingDetails from '../components/UserProfile/subSection/ShippingDetails';
import ProfileSettings from '../components/UserProfile/subSection/ProfileSettings';
import UserProfile from '../components/UserProfile/UserProfile';
import NotFound from '../components/Pages/NotFound/NotFound';

const MyRoutes = ({ onSubmit }) => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='headphones' element={<Headphones />} />
        <Route path='speakers' element={<Speakers />} />
        <Route path='earphones' element={<Earphones />} />
        <Route path='product/:slug' element={<ProductPage />} />
        <Route path='checkout' element={<CheckoutPage />}>
          <Route path='success' element={<SuccessModal />} />
        </Route>
      </Route>

      <Route path='/users' element={<UserProfile />}>
        <Route path='/users' element={<NotFound />} />
        <Route path='me/:id' element={<Profile />} />
        <Route path='my-orders/:id' element={<MyOrders />} />
        <Route path='shipping-details/:id' element={<ShippingDetails />} />
        <Route path='profile-settings/:id' element={<ProfileSettings />} />
      </Route>

      {/* ✅ Oper prop onSubmit ke komponen Auth */}
      <Route path='/auth' element={<Auth onSubmit={onSubmit} />} />
      <Route path='/forgot-password/:token' element={<ResetPassword />} />

      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
