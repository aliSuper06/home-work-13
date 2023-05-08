import React, { useContext } from "react";
import { Button } from "../../UI/Button";
import styled from "styled-components";
import { cartContext } from "../../store/cart-context";

const TotalAmount = ({ onClose }) => {
  const { totalPrice } = useContext(cartContext);

  const isOrderButton =
    totalPrice > 0 ? <Button variant="contained">Order</Button> : null;
  return (
    <Container>
      <TextContaner>
        <h3>Total Price</h3>
        <h4>${totalPrice}</h4>
      </TextContaner>

      <ButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {isOrderButton}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 30px;
`;

const TextContaner = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin: 0;
  }

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;

export default TotalAmount;
