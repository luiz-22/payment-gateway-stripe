import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Home = () => {
  const products = useSelector((state) => state.fakeStore.products);

  return (
    <div className="container-fluid row justify-content-around">
      {products?.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};
