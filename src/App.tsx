import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <TonConnectUIProvider manifestUrl='https://edvardsolomon.github.io/My-TON-App/tonconnect-manifest.json'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<FirstPage />}
          />
          <Route
            path='/profile'
            element={<SecondPage />}
          />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
