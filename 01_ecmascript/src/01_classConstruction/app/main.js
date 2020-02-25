console.log('EcmaScript 6 für Angular');

// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";

let customerList = new CustomerList();


console.log(customerList.searchForName('Peter'));