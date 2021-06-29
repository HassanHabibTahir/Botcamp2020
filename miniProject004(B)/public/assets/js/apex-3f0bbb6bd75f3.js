var contractAddress = "TWehXUMJfpLduYrsqdhhvnMQwBzHKPrmSv";
var referrerDefault = "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb";
var UserAddress = "";
var website = "https://tronapex.com/";
var reflist = [];
var reflvl1 = 0;
var reflvl2 = 0;
var reflvl3 = 0;
var reflvl4 = 0;
var abi = [{
        "constant": true,
        "inputs": [],
        "name": "TotalInvested",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "ReferralBonusRewards",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Locked",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "TotalInvestors",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "RefPoolTopAddr",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "HoldDay",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetTotalCommission",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "TotalDepositCount",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MinimumInvest",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetUserData",
        "outputs": [{
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetUserDividends",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "WithdrawCommissions",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "GetUserDepositInfo",
        "outputs": [{
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleOne",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "InvestorUpline",
            "type": "address"
        }],
        "name": "Invest",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "FinishRefPool",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "TotalWithdrawn",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MarketingFeeAddressPromo",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleTwo",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "WithdrawDividends",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleThreeMax",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ROICap",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "RefPoolBonus",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "GetUserCommission",
        "outputs": [{
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "RefPool",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ContractBonus",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "ReferralPoolPercents",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "RefPoolSum",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalCommissionsRule",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "ReferralCommissions",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "HoldBonusCap",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleThree",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetRefBonus",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "RefComDay",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "RefPoolTopValue",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetHoldBonus",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PercentDiv",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleTwoMax",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "RefPoolID",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ServiceFee",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetUserTotalDeposits",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MarketingFeeAddress",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "RefPoolGoal",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "Day",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "topRefPool",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "WithdrawalDividendsRuleOneMax",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "GetActiveBonus",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ServiceFeeAddress",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MarketingFee",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "GetContractBalance",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "ActiveClient",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MaxDepositLimit",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "name": "MarketingAddress",
                "type": "address"
            },
            {
                "name": "MarketingAddressPromo",
                "type": "address"
            },
            {
                "name": "ServiceAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "referral",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "level",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ReferralBonus",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "NewDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "place",
                "type": "uint256"
            }
        ],
        "name": "RefPoolPrize",
        "type": "event"
    }
];

function getFormattedDate(date) {
    let hour = ('0' + date.getUTCHours()).slice(-2);
    let minute = ('0' + date.getUTCMinutes()).slice(-2);
    let day = ('0' + date.getUTCDate()).slice(-2);
    let month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
    let year = date.getUTCFullYear();
    return hour + ':' + minute + ' ' + day + '.' + month + '.' + year
}

function getFormattedNumber(num) {
    var num = num + '';
    var value = Number(num);
    var res = num.split('.');
    if (res[0].length <= 2) {
        return value.toFixed(6)
    } else if (res[0].length == 3) {
        return value.toFixed(5)
    } else if (res[0].length == 4) {
        return value.toFixed(4)
    } else if (res[0].length == 5) {
        return value.toFixed(3)
    } else if (res[0].length == 6) {
        return value.toFixed(2)
    } else if (res[0].length == 7) {
        return value.toFixed(1)
    } else if (res[0].length >= 8) {
        return value.toFixed(0)
    }
}

function moneyFormat(yourNumber) {
    var n = yourNumber.toString().split(".");
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return n.join(".");
}
var NoWallet = 0;
$(function() {
    async function NoExtension() {
        NoWallet = 1;
        tronWebDefault = new TronWeb({
            fullHost: 'https://api.trongrid.io',
            privateKey: '431735e787763d10323d13bfe81c45d97cf914dc013a074104d8b8f71bc4f85c'
        })
        const tronGrid = new trongrid(tronWebDefault);
        let instance = await tronGrid.tronWeb.contract(abi, contractAddress);
        let Balance = await instance.GetContractBalance().call();
        Balance = tronGrid.tronWeb.toDecimal(Balance);
        let CurrentDaily = await instance.ContractBonus().call();
        CurrentDaily = tronGrid.tronWeb.toDecimal(CurrentDaily);
        let TotalInvestors = await instance.TotalInvestors().call(); //Active praticant bonus
        TotalInvestors = tronGrid.tronWeb.toDecimal(TotalInvestors);

        ActivePraticantBonus = Math.floor((TotalInvestors * 400 / 10000)) / 100

        let TotalInvested = await instance.TotalInvested().call();
        TotalInvested = tronGrid.tronWeb.toDecimal(TotalInvested);

        $('.js-contract-balance').html(moneyFormat((Balance / 1000000).toFixed(0)) + " TRX");
        $('.js-contract-invested').html($('.js-contract-invested').attr("data-text") + ": " + TotalInvestors);
        $('.js-current-daily').html((CurrentDaily / 100) + (ActivePraticantBonus) + "%");
        $('.js-foward-amount').attr("data-contractBonus", (CurrentDaily / 100) + ActivePraticantBonus);
        $('.js-refpool-top').html('');
        for (var i = 0; i <= 9; i++) {
            await sleep(100);
            console.log(i + ' Check');
            await sleep(100);
            let addr = await instance.RefPoolTopAddr(i).call();
            await sleep(100);
            let value = await instance.RefPoolTopValue(i).call();
            var RPaddr = tronGrid.tronWeb.address.fromHex(addr);
            RPaddr = RPaddr.replace(RPaddr.substring(4, 11), "*******");
            var RPtotal = (tronGrid.tronWeb.toDecimal(value) / 1000000).toFixed(2);
            var RPplace = i + 1;
            if (RPaddr != referrerDefault && RPaddr != "") {
                var template = $("#RefPollTemplate").clone();
                template.removeAttr('id');
                template.find('.js-addr').html(RPaddr);
                template.find('.js-place').html(RPplace);
                template.find('.js-amount').html(RPtotal + " TRX");
                template.show();
                $('.js-refpool-top').append(template);
            }

            if (i == 0) {
                console.log('Last Check');
                await sleep(100);
                let PoolSize = await instance.RefPool().call();
                await sleep(100);
                let PoolCycle = await instance.RefPoolID().call();
                $('.js-pool-size').html((tronGrid.tronWeb.toDecimal(PoolSize) / 1000000).toFixed(2) + " TRX");
                $('.js-cycle').html((tronGrid.tronWeb.toDecimal(PoolCycle)) + " " + $('.js-cycle').attr("data-text"));
                $('.js-pool-width').attr("style", "width:" + ((tronGrid.tronWeb.toDecimal(PoolSize) / 1000000) * 100 / 100000).toFixed(2) + "%");
            }
            if (i == 9) {
                $('.owl-carousel1').owlCarousel({
                    loop: true,
                    margin: 16,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });

                $(".navs .prev").click(function() {
                    $('.owl-prev').click();
                });

                $(".navs .next").click(function() {
                    $('.owl-next').click();
                });
            }
        }
    }

    var ClientUpdate = setInterval(async () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            clearInterval(ClientUpdate);
            UserAddress = window.tronWeb.defaultAddress.base58;
            showMessage('success', "Wallet successfully connected");
            $('.js-user-address').html(UserAddress);
            $('.js-logged-in').slideDown(0);
            $('.js-logged-out').slideUp(0);
            setTimeout(function() {
                var accountInterval = setInterval(async () => {
                    if (window.tronWeb.defaultAddress.base58 !== UserAddress) {
                        UserAddress = window.tronWeb.defaultAddress.base58;
                        $('.js-user-address').html(UserAddress);
                        if (UserAddress == "") {
                            $('.js-logged-in').slideUp(0);
                            $('.js-logged-out').slideDown(0);
                        } else {
                            $('.js-logged-out').slideUp(0);
                            $('.js-logged-in').slideDown(0);
                        }
                        var reflist = [];
                        var reflvl1 = 0;
                        var reflvl2 = 0;
                        var reflvl3 = 0;
                        var reflvl4 = 0;
                        var count = 0;
                        var earned = 0;
                        var invested = 0;
                        SyncData();
                    }
                }, 100);
            }, 5000)
            SyncData();
        } else {
            if (NoWallet == 0) {
                await NoExtension();
            }
        }
    }, 10);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function referralPool() {
        let instance = await tronWeb.contract(abi, contractAddress);
        $('.js-refpool-top').html('');
        for (var i = 0; i <= 9; i++) {
            await sleep(100);
            console.log(i + ' Check');
            await sleep(100);
            let addr = await instance.RefPoolTopAddr(i).call();
            await sleep(100);
            let value = await instance.RefPoolTopValue(i).call();
            var RPaddr = tronWeb.address.fromHex(addr);
            RPaddr = RPaddr.replace(RPaddr.substring(4, 11), "*******");
            var RPtotal = (tronWeb.toDecimal(value) / 1000000).toFixed(2);
            var RPplace = i + 1;
            if (RPaddr != referrerDefault && RPaddr != "") {
                var template = $("#RefPollTemplate").clone();
                template.removeAttr('id');
                template.find('.js-addr').html(RPaddr);
                template.find('.js-place').html(RPplace);
                template.find('.js-amount').html(RPtotal + " TRX");
                template.show();
                $('.js-refpool-top').append(template);
            }

            if (i == 0) {
                console.log('Last Check');
                await sleep(100);
                let PoolSize = await instance.RefPool().call();
                await sleep(100);
                let PoolCycle = await instance.RefPoolID().call();
                $('.js-pool-size').html((tronWeb.toDecimal(PoolSize) / 1000000).toFixed(2) + " TRX");
                $('.js-cycle').html((tronWeb.toDecimal(PoolCycle)) + " " + $('.js-cycle').attr("data-text"));
                $('.js-pool-width').attr("style", "width:" + ((tronWeb.toDecimal(PoolSize) / 1000000) * 100 / 100000).toFixed(2) + "%");
            }
            if (i == 9) {
                $('.owl-carousel1').owlCarousel({
                    loop: true,
                    margin: 16,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });

                $(".navs .prev").click(function() {
                    $('.owl-prev').click();
                });

                $(".navs .next").click(function() {
                    $('.owl-next').click();
                });
            }
        }
    }

    async function contractData() {
        let instance = await tronWeb.contract(abi, contractAddress);
        let Balance = await instance.GetContractBalance().call();
        Balance = tronWeb.toDecimal(Balance);
        let CurrentDaily = await instance.ContractBonus().call();
        CurrentDaily = tronWeb.toDecimal(CurrentDaily);
        let TotalInvested = await instance.TotalInvested().call();
        TotalInvested = tronWeb.toDecimal(TotalInvested);

        let TotalInvestors = await instance.TotalInvestors().call(); //Active praticant bonus
        TotalInvestors = tronWeb.toDecimal(TotalInvestors);
        ActivePraticantBonus = (TotalInvestors * 400 / 10000).toFixed(2);
        if (UserAddress != "") { // If logged in get active bonus that user have
            let GetActiveBonus = await instance.GetActiveBonus(UserAddress).call();
            ActivePraticantBonus = tronWeb.toDecimal(GetActiveBonus);
        }
        //if(GetActiveBonus
        $('.js-contract-balance').html(moneyFormat((Balance / 1000000).toFixed(0)) + " TRX");
        $('.js-contract-invested').html($('.js-contract-invested').attr("data-text") + ": " + TotalInvestors);
        $('.js-current-daily').html(((CurrentDaily / 100) + (ActivePraticantBonus / 100)).toFixed(2) + "%");
        $('.js-foward-amount').attr("data-contractBonus", (CurrentDaily / 100) + (ActivePraticantBonus * 1));
    }

    async function userData() {
        $('.js-user-reflink').html(website + "ref/" + UserAddress);
        $('.js-user-reflink-copy').attr("data-clipboard-text", website + "ref/" + UserAddress);
        let instance = await tronWeb.contract(abi, contractAddress);
        let user = await instance.GetUserData(UserAddress).call();
        //user info
        userUpline = tronWeb.address.fromHex(user[0]);
        if (userUpline == referrerDefault) {
            $('.js-user-upline').html("No upline");
        } else {
            $('.js-user-upline').html(userUpline);
        }
        userInvested = tronWeb.toDecimal(user[1]) / 1000000;
        userWithdrawn = tronWeb.toDecimal(user[2]) / 1000000;
        $('.js-user-invested').html(moneyFormat((userInvested).toFixed(2)) + " TRX");
        await sleep(500);
        let Dividends = await instance.GetUserDividends(UserAddress).call();
        DividendsAvailable = tronWeb.toDecimal(Dividends) / 1000000;
        $('.js-user-balance').html(DividendsAvailable + " TRX");
        if (userInvested < 250000) {
            WithdrawDivLimit = "25,000";
        } else if (userInvested > 250000 && userInvested < 500000) {
            WithdrawDivLimit = "50,000";
        } else {
            WithdrawDivLimit = "100,000";
        }
        $('.js-withdraw-div-button').attr("onclick", "WithdrawalPopup('div','" + DividendsAvailable + "','" + WithdrawDivLimit + "')");
        await sleep(500);
        let Deposits = await instance.GetUserTotalDeposits(UserAddress).call();
        $('.js-user-deposits').html(tronWeb.toDecimal(Deposits));
        $('.js-user-earned').html((userWithdrawn + DividendsAvailable).toFixed(6) + " TRX");
        $('.js-user-withdrawn').html((userWithdrawn * 1).toFixed(6) + " TRX");
        //user info bonuses
        await sleep(500);
        let CurrentDaily = await instance.ContractBonus().call();
        CurrentDaily = tronWeb.toDecimal(CurrentDaily);
        await sleep(500);
        let ActivePraticantBonus = await instance.GetActiveBonus(UserAddress).call(); //Active praticant bonus
        ActivePraticantBonus = tronWeb.toDecimal(ActivePraticantBonus);
        $('.js-user-contractbonus').html((ActivePraticantBonus / 100).toFixed(2) + "%");
        await sleep(500);
        let Hold = await instance.GetHoldBonus(UserAddress).call();
        HoldBonus = tronWeb.toDecimal(Hold);
        $('.js-user-holdbonus').html((HoldBonus / 100).toFixed(2) + "%");
        $('.js-foward-amount').attr("data-holdBonus", (HoldBonus / 100));
        await sleep(500);
        let RefBonus = await instance.GetRefBonus(UserAddress).call();
        RefBonus = tronWeb.toDecimal(RefBonus);
        $('.js-foward-amount').attr("data-refBonus", (RefBonus / 100));
        $('.js-user-refbonus').html((RefBonus / 100).toFixed(2) + "%");
        $('.js-user-bonus').html(((RefBonus / 100) + (HoldBonus / 100) + (CurrentDaily / 100) + (ActivePraticantBonus / 100)).toFixed(2) + "%");
        //commissions
        userCommissions = tronWeb.toDecimal(user[3]) / 1000000;
        userLVL1 = tronWeb.toDecimal(user[4]) / 1000000;

        if (userCommissions != 0) {
            $('.js-lock-withdraw-button').slideUp(100);
            $('.js-unlock-withdraw-button').slideDown(100);
        }
        userAvailable = tronWeb.toDecimal(user[5]) / 1000000;
        $('.js-withdraw-com-button').attr("onclick", "WithdrawalPopup('com','" + (userAvailable * 1).toFixed(2) + "','50,000')");
        $('.js-user-available-comm').html((userAvailable * 1).toFixed(2) + " TRX");
        $('.js-user-earned-comm').html((userCommissions * 1).toFixed(2) + " TRX");
        $('.js-user-withdrawn-comm').html((userCommissions - userAvailable).toFixed(2) + " TRX");
        $('.js-lvl1-com').html((userLVL1 * 1000 / 50).toFixed(2) + " TRX");
        $('.js-personal-refbonus-percent').attr("style", "width:" + ((userLVL1 * 1000 / 50) * 100 / 50000).toFixed(2) + "%");
    }

    async function userDeposits() {
        let instance = await tronWeb.contract(abi, contractAddress);
        let Deposits = await instance.GetUserTotalDeposits(UserAddress).call();
        Deposits = tronWeb.toDecimal(Deposits);
        if (Deposits > 0) {
            $('.js-deposit-list').html("");
            $('.js-no-deps').slideUp();
            for (var i = 0; i <= Deposits - 1; i++) {
                await sleep(500);
                let result = await instance.GetUserDepositInfo(UserAddress, i).call();
                var template = $("#depositTemplate").clone();
                template.removeAttr('id');
                template.find('.js-deposit-date').html(getFormattedDate(new Date(tronWeb.toDecimal(result[2]) * 1000)));
                template.find('.js-deposit-invested').html((tronWeb.toDecimal(result[0]) / 1000000).toFixed(2) + " TRX");
                template.find('.js-deposit-withdrawn').html((tronWeb.toDecimal(result[1]) / 1000000).toFixed(2) + " TRX");
                template.find('.js-deposit-left').html(((tronWeb.toDecimal(result[0]) / 1000000) * 3.2) - (tronWeb.toDecimal(result[1]) / 1000000).toFixed(2) + " TRX");
                template.show();
                $('.js-deposit-list').append(template);
            }
        }
    }

    async function GetTotalCommission() {
        var Id = $('.js-referral-index').val();
        let instance = await tronWeb.contract(abi, contractAddress);
        let res = await instance.GetTotalCommission(UserAddress).call();
        for (var i = 0; i <= (tronWeb.toDecimal(res) - 1); i++) {
            reflvl1++;
            await sleep(500);
            let result = await instance.GetUserCommission(UserAddress, i).call();
            const addresses = reflist.map(el => el.address);
            if (addresses.includes(tronWeb.address.fromHex(result[0]))) {
                reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].earned += tronWeb.toDecimal(result[1]);
                reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].invested += tronWeb.toDecimal(result[2]);
            } else {
                reflist.push({
                    address: tronWeb.address.fromHex(result[0]),
                    earned: tronWeb.toDecimal(result[1]),
                    invested: tronWeb.toDecimal(result[2]),
                    level: tronWeb.toDecimal(result[3]),
                    time: tronWeb.toDecimal(result[4])
                });
            }
        }
        for (var k = 0; k < reflist.length; k++) {
            if (reflist[k].level == 0) {
                reflvl2++;
                let res = await instance.GetTotalCommission(reflist[k].address).call();
                for (var i = 0; i <= (tronWeb.toDecimal(res) - 1); i++) {
                    await sleep(500);
                    let result = await instance.GetUserCommission(reflist[k].address, i).call();
                    const addresses = reflist.map(el => el.address);
                    if (addresses.includes(tronWeb.address.fromHex(result[0]))) {
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].earned += tronWeb.toDecimal(result[1]);
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].invested += tronWeb.toDecimal(result[2]);
                    } else {
                        reflist.push({
                            address: tronWeb.address.fromHex(result[0]),
                            earned: (tronWeb.toDecimal(result[2]) * 0.02),
                            invested: tronWeb.toDecimal(result[2]),
                            level: (reflist[k].level + 1),
                            time: tronWeb.toDecimal(result[4])
                        });
                    }
                }
            }
        }
        for (var k = 0; k < reflist.length; k++) {
            if (reflist[k].level == 1) {
                reflvl3++;
                let res = await instance.GetTotalCommission(reflist[k].address).call();
                for (var i = 0; i <= (tronWeb.toDecimal(res) - 1); i++) {
                    await sleep(500);
                    let result = await instance.GetUserCommission(reflist[k].address, i).call();
                    const addresses = reflist.map(el => el.address);
                    if (addresses.includes(tronWeb.address.fromHex(result[0]))) {
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].earned += tronWeb.toDecimal(result[1]);
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].invested += tronWeb.toDecimal(result[2]);
                    } else {
                        reflist.push({
                            address: tronWeb.address.fromHex(result[0]),
                            earned: (tronWeb.toDecimal(result[2]) * 0.005),
                            invested: tronWeb.toDecimal(result[2]),
                            level: (reflist[k].level + 1),
                            time: tronWeb.toDecimal(result[4])
                        });
                    }
                }
            }
        }
        for (var k = 0; k < reflist.length; k++) {
            if (reflist[k].level == 2) {
                let res = await instance.GetTotalCommission(reflist[k].address).call();
                for (var i = 0; i <= (tronWeb.toDecimal(res) - 1); i++) {
                    await sleep(500);
                    let result = await instance.GetUserCommission(reflist[k].address, i).call();
                    const addresses = reflist.map(el => el.address);
                    if (addresses.includes(tronWeb.address.fromHex(result[0]))) {
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].earned += tronWeb.toDecimal(result[1]);
                        reflist[addresses.indexOf(tronWeb.address.fromHex(result[0]))].invested += tronWeb.toDecimal(result[2]);
                    } else {
                        reflist.push({
                            address: tronWeb.address.fromHex(result[0]),
                            earned: (tronWeb.toDecimal(result[2]) * 0.005),
                            invested: tronWeb.toDecimal(result[2]),
                            level: (reflist[k].level + 1),
                            time: tronWeb.toDecimal(result[4])
                        });
                        reflvl4++;
                    }
                }
            }
        }
        $('.js-l1rc').html(reflvl1);
        $('.js-l2rc').html(reflvl2);
        $('.js-l3rc').html(reflvl3);
        $('.js-l4rc').html(reflvl4);
    }

    async function Invest() {
        var amount = parseFloat($('.js-deposit-amount').val().replace(',', '.'));
        if (!window.tronWeb) {
            showMessage('error', 'You need connect with your wallet to make deposit');
        } else if (!amount) {
            showMessage('error', 'Invalid deposit amount');
        } else if (amount < 100) {
            showMessage('error', 'Minimum investment is 100 TRX');
        } else if (amount > 1000000) {
            showMessage('error', 'Maximum investment is 1,000,000 TRX');
        } else {
            amount = Math.floor(amount * 1000000);
            if (!tronWeb.isAddress(userReferrer)) {
                userReferrer = referrerDefault
            }
            try {
                let instance = await tronWeb.contract(abi, contractAddress);
                let res = await instance.Invest(userReferrer).send({
                    callValue: amount
                });
                $('.js-deposit-invested').html((amount / 1000000).toFixed(2) + " TRX");
                popup('.success');
                setTimeout(function() {
                    SyncData();
                }, 2000)
            } catch (error) {
                if (error == "Invalid issuer address provided") {
                    error = "Please connect your wallet";
                }
                if (error.message == "contract validate error : Validate InternalTransfer error, balance is not sufficient.") {
                    error = "insufficient balance for this deposit";
                }
                showMessage('error', error);
            }
        }
    }

    async function WithdrawDividends() {
        try {
            let instance = await tronWeb.contract(abi, contractAddress);
            let user = await instance.GetUserData(UserAddress).call();
            var LastWithdrawDiv = ((user[7] * 1000) + (24 * 60 * 60 * 1000));
            var NowTime = $.now();
            if (LastWithdrawDiv > $.now()) {
                var msec = LastWithdrawDiv - $.now();
                var mins = Math.floor(msec / 60000);
                var hrs = Math.floor(mins / 60);
                var days = Math.floor(hrs / 24);
                hrs = hrs % 24;
                mins = mins % 60;
                days = days % 365;
                showMessage('error', "Next withdrawal available in " + days + " days " + hrs + " hours and " + mins + " minutes");
            } else {
                let res = await instance.WithdrawDividends().send({
                    callValue: 0
                });
                setTimeout(function() {
                    SyncData();
                    popup('.account');
                }, 500)
            }
        } catch (error) {
            console.log(error);
            showMessage('error', error);
        }
    }

    async function WithdrawCommissions() {
        try {
            let instance = await tronWeb.contract(abi, contractAddress);
            let user = await instance.GetUserData(UserAddress).call();
            var LastWithdrawCom = ((user[8] * 1000) + (48 * 60 * 60 * 1000));
            var NowTime = $.now();
            if (LastWithdrawCom > $.now()) {
                var msec = LastWithdrawCom - $.now();
                var mins = Math.floor(msec / 60000);
                var hrs = Math.floor(mins / 60);
                var days = Math.floor(hrs / 24);
                hrs = hrs % 24;
                mins = mins % 60;
                days = days % 365;
                showMessage('error', "Next withdrawal available in " + days + " days " + hrs + " hours and " + mins + " minutes");
            } else {
                console.log(getFormattedDate(new Date($.now())));
                let res = await instance.WithdrawCommissions().send({
                    callValue: 0
                });
                setTimeout(function() {
                    SyncData();
                    popup('.account');
                }, 500);
            }
        } catch (error) {
            showMessage('error', error);
        }
    }

    async function SyncData() {
        await contractData();
        await sleep(300);
        await userData();
        await sleep(500);
        await GetTotalCommission();
        await sleep(500);
        await userDeposits();
        await sleep(500);
        await referralPool();
    }

    $(".js-invest-button").click(function(e) {
        e.preventDefault();
        Invest();
        return false
    });

    $(".js-withdrawal-button").click(function(e) {
        e.preventDefault();
        if ($(".js-withdrawal-button").attr("data-type") == "com") {
            WithdrawCommissions();
        } else {
            WithdrawDividends();
        }
        return false
    });
});

