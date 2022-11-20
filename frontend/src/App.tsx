import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppContext, initState, AppContextType } from "./contexts/AppContext";
import { Dashboard, Analytics } from "./screens";
import DashboardLayout from "./components/Layouts/DashboardLayout";

const App = () => {
  const [state, setState] = useState(initState);
  const providerValue = useMemo(
    () => ({
      state,
      setState: (updates: AppContextType) => {
        setState((prevState) => ({ ...prevState, ...updates }));
      },
    }),
    [state, setState],
  );

  return (
    <AppContext.Provider value={providerValue}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
            {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;
