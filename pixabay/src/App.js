import {Link, Route} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import LargeImage from "./components/largeImage";

const App = () => {

  return (
    <>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/largeImage' component={LargeImage} />
      </Layout>
    </>
  );
}

export default App
