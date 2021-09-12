const account = new Map();
account.set(0, {
  balance: 30,
  firstname: "Phumipat",
  lastname: "Thirawat",
  owner: 0,
});
account.set(1, {
  balance: 40,
  firstname: "Blue",
  lastname: "Johnson",
  owner: 1,
});
account.set(2, {
  balance: 50,
  firstname: "Wave",
  lastname: "Taylor",
  owner: 2,
});
account.set(3, {
  balance: 60,
  firstname: "Niki",
  lastname: "Nachat",
  owner: 3,
});

accountinfo = (account_id) => {
  //Get
  let id = parseInt(account_id);
  if (account.has(id)) {
    return account.get(id);
  } else {
    return "Account Not Found!";
  }
};

addaccount = (balance, firstname, lastname, owner) => {
  //Post
  account.set(account.size + 1, {
    balance: balance,
    firstname: firstname,
    lastname: lastname,
    owner: owner,
  });
  return "Add Account Complete!";
};

module.exports = {
  accountinfo: accountinfo,
  addaccount: addaccount,
  account: account,
};
