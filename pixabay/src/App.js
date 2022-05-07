import {Route} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";

const App = () => {

  return (
    <Layout>
      <Route exact path='/' component={Home} />
    </Layout>
  );
}

export default App
