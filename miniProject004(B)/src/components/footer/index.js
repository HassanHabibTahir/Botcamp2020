import React from "react";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { environment } from "../../core/environment"
function Index() {
  const { getContactBalance, userWalletAddress, getUserDividend } = useSelector(state => state);
  return (
    <div>
      <div class='footer' id='contacts'>
        <div class='container'>
          <div class='first d-flex justify-content-between align-items-center'>
            <div class='logo'>
              <img src={logo} width='200' />
            </div>
            <div class='smart'>
              Smart-Contract Address:<span>{environment.address}</span>
            </div>
          </div>

          <div class='two d-flex justify-content-between '>
            <div class='cc'>© 2020 Tron Dynasty.</div>

            <div class='chats'>
              <div class='chat support'>
                <a href='https://t.me/CRYPTOBANK' target='_blank'></a> Official News Channel<span>CRYPTOBANK_Announcements</span>
              </div>

              <div class='chat en'>
                <a href='https://t.me/CRYPTOBANK' target='_blank'></a> English Telegram Group<span>CRYPTOBANK</span>
              </div>
              <div class='chat ru'>
                <a href='https://t.me/CRYPTOBANK' target='_blank'></a> Russian Telegram Group<span>CRYPTOBANK_Ru</span>
              </div>
              <div class='chat ch'>
                <a href='https://t.me/CRYPTOBANK' target='_blank'></a> Chinese Telegram Group<span>CRYPTOBANK_Ch</span>
              </div>
              <div class='chat ir'>
                <a href='https://t.me/CRYPTOBANK' target='_blank'></a> Iran Telegram Group<span>CRYPTOBANK_Ir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
