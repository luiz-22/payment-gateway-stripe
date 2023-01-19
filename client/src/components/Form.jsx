import axios from "axios";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js"; // Me trae stripe y voy a poder cargar la conexión a la plataforma
import {
  Elements, // Engloba a cada componente, para que cada componente que contenga pueda acceder a la conexión de Stripe
  CardElement, // Valida la tarjeta de crédito
  useStripe, // Llamo a Stripe
  useElements, // Puede acceder a los elementos de Stripe
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KZFYxGVqYV1yoOdeYDsBoB0xPjcoDAWxCxGpC8s8RPoPagm0ck5YAGyLrESugaMlpu2RxUn4Y78sQCfmDOgvbul008uLmzwWl"
);

const CheckoutForm = () => {
  const total = useSelector((state) => state.fakeStore.total);
  const stripe = useStripe();
  const elements = useElements();
  // const cart = useSelector((state) => state.cart);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // Creo un método de pago
      type: "card",
      card: elements.getElement(CardElement), // Que elemento tiene el n° de tarjeta
    });
    // setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      //     try {
      const { data } = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: Math.trunc(total * 100), //cents
      });
      console.log(data);

      elements.getElement(CardElement).clear(); // Limpia el input
      //     } catch (error) {
      //       console.log(error);
      //     }
      //     setLoading(false);
    } else console.log(error);
  };

  // console.log(!stripe || loading);

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <h3 style={{ marginBottom: "1rem", textAlign: "right" }}>
        Total &nbsp;&nbsp; U$D {total.toFixed(2)}
      </h3>
      <CardElement />
      <button className="btn btn-success" style={{ marginTop: "1rem" }}>
        Buy
      </button>
    </form>
  );
};

const Form = () => {
  return (
    <div className="col-12 col-lg-4 pt-2">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Form;
