import { ProductCard } from "../components/index";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");
  // useTitle(() => {
  //   document.title = "KodeShop | Home";
  // }, []);
  return (
    <div>
      <ProductCard />
    </div>
  );
};
export default Home;
