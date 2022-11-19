import { useState, useMemo } from 'react';
import { AppContext, initState, AppContextType } from './contexts/AppContext';
import { Dashboard } from './screens';

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
      <Dashboard />
    </div>
    </AppContext.Provider>
  );
}

export default App;
