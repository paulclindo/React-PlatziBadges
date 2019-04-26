import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badge from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badge} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
