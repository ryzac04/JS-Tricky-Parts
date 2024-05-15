
function createAccount(pin, amount = 0) {
    return {
        checkBalance: function (userPin) {
            if (userPin !== pin) {
                return "Invalid PIN."
            } else {
                return `$${amount}`
            }
        },
        deposit: function (userPin, deposit) {
            if (userPin !== pin) {
                return "Invalid PIN."
            } else {
                amount += deposit;
                return `Successfully deposited $${deposit}. Current balance: $${amount}.`;
            }
        },
        withdraw: function (userPin, withdrawal) {
            if (userPin !== pin) {
                return "Invalid PIN.";
            } else if (withdrawal > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            } else {
                amount -= withdrawal;
                return `Successfully withdrew $${withdrawal}. Current balance: $${amount}.`
            }
        },
        changePin: function (oldPin, newPin) {
            if (oldPin !== pin) {
                return "Invalid PIN.";
            } else {
                pin = newPin;
                return "PIN successfully changed!";
            }
        }
    };
}

module.exports = { createAccount };
