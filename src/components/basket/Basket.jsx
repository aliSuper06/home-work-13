import React from "react";
import { Modal } from "../../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import { useContext } from "react";
import { cartContext } from "../../store/cart-context";

const Basket = ({ onToggle }) => {
  const { items, amount } = useContext(cartContext);

  const amountPrice = amount + amount;
  console.log(items);
  return (
    <Modal onClose={onToggle}>
      <Content>
        {items.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                ></BasketItem>
              );
            })}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount onClose={onToggle} totalPrice={amountPrice} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;

export default Basket;
