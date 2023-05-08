import React from "react";
import { Button } from "../../UI/Button";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg";
import { useContext } from "react";
import { cartContext } from "../../store/cart-context";

const BasketItem = ({ title, price, id, amount }) => {
  const { addQuantity, minusQuantity } = useContext(cartContext);
  const disabled = amount === 0;
  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InformationBlock>
          <p>${price}</p>
          <span>x {amount}</span>
        </InformationBlock>

        <ButtonBlock>
          <Button
            onClick={() => minusQuantity(id)}
            borderRadius="squared"
            variant="outlined"
            disabled={disabled}
            icon={<Minus />}
          ></Button>
          <Button
            onClick={() => addQuantity(id)}
            borderRadius="squared"
            variant="outlined"
            icon={<Plus />}
          ></Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 2px solid #d6d6d6;

  h4 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;

const InformationBlock = styled.article`
  display: flex;
  align-items: center;
  width: 155px;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
  }
`;
export default BasketItem;
