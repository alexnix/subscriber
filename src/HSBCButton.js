import React from "react";
import BanckButton from "./BankButton";

export default class HSBCutton extends React.Component {
  render() {
    return (
      <BanckButton
        name="HSBC"
        logo="https://www.famouslogos.net/images/hsbc-logo.jpg"
        url="https://www.security.online-banking.ciiom.hsbc.com/gsa?idv_cmd=idv.SaaSSecurityCommand"
      />
    );
  }
}
