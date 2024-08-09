import "@fontsource/roboto";
import Header from "./components/header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Lets'go, Cognyers 🚀
      </h1>
    </div>
  );
}

export default App;
