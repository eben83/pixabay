import {Route} from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./components/home/home";

import './App.xs.css'

const App = () => {

  return (
    <Layout>
      <Route exact path='/' component={Home} />
    </Layout>
  );
}

export default App
