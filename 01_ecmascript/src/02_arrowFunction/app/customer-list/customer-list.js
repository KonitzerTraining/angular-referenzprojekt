import HttpClient from "../lib/http-client.js";

export default class CustomerList {

    constructor() {
        this.customers = [];
        this.httpClient = new HttpClient();
    }

    loadCustomersWrong () {
        this.httpClient
            .get('http://localhost:3000/customers')
            .then(function () {
                console.log(this);
            });
    }

    loadCustomers () {
        return this.httpClient
            .get('http://localhost:3000/customers')
            .then((customers) => {
                console.log(this);
                this.customers = customers;
            });
    }

    searchForName(name) {
        return this.customers.filter((customer) => {
            return customer.name === name;
        })
    }
}