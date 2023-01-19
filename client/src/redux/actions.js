import axios from "axios";
import { getApi } from "./fakeStoreSlice";

export const getProducts = () => (dispatch) => {
    axios("https://fakestoreapi.com/products")
        .then(res => dispatch(getApi(res.data)))
        .catch(e => console.log(e))
}