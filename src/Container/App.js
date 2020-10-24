import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./Header/Header";
import TinderCards from "./TinderCards/TinderCards";
import Footer from "./Footer/Footer";
import ChatsHeader from "../Components/ChatsHeader/ChatsHeader";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chats/:person">
          <Chat/>
        </Route>
        <Route path="/chats">
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

export default App;
