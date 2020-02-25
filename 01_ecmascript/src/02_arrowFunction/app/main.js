console.log('EcmaScript 6 für Angular');

// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";

let customerList = new CustomerList();

customerList
    .loadCustomers()
    .then(() => {
       let result = customerList.searchForName('Hans');
        console.log(result);
    });