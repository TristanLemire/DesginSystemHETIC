import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./styles/vendors/reset.css";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { PasswordRecoveryPage } from "./components/pages/PasswordRecoveryPage";

export const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/password-recovery">
            <PasswordRecoveryPage />
          </Route>
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
