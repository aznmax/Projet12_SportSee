import './App.css';
import Header from "./components/Header/Header"
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import VerticalLayout from './components/VerticalLayout/VerticalLayout';
import Error from './Pages/Error/Error';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (

    <div className="App">

          <Router>
              <Header />
              <VerticalLayout />
              <main>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/user/:userId" component={Dashboard} />
                      <Route path="*" component={Error} />
                  </Switch>
              </main>
          </Router>

    </div>
  );
}

export default App;


