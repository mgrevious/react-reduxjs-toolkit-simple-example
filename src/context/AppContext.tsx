import React, { useState } from "react";
import App from "../components/App";

interface Pkg {
  name: string;
  version: string;
  releaseDate: string;
}

interface ContextState {
  packages: Pkg[];
  updatePackages: (p: Pkg[]) => void;
}

export const AppContext = React.createContext<ContextState | null>(null);

const AppProvider = () => {
  const [packages, setPackages] = useState<Pkg[]>([]);

  return (
    <AppContext.Provider
      value={{
        packages: packages,
        updatePackages: (pkg: Pkg[]) => {
          setPackages(pkg);
        },
      }}
    >
      <App />
    </AppContext.Provider>
  );
};

export default AppProvider;
