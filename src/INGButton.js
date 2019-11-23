import React from "react";
import BanckButton from "./BankButton";

export default class INGButton extends React.Component {
  render() {
    return (
      <BanckButton
        name="ING"
        logo="https://cariera.ejobs.ro/wp-content/uploads/2015/09/ING-Logo.jpg"
        url="https://www.homebank.ro/hb/hb/#/login-b/"
      />
    );
  }
}
