import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Items from "./components/Items";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Profile from "./components/Profile";


function App() {
  return (
    <Router>
       <Header />

       <Route exact path="/">
       <Showcase />
       <Items />
       </Route>

       <Route path="/login">
       <Login />
       </Route>

       <Route path="/signup">
       <SignUp />
       </Route>

       <Route path="/profile">
       <Profile />
       </Route>

       <Footer />
    </Router>   
  );  
}

export default App;
