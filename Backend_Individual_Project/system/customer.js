const customer = new Map();
customer.set(0, { firstname: "Phumipat", lastname: "Thirawat", account: 0 });
customer.set(1, { firstname: "Blue", lastname: "Johnson", account: 1 });
customer.set(2, { firstname: "Wave", lastname: "Taylor", account: 2 });
customer.set(3, { firstname: "Niki", lastname: "Nachat", account: 3 });

customerinfo = (customer_id) => {
  //Get
  let id = parseInt(customer_id);
  if (customer.has(id)) {
    return customer.get(id);
  } else {
    return "Customer Not Found";
  }
};

customerslist = () => {
  //Get
  let message = "";
  customer.forEach((value, key) => {
    message += ` Customer ${key}, Name: ${value.firstname} ${value.lastname} Account: ${value.account} `;
  });
  return message;
};

addcustomer = (firstname, lastname, account) => {
  //Post
  customer.set(customer.size + 1, {
    firstname: firstname,
    lastname: lastname,
    account: account,
  });
  console.log(customer);
  return "Add Customer Complete!";
};

module.exports = {
  customerinfo: customerinfo,
  customerslist: customerslist,
  addcustomer: addcustomer,
  customer: customer,
};
