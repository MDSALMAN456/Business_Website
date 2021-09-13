import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import ContactList from "./ContactBook/ContactList";
import AddContact from "./ContactBook/AddContact";
import Edit from "./ContactBook/Edit";
import View from "./ContactBook/View";

const App=()=>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={ContactList}/>
            <Route exact path="/contact/addcontact" component={AddContact}/>
            <Route exact path="/contact/editcontact/:id" component={Edit}/>
            <Route exact path="/contact/view/:id" component={View}/>


            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
        </Switch>

        </>
    )
}
export default App;