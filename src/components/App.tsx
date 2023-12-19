import { Provider } from "react-redux";
import { store } from "../app/store";
import PackagesList from "../features/packages/Packages";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Search For A Package</h1>
        <PackagesList />
      </div>
    </Provider>
  );
}

export default App;
