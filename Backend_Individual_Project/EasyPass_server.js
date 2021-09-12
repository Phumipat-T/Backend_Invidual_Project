var http = require("http");
var url = require("url");

const {
  customerinfo,
  customerslist,
  addcustomer,
} = require("./system/customer");

const { paymentaccount, paymentstatus } = require("./system/payment");

http
  .createServer(function (req, res) {
    var request_path = url.parse(req.url, true);
    var message = "";
    var data;
    var status = 200;
    var regid = /\d{1,2}/;
    var regstring = /^[a-zA-z]+$/;

    switch (request_path.pathname) {
      //show customer
      case "/customer_info":
        try {
          let customer_id = request_path.query.customer_id;

          if (regid.test(customer_id)) {
            data = customerinfo(customer_id);
          } else {
            message = "Incorrect Input";
            status = 422;
          }
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;

      //show account
      case "/account_info":
        try {
          let account_id = request_path.query.account_id;

          if (regid.test(account_id)) {
            data = accountinfo(account_id);
          } else {
            message = "Incorrect!";
            status = 422;
          }
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;

      //show all customers
      case "/customer_list":
        try {
          data = customerslist();
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;

      //add customer
      case "/add_customer":
        try {
          let firstname = request_path.query.firstname;
          let lastname = request_path.query.lastname;
          let account = request_path.query.account;

          if (
            regstring.test(firstname) &&
            regstring.test(lastname) &&
            regid.test(account)
          ) {
            data = addcustomer(firstname, lastname, account);
          } else {
            message = "Incorrect!";
            status = 422;
          }
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;

      //check status
      case "/payment_status":
        try {
          let payment_id = request_path.query.payment_id;

          if (regid.test(payment_id)) {
            data = paymentstatus(payment_id);
          } else {
            message = "Incorrect!";
            status = 422;
          }
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;

      //pay for owner
      case "/payment_account":
        try {
          let account_id = request_path.query.account_id;

          if (regid.test(account_id)) {
            data = paymentaccount(account_id);
          } else {
            message = "Incorrect!";
            status = 422;
          }
        } catch (err) {
          message += err;
          status = 204;
          console.log(err);
        }
        break;
    }

    let response_object = {
      statusCode: status,
      message: message,
      data: data,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response_object));
  })
  .listen(8080);
console.log("Easy Pass Application Is Now Running On Port 8080.");
