import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/hompage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignup from "./pages/signInSignup/SignInAndSignup";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { Route, Switch, Redirect } from "react-router-dom";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./firebase/firebase";
import { setUser } from "./redux/user/action";

import { useSelector, useDispatch } from "react-redux";

// import Burger from "./components/burger/Burger";
// import ShopCollectionSelector from "./redux/shop/ShopCollectionSelector";
const App = () => {
  const [click, setClick] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(true);

  const state = useSelector((state) => state.userReducer);
  // const collection = useSelector((state) => state.shopReducer);

  const { currentUser } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userData) => {
      if (userData) {
        const ref = await createUserProfileDocument(userData);

        ref.onSnapshot((snapshot) => {
          dispatch(
            setUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setUser(null));
      }
    });

    // addCollectionAndDocuments(
    //   "collection",
    //   ShopCollectionSelector(collection.collection).map(({ title, items }) => ({
    //     title,
    //     items,
    //   }))
    // );

    setTimeout(() => {
      setLogoAnimation(false);
    }, 2000);
    return () => unSubscribeFromAuth();
  }, [dispatch]);

  return (
    <>
      <Header user={currentUser} click={click} setClick={setClick} />
      {click && <MobileMenu user={currentUser} click setClick={setClick} />}
      {!logoAnimation && (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignup />
            }
          />
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

export default App;
