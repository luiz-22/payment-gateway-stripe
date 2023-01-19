import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fakeStoreSlice"

export const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.category}</p>
        <p className="card-text">U$D {item.price}</p>
        <button onClick={() => dispatch(addToCart(item.id))} className="btn btn-primary mt-auto">
          add to cart
        </button>
      </div>
    </div>
  );
};
