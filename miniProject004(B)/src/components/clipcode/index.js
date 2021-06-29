import React from "react";
import { openModal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

function Index() {
  const dispatch = useDispatch();

  return (
    <div>
      <div class='clipscode'>
        <div class='container '>
          <div class='code'>
            <div class='left'>
              <div class='title'>Audited by SmartAudit</div>
              <div class='sub'>
                SMART-CONTRACT INDEPENDENT
                <br />
                AUDITIONS AND REVIEWS
              </div>

              <div class='text'>
                Our platform is 100% made to serve investors. Our smart contract is built after careful study of pitfalls experienced by other smart
                contracts to ensure the longevity of our platform. As a user, you should not be worried about infiltration by whales who ruin the
                earning opportunities of new users. Tron Dynasty is a platform built for everyone to earn.
              </div>

              <div class='key'>
                <a href='/CRYPTOBANK_audit.pdf' target='_BLANK'>
                  Audit Review
                </a>
                <a onClick={() => dispatch(openModal("vv"))}>Code contract</a>
              </div>
            </div>

            <div class='right'>
              <div class='video'>
                <div class='cut'>
                  <div class='navs'>
                    <a class='btn prev'></a>
                    <a class='btn next'></a>
                  </div>

                  <div id='owl-demo1' class='owl-carousel33 owl-carousel owl-theme'>
                    <div class='item'>
                      <div class='logo lhh'>
                        Independent company:<span>SmartAudit</span>
                      </div>
                      <div class='u'>(Website: smartaudit.services)</div>

                      <div class='d-flex align-items-center justify-content-between'>
                        <div class='status'>
                          Audition status:<span>Successfully passed</span>
                        </div>
                        <div class='ch'>
                          <a href='https://CRYPTOBANK.com/CRYPTOBANK_audit.pdf'>Check</a>
                        </div>
                      </div>
                    </div>

                    <div class='item'>
                      <div class='logo2 lhh'>
                        Independent company:<span>Defi audit</span>
                      </div>
                      <div class='u'>(Website: defiaudits.io)</div>

                      <div class='d-flex align-items-center justify-content-between'>
                        <div class='status'>
                          Audition status:<span>Successfully passed</span>
                        </div>
                        <div class='ch'>
                          <a href='https://www.defiaudits.io/view-report/CRYPTOBANK-(Looks-Ok)' target='_blank'>
                            Check
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a onClick={() => dispatch(openModal("video"))} class='w'>
                  Watch audits
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
