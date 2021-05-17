import "./App.css";
import styled from "styled-components";
import { LoginPage } from "./components/pages/LoginPage";
import "./styles/vendors/reset.css";

export const App = () => {
  return (
    <AppWrapper>
      <LoginPage />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
`;
