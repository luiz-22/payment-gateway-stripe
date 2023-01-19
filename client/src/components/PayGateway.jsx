import { useSelector } from "react-redux";
import Cart from "./Cart";
import Form from "./Form";

const PayGateway = () => {
  const total = useSelector((state) => state.fakeStore.total);
  return (
    <main className="container-fluid">
      {Math.trunc(total) !== 0 ? (
        <section className="row">
          <Cart />
          <Form />
        </section>
      ) : (
        <div className="card empty" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">There's a cart to fill!</h3>
            <h5 className="card-subtitle mb-2 text-muted">
              You currently have no products in your cart.
            </h5>
            <p className="card-text">
              Search among the products in the catalog.
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default PayGateway;
