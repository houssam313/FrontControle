import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Register,Home, About, Contact, Login, Employe, Admin, Client } from "./components";



function App() {
  
  return (
   
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/admin" exact component={() => <Admin />} />
          <Route path="/employe" exact component={() => <Employe />} />
          <Route path="/client" exact component={() => <Client />} />
          <Route path="/register" exact component={() => <Register />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
