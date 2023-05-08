import { createContext, useReducer } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
  amount: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const isExist = state.items.find(
        (item) => item.title === action.item.title
      );
      if (!isExist) {
        return {
          ...state,
          items: [...state.items, action.item],
          totalAmount: state.totalAmount + action.item.amount,
        };
      } else {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.item.id) {
            return {
              ...item,
              amount: item.amount + action.item.amount,
            };
          }
          return item;
        });

        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount + action.item.amount,
        };
      }
    case "ADD_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount++,
            };
          }
          return item;
        }),
      };
    case "MINUS_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount--,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    amount: 1,
    totalPrice: 0,
  });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const addQuantity = (id) => {
    console.log(id);
    dispatch({ type: "ADD_QUANTITY", payload: id });
  };

  const orderAmount = cartState.items.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const totalPrice = cartState.items.reduce(
    (prev, current) => prev + current.amount * current.price,
    0
  );

  console.log(totalPrice);

  const minusQuantity = (id) => {
    console.log(id);

    dispatch({ type: "MINUS_QUANTITY", payload: id });
  };

  const cartValue = {
    items: cartState.items,
    addItem,
    totalAmount: orderAmount,
    amount: cartState.amount,
    totalPrice: totalPrice,
    addQuantity,
    minusQuantity,
  };

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
