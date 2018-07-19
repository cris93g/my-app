import axios from "axios";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const CLEAR_CART = "CLEAR_CART";
const GET_DESKTOP = "GET_DESKTOP";
const GET_LAPTOP = "GET_LAPTOP";
const GET_ACESSORY = "GET_ACESSORY";
const GET_TABLET = "GET_TABLET";
const GET_HARDWARE = "GET_HARDWARE";
const GET_ITEMS = "GET_ITEMS";
const CREATE_ORDER = "CREATE_ORDER";
const ALL_ORDERS = "ALL_ORDERS";
const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me")
  };
}

export function addToCart(item_id) {
  const cartItem = axios.post(`/api/cart/${item_id}`).then(res => {
    console.log("check if we get here cart");
    return res.data;
  });
  return {
    type: ADD_TO_CART,
    payload: cartItem
  };
}

export function readCartItems(item_id) {
  const cartItem = axios.get(`/api/cart/`).then(res => {
    return res.data;
  });
  return {
    type: GET_CART_ITEMS,
    payload: cartItem
  };
}

export function removeFromCart(id) {
  console.log(id);
  const cartStuff = axios.delete(`/api/cart/${id}`).then(res => {
    return res.data;
  });
  return {
    type: REMOVE_FROM_CART,
    payload: cartStuff
  };
}

export function clearCart() {
  console.log("clearing cart?");
  const cartCont = axios.put("/api/cart").then(res => {
    return res.data;
  });
  return {
    type: CLEAR_CART,
    payload: cartCont
  };
}

export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get("/api/items")
  };
}
export function getTablet() {
  return {
    type: GET_TABLET,
    payload: axios.get("/api/tablet")
  };
}
export function getLaptop() {
  return {
    type: GET_LAPTOP,
    payload: axios.get("/api/laptop")
  };
}
export function getAcessory() {
  return {
    type: GET_ACESSORY,
    payload: axios.get("/api/acessory")
  };
}
export function getHardware() {
  return {
    type: GET_HARDWARE,
    payload: axios.get("/api/hardware")
  };
}

export function getDesktop() {
  return {
    type: GET_DESKTOP,
    payload: axios.get("/api/Desktop")
  };
}
export function createOrders() {
  const OrderItem = axios.post("/api/Orders").then(res => {
    return res.data;
  });
  console.log("testing order submit");
  return {
    type: CREATE_ORDER,
    payload: OrderItem
  };
}

export function readOrders() {
  const orders = axios.get("/api/Orders").then(res => {
    return res.data;
  });
  return {
    type: ALL_ORDERS,
    payload: orders
  };
}

const initialState = {
  items: [],
  isLoading: false,
  error: "",
  cart: [],
  Desktop: [],
  orders: [],
  user: {},
  isAuthed: false
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ITEMS_PENDING":
      return { ...state, isLoading: true };
    case "GET_ITEMS_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_ITEMS_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "GET_DESKTOP_PENDING":
      return { ...state, isLoading: true };
    case "GET_DESKTOP_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_DESKTOP_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "GET_LAPTOP_PENDING":
      return { ...state, isLoading: true };
    case "GET_LAPTOP_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_LAPTOP_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "GET_HARDWARE_PENDING":
      return { ...state, isLoading: true };
    case "GET_HARDWARE_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_HARDWARE_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "GET_ACESSORY_PENDING":
      return { ...state, isLoading: true };
    case "GET_ACESSORY_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_ACESSORY_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "GET_TABLET_PENDING":
      return { ...state, isLoading: true };
    case "GET_TABLET_FULFILLED":
      return { ...state, isLoading: false, items: action.payload.data };

    case "GET_TABLET_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    case ADD_TO_CART + "_FULFILLED":
      const cartPlusOne = state.cart.slice();
      cartPlusOne.push(action.payload);
      return Object.assign({}, state, { cart: cartPlusOne });
    case REMOVE_FROM_CART + "_FULFILLED":
      // const cartMinusOne = state.cart.splice(action.payload, -1);
      return Object.assign({}, state, { cart: action.payload });
    case CLEAR_CART + "_FULFILLED":
      return Object.assign({}, state, { cart: action.payload });
    case GET_CART_ITEMS + "_FULFILLED":
      return Object.assign({}, state, { cart: action.payload });
    case CREATE_ORDER + "_FULFILLED":
      const orderPlusOne = state.cart.slice(action.payload);
      console.log(state);
      // orderPlusOne.push(action.payload);
      return Object.assign({}, state, { orders: orderPlusOne });
    case ALL_ORDERS + "_FULFILLED":
      return Object.assign({}, state, { orders: action.payload });
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isAuthed: false
      };
    default:
      return state;
  }
}
