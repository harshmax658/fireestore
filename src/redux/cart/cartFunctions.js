export const addItemToCart = (cartItem, newcartItem) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === newcartItem.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === newcartItem.id
        ? { ...newcartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItem, { ...newcartItem, quantity: 1 }];
};
export const removeCartItem = (cartItem, deleteRequestId) => {
  const newArray = cartItem.filter(
    (cartItem) => cartItem.id !== deleteRequestId
  );
  return newArray;
};

export const decreaseQuantity = (cartItem, decQId) => {
  const existingCartItem = cartItem.find((data) => data.id === decQId);

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== decQId);
  }

  return cartItem.map((item) =>
    item.id === decQId ? { ...item, quantity: item.quantity - 1 } : item
  );
};
