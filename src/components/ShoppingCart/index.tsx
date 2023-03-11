import React, {
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import Icon from "~/src/components/Icon";
import PayPalCheckoutButton from "~/src/components/PaypalButton";
import ShoppingItem from "~/src/components/ShoppingCart/ShoppingItem";
import { useCartContext } from "~/src/contexts/useCartContext";
import { ProductData, ShoeProduct } from "~/src/pages";

const ShoppingSidebar = (): ReactElement => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { cartItems, toggleSideBar, isSidebarOpen, afterOrderPlaced } =
    useCartContext();

  const { cartProducts, totalCartAmount } = useMemo(() => {
    let totalCartAmount = 0;
    const items: ShoeProduct[] = Array.from(cartItems.values()).reduce<
      ShoeProduct[]
    >((acc, v) => {
      const value = ProductData.filter(({ id }) => id === v)?.[0];
      if (value) {
        acc.push(value);
        totalCartAmount += value.itemPrice?.value || 0;
      }
      return acc;
    }, []);
    return {
      cartProducts: items,
      totalCartAmount,
    };
  }, [cartItems]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  /**
   * method will execute after successful payment approval
   */
  const onApprove = useCallback(() => {
    toggleSideBar();
    afterOrderPlaced();
    alert("your order is successfully placed. Thanks");
  }, [afterOrderPlaced, toggleSideBar]);

  return (
    <>
      {domLoaded && (
        <div>
          {/* cart icon */}
          <div className="flex flex-1 justify-end">
            <button onClick={toggleSideBar}>
              <Icon icon="shoppingCart" className="w-6 h-6" />
            </button>
          </div>
          {/* main sidebar container */}
          <div>
            <div
              className={`min-cart fixed left-full top-0 bottom-0 w-full max-w-md z-50 transition-all ${
                isSidebarOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="cart-container relative bg-white h-screen w-full">
                <div className="sidebar-header py-6 relative border-b border-solid border-b-lightGray">
                  <div className="flex justify-between">
                    <p className="flex flex-1 justify-center uppercase">
                      Shopping Cart
                    </p>
                    <button
                      onClick={toggleSideBar}
                      className="absolute right-0 flex self-end h-full top-0 items-center"
                    >
                      <Icon icon="close" className="fill-blackShade w-8 h-8" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  {/* shopping list items */}
                  {cartItems?.size === 0 && (
                    <div className="flex flex-col items-center">
                      <p className="mt-5">
                        You have no items in your shopping cart
                      </p>
                      <button
                        type="button"
                        className="transition max-w-xs mt-5
            border border-solid border-grayShade rounded text-blackShade bg-transparent w-full py-5 font-semibold
            capitalize
            hover:bg-blackShade hover:text-whiteShade flex justify-center"
                        onClick={toggleSideBar}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  )}
                  {/* rendering items */}
                  <ShoppingItem products={cartProducts} />
                </div>
                {/* checkout button */}
                {!!cartItems.size && (
                  <div className="p-5">
                    <PayPalCheckoutButton
                      amount={totalCartAmount}
                      onPaymentApprove={onApprove}
                      key={totalCartAmount}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* overlay for sidebar */}
            <span
              onClick={toggleSideBar}
              className={`fixed bg-black bg-opacity-10 inset-0 z-40 overflow-hidden ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            ></span>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingSidebar;
