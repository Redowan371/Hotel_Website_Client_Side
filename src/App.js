import { css } from "@emotion/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { ClimbingBoxLoader } from 'react-spinners';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CreateNewEvent from './components/CreateNewEvent/CreateNewEvent';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import MyOrders from './components/MyOrders/MyOrders';
import OurRoms from './components/OurRoms/OurRoms';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoomBooking from './components/RoomBooking/RoomBooking';
import Banner from './components/Sheared/Banner/Banner';
import Footer from './components/Sheared/Footer';
import Menubar from './components/Sheared/Menubar/Menubar';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from "./PlaceOrder/PlaceOrder";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },8000)
  },[])
  const override = css`
  display: flex;
  
  border-color: red;

`;
  return (
    
    <div>
      {
        loading ? <ClimbingBoxLoader


          color={'#FE42A1'}
          loading={loading}
          css={override}
          size={30} />
        :
          <AuthProvider>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Menubar></Menubar>
                  <Banner></Banner>
                  <Home></Home>
                </Route>
                <Route exact path='/home'>
                  <Menubar></Menubar>
                  <Banner></Banner>
                  <Home></Home>
                </Route>
                <Route exact path='/rooms'>
                  <Menubar></Menubar>
                  <Banner></Banner>
                  <OurRoms></OurRoms>
                  <Footer></Footer>
                </Route>
                <Route exact path='/myOrders'>
                  <Menubar></Menubar>
                  <MyOrders></MyOrders>
                </Route>
                <Route exact path='/createNewEvents'>
                  <Menubar></Menubar>
                  <CreateNewEvent></CreateNewEvent>
                  <Footer></Footer>
                </Route>
                <Route exact path='/manageOrder'>
                  <Menubar></Menubar>
                  <ManageOrder></ManageOrder>
                  <Footer></Footer>
                </Route>
                <Route exact path='/about'>
                  <Menubar></Menubar>
                  <About></About>
                  <Footer></Footer>
                </Route>
                <Route exact path='/contact'>
                  <Menubar></Menubar>
                  <Contact></Contact>
                  <Footer></Footer>
                </Route>
                <Route exact path='/placeOrder'>
                  <Menubar></Menubar>
                  <PlaceOrder></PlaceOrder>
                  <Footer></Footer>
                </Route>
                <Route exact path='/login'>
                  <Menubar></Menubar>
                  <Login></Login>
                </Route>
                <PrivateRoute exact path='/roomBooking/:id'>
                  <Menubar></Menubar>
                  <RoomBooking></RoomBooking>
                </PrivateRoute>
                <Route exact path='*'>
                  <PageNotFound></PageNotFound>
                </Route>
              </Switch>
            </Router>
          </AuthProvider>
      }
    </div>

  );

}

export default App;
