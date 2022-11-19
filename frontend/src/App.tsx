import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext, initState, AppContextType } from "./contexts/AppContext";
import { Dashboard, Analytics } from "./screens";

const App = () => {
  const [state, setState] = useState(initState);
  const providerValue = useMemo(
    () => ({
      state,
      setState: (updates: AppContextType) => {
        setState((prevState) => ({ ...prevState, ...updates }));
      },
    }),
    [state, setState]
  );

  return (
    <AppContext.Provider value={providerValue}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;
