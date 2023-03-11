import Image from "next/image";
import React, { useCallback } from "react";
import Icon from "~/src/components/Icon";
import { useCartContext } from "~/src/contexts/useCartContext";
import { ShoeProduct } from "~/src/pages";

const ShoppingItem: React.FC<{ products: ShoeProduct[] }> = ({ products }) => {
  const { removeItemFromCart } = useCartContext();

  const removeProductFromCart = useCallback(
    (productId: number) => () => {
      removeItemFromCart(productId);
    },
    [removeItemFromCart]
  );

  return (
    <div className="mt-5 overflow-y-auto relative">
      {(products || []).map((value, index) => {
        const { name, price, id, image } = value || {};
        return (
          <div key={index} className="pb-4 pr-2 pt-4 pl-2">
            <div className="card flex">
              <div className="image-block mr-4">
                <div className="w-20 min-h-[5px] h-full relative">
                  <Image
                    fill
                    src={image}
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="product-description flex flex-1">
                <div>
                  <p className="heading">{name}</p>
                  <p className="price mt-1">{`Price: ${price}$`}</p>
                </div>
              </div>
              <div className="delete-block">
                <button onClick={removeProductFromCart(id)}>
                  <Icon icon="delete" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingItem;
