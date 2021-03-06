import Toast from 'react-bootstrap/Toast';

import coinvex from '../assets/coinvex.png';
import eth from '../assets/eth-home-icon.png';

function Price(props) { 
  let date2 = new Date("05/16/2021");
  let date3 = new Date("06/15/2021");
  let date4 = new Date("07/15/2021");
  let localDate = new Date(); 
  let price;

  if(localDate <= date2){
    price = "0,01";
  }
  else if(localDate <= date3){
    price = "0,02";
  }
  else if(localDate <= date4){
    price = "0,03";
  }
  else {
    price = "0,04";
  }
  return (
    <div className="d-none d-md-block" >
      <Toast style={{position: "absolute", botton: 0, right: 0, backgroundColor: "black", color: "#ffcc00", width: "250px"}}>
        <Toast.Body style={{backgroundColor: "#090909"}}>
          <h5 className="text-center"><strong>Cotação</strong></h5>   
          <p><img alt="ETH" src={eth} width="22" height="35" /> <strong> {props.ETHPrice} <small>USD</small></strong> </p>
          <p><img alt="COINVEX" src={coinvex} width="22" height="22" /> <strong> {props.tokenPrice} <small>ETH</small></strong></p> 
          <h6 className="text-center" style={{fontSize: "11px"}}> O preço de 1 <strong>COINVEX </strong> é <strong>US$ {price}</strong></h6> 
        </Toast.Body>    
      </Toast>
    </div>    
  );
}

export default Price;
