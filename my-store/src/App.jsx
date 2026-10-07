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
    category: "Footwear",
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 24.99,
    description: "Non-slip, 6mm thick.",
    category: "Fitness",
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Water Bottle",
    price: 14.99,
    description: "Insulated, 750ml.",
    category: "Hydration",
    image: "https://picsum.photos/200?random=3",
  },
];

function App() {
  return (
    <div>
      <Header />

      {/* Main Content Component */}
      {/* Exercise 4: passed products array down to Main as a prop */}
      <Main products={products} />

      {/* Exercise 1: Rendering <Footer /> below Main */}
      <Footer />
    </div>
  );
}

export default App;
