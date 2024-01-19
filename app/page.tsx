"use client";

import CartContainer from "@/components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "@/components/Modal";

export default function HomePage() {
  const { cartItems, isLoading } = useSelector((state: any) => state.cart);
  const { isOpen } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]);

  useEffect(() => {
    //@ts-ignore
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <div className="w-screen">
      <h1 className="text-center">Loading...</h1>
    </div>
  }
  return (
    <main>
      {isOpen && <Modal />}
      <CartContainer />
    </main>
  );
}
