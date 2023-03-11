import { GetServerSideProps } from "next";
import React from "react";
import ShoeDescription from "~/src/components/ShoeProduct";
import { useCartContext } from "~/src/contexts/useCartContext";
import { ProductData, ShoeProduct } from "~/src/pages";

export interface ShoeProductProps {
  product: ShoeProduct;
}

const ShoeProduct = ({ product }: ShoeProductProps) => {
  const { addItemToCart } = useCartContext();
  return <ShoeDescription product={product} addToCartEvent={addItemToCart} />;
};

export default ShoeProduct;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const product = ProductData.filter((p) => p.id === Number(id))?.[0];

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: product,
    },
  };
};
