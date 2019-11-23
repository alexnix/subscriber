import React from "react";
import BanckButton from "./BankButton";

export default class BCRButton extends React.Component {
  render() {
    return (
      <BanckButton
        name="BCR"
        logo="https://media.glassdoor.com/sqll/39568/bcr-squarelogo.png"
        url="https://m.24banking.ro/https%3amobilebankingbcr.imcplus.net/casserver/login?service=https%3A%2F%2Fmobilebankingbcr.imcplus.net%2FsPortal%2FvalidLogin.jsp&layout=mobile&lang=ro&codPortal=SP&backToSportalUrl=&virtualUrl=&channel=MB&desk=24banking_en_0785&loginType=7&referer=m.24banking.ro&nblocale=ro&cookieEnabled=true&javaon=false&checked=true&status=3"
      />
    );
  }
}
