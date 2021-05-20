import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/organisms/Header";
import { LoginPage } from "./components/pages/LoginPage";
import "./styles/vendors/reset.css";
import { RegisterPage } from "./components/pages/RegisterPage";

export const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/register">
            <div>
              <RegisterPage/>
            </div>
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
`;
