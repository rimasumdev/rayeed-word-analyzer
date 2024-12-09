import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Container />
        <Footer />
      </div>
    </>
  );
}

export default App;
