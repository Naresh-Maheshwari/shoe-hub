import React, { useCallback } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalCheckoutButtonProps {
  amount: number;
  onPaymentApprove: (orderId: string) => void;
}

const PayPalCheckoutButton: React.FC<PayPalCheckoutButtonProps> = ({
  amount,
  onPaymentApprove,
}) => {
  /**
   * method will execute after successful payment
   */
  const handleApprove = useCallback(
    (orderId: string) => {
      /**
       * if response is success
       * we will make an api call to store data on database
       */
      onPaymentApprove(orderId);
    },
    [onPaymentApprove]
  );

  return (
    <PayPalButtons
      style={{ color: "white" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "description",
              amount: {
                value: amount.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        handleApprove(data.orderID);
      }}
      onError={(err) => {}}
    />
  );
};

export default PayPalCheckoutButton;
