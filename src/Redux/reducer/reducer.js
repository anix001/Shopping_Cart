import * as actionTypes from './actionTypes'

const initial_state ={
    products : [
        {
            id: 1,
            title: "Cube",
            description:
              "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image:
              "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          },
          {
            id: 2,
            title: "Large Coffee Cup",
            description:
              "Get a big cup of coffee every morning before the day starts",
            price: 20.0,
            image:
              "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          },
          {
            id: 3,
            title: "Books",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 150.0,
            image:
              "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: 4,
            title: "Clock",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 120.0,
            image:
              "https://i.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs",
          },
          {
            id: 5,
            title: "Laptop",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 300.0,
            image:
              "https://i.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8",
          },
          {
            id: 6,
            title: "Camera",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 170.0,
            image:
              "https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
          },
          {
            id: 7,
            title: "Tea kettle",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 200.0,
            image:
              "https://i.picsum.photos/id/225/1500/979.jpg?hmac=jvGoek9ng_Y0GaBbzxN0KJhHaiPtk1VfRcukK8R8FxQ",
          },
          {
            id: 8,
            title: "Piano",
            description:
              "These books will keep you busy all throughout the entire lockdown",
            price: 600.0,
            image:
              "https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E",
          },
    ], //{id, title, desc, price, img}
    cart : [], //{id, title, desc, price, img, qty}
    // currentItem : null,
}

const productReducer = (state = initial_state, action) =>{
  switch(action.type){
      case actionTypes.ADD_TO_CART:
          // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
          return {
            ...state,
            cart: inCart
              ? state.cart.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.cart, { ...item, qty: 1 }],
          };
      case actionTypes.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
      case actionTypes.ADJUST_QUANTITY:
          return {};
    //   case actionTypes.LOAD_CURRENT_ITEM:
    //       return {};
      default:
          return state;
  }
}

export default productReducer;