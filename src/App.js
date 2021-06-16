import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./styles/vendors/reset.css";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { LoggedPage } from "./components/pages/LoggedPage";
import { PasswordRecoveryPage } from "./components/pages/PasswordRecoveryPage";
import { WelcomePage } from "./components/pages/WelcomePage";

export const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/password-recovery" component={PasswordRecoveryPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/logged" component={LoggedPage} />
          <Route path="/welcome" component={WelcomePage} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
`;
