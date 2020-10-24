import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./Header/Header";
import TinderCards from "./TinderCards/TinderCards";
import Footer from "./Footer/Footer";
import ChatsHeader from "../Components/ChatsHeader/ChatsHeader";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";
import { connect } from 'react-redux';
import Login from "./Login/Login";

function App(props) {
  if(!props.user){
    return(
      <Login/>
    )
  };
  return (
    <div className="App">
      <Switch>
        <Route path={`/${props.user.uid}/:person`}>
          <Chat/>
        </Route>
        <Route path={`/${props.user.uid}`}>
          <ChatsHeader/>
          <Chats/>
        </Route>
        <Route path="/">
          <Header />
          <TinderCards/>
          <Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    user: state.auth.user
  }
}

// const mapDispatchToProps = (dispatch)=>{
//   return{
    
//   }
// }

export default connect(mapStateToProps,null)(App);
