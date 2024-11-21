import ProducList from "./components/ProducList";
import { PRODUCTS } from "./utils/constants/product";

function App() {
  return (
    <>
      <ProducList products={PRODUCTS} />
      {/* <h1>hello</h1> */}
    </>
  );
}

export default App;
