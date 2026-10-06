import Header from "./components/Header";
import Main from "./components/Main";

// Exercise 1d: import and render <Footer/> inside App.jsx
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 89.99,
    description: "Lightweight and fast.",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 24.99,
    description: "Non-slip, 6mm thick.",
  },
  {
    id: 3,
    name: "Water Bottle",
    price: 14.99,
    description: "Insulated, 750ml.",
  },
];

function App() {
  return (
    <div>
      <Header />

      {/* Main Content Component */}
      <Main />

      {/* Rendering <Footer /> below Main */}
      <Footer />
    </div>
  );
}

export default App;
