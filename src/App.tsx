import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <TonConnectUIProvider manifestUrl='https://<YOUR_APP_URL>/tonconnect-manifest.json'>
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