function showRefs(lvl) {
    $('.js-referral-list').html('');
    var count = 0;
    var earned = 0;
    var invested = 0;
    for (var k = 0; k < reflist.length; k++) {
        if (reflist[k].level + 1 == lvl) {
            var template = $("#RefTemplate").clone();
            template.removeAttr('id');
            template.find('.u').html(reflist[k].address + "<span>" + getFormattedDate(new Date(reflist[k].time * 1000)) + "</span>");
            template.find('.js-r-com').html((reflist[k].earned / 1000000) + " TRX");
            template.find('.js-r-dep').html((reflist[k].invested / 1000000) + " TRX");
            template.attr("style", "display:flex");
            count++;
            $('.js-referral-list').prepend(template);
            invested += reflist[k].invested;
            earned += reflist[k].earned;
        }
    }
    if (count > 0) {
        $('.js-no-refs').slideUp();
    }
    $('.js-totalRefs').html(count);
    $('.js-totalInv').html((invested / 1000000).toFixed(2) + "TRX");
    $('.js-totalCom').html((earned / 1000000).toFixed(2) + "TRX");
    $('.js-level').html($('.js-level').html().replace("LVL", lvl));
    popup('.rlist');
}

$(".js-bannerSwap").click(function() {
    $('.js-bannerSwap').removeClass('active');
    $(this).addClass('active');
    $(".banner").slideDown();
    var size = $(this).attr("data-size");
    var splitSize = size.split("x");
    var code = "<a href='" + website + "" + UserAddress + "'><img src='" + website + "banners/Apex_" + size + ".gif' width='" + splitSize[0] + "px' height='" + splitSize[1] + "px' /></a>";
    var preview = website + "banners/Apex_" + size + ".gif";
    $("#banner").val(code);
    $(".js-banner-preview").attr("href", preview);
    $(".js-banner-name").html(size);
});

function promote() {
    if (UserAddress && UserAddress != "") {
        popup('.account');
        tabs(4);
    } else {
        showMessage('error', 'You need connect your wallet to view promo matreals');
    }
}

function checkLVL() {
    if (UserAddress && UserAddress != "") {
        popup('.account');
        tabs(3);
    } else {
        showMessage('error', 'You need connect your wallet to view referral bonus');
    }
}