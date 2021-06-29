import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/actions";

function Index() {
  const dispatch = useDispatch();
  return (
    <div className='bottom-btns'>
      <Button variant='contained' onClick={() => dispatch(openModal("makeDeposit"))} style={{ backgroundColor: "#096573", color: "white" }}>
        Make Deposit
      </Button>
      <Button variant='contained' onClick={() => dispatch(openModal("account"))} style={{ backgroundColor: "#096573", color: "white" }}>
        Wallet Statistics
      </Button>
    </div>
  );
}

export default Index;
