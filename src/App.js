import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <AllRoutes />
      </main>
    </div>
  );
};
export default App;
