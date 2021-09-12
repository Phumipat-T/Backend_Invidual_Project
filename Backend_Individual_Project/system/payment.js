const account = require("./account");
const payment = new Map();
payment.set(0, { account: 0, price: "100", status: "Waiting For Payment..." });
payment.set(1, { account: 1, price: "200", status: "Waiting For Payment..." });
payment.set(2, { account: 2, price: "300", status: "Waiting For Payment..." });
payment.set(3, { account: 3, price: "400", status: "Waiting For Payment..." });

paymentaccount = (account_id) => {
  if (account.account.get(account_id.balace) < payment.get(account_id).price) {
    return "Not enough money!";
  } else {
    let old_account = account.account.get(account_id);
    let old_payment = payment.get(account_id);
    let balance =
      account.account.get(account_id).balance - payment.get(account_id).price;
    account.account.set(account_id, {
      balance: balance,
      firstname: old_account.firstname,
      lastname: old_account.lastname,
      owner: old_account.owner,
    });
    payment.set(account_id, {
      account: old_payment.account,
      price: old_payment.price,
      status: "Complete!",
    });
    return "Payment Complete";
  }
};

paymentstatus = (payment_id) => {
  if (payment.has(payment_id)) {
    return payment.get(payment_id).status;
  } else {
    return "Invalid";
  }
};

module.exports = {
  paymentaccount: paymentaccount,
  paymentstatus: paymentstatus,
};
