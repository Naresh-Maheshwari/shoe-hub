import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCookies } from "react-cookie";

const COOKIE_NAME = "shopping-cart";

const defaultCookieOptions = {
  path: "/",
  maxAge: 2592000,
};

type CartContextType = {
  addItemToCart: (productId: number) => void;
  cartItems: Set<number>;
  removeItemFromCart: (productId: number) => void;
  isSidebarOpen: boolean;
  toggleSideBar: () => void;
  afterOrderPlaced: () => void;
};

const defaultFunction = () => null;

const DEFAULT_VALUE: CartContextType = {
  addItemToCart: defaultFunction,
  cartItems: new Set<number>(),
  removeItemFromCart: defaultFunction,
  isSidebarOpen: false,
  toggleSideBar: defaultFunction,
  afterOrderPlaced: defaultFunction,
};

const cartContext = createContext(DEFAULT_VALUE);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // hook to manage cookie
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);
  // state to manage items in cart
  const [cartItems, setCartItems] = useState<Set<number>>(
    new Set<number>(cookie[COOKIE_NAME])
  );
  // state to open and close sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * effect to update shopping list cookies
   */
  useEffect(() => {
    setCookie(
      COOKIE_NAME,
      Array.from(cartItems?.values()),
      defaultCookieOptions
    );
  }, [cartItems, setCookie]);

  /**
   * method to add items into cart
   */
  const addItemToCart = useCallback(
    (productId: number) => {
      const _cartItems = new Set(cartItems);
      _cartItems.add(productId);
      setCartItems(_cartItems);
    },
    [cartItems]
  );

  /**
   * method to remove item from cart
   */
  const removeItemFromCart = useCallback(
    (productId: number) => {
      const _cartItems = new Set(cartItems);
      if (_cartItems.has(productId)) {
        _cartItems.delete(productId);
        setCartItems(_cartItems);
      }
    },
    [cartItems]
  );

  /**
   * method to open and close sidebar
   * TODO: will shift this to different place
   */
  const toggleSideBar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  /**
   * method to do cart blank after successful order placement
   */
  const afterOrderPlaced = useCallback(() => {
    setCookie(COOKIE_NAME, [], defaultCookieOptions);
    setCartItems(new Set<number>());
  }, [setCookie]);

  /**
   * context values
   */
  const value = useMemo(
    () => ({
      addItemToCart,
      cartItems,
      removeItemFromCart,
      isSidebarOpen,
      toggleSideBar,
      afterOrderPlaced,
    }),
    [
      addItemToCart,
      cartItems,
      removeItemFromCart,
      isSidebarOpen,
      toggleSideBar,
      afterOrderPlaced,
    ]
  );

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

const useCartContext = (): CartContextType => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error("Context must be used within provider");
  }
  return context;
};

export { useCartContext, CartProvider };
