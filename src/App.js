import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./containers/Home";
import About from "./containers/About";
import Blog from "./containers/Blog";
import BlogPost from "./containers/BlogPost";
import Contact from "./containers/Contact";
import Engineering from "./containers/Engineering";
import Fashion from "./containers/Fashion";
import Features from "./containers/Features";
import Pharmaceutical from "./containers/Pharmaceutical";
import PrivacyPolicy from "./containers/Privacy-Policy";
import TermsAndConditions from "./containers/TermsAndConditions";
import Product from "./containers/Product";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/post" component={BlogPost} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/engineering" component={Engineering} />
          <Route exact path="/fashion" component={Fashion} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/pharmaceutical" component={Pharmaceutical} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/product" component={Product} />
          <Route
            exact
            path="/termsandconditions"
            component={TermsAndConditions}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
