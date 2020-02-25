export default class CustomerList {

    constructor() {
        this.customers = [
            {
                id: 3,
                name: 'Hans',
            },
            {
                id: 4,
                name: 'Peter',
            }
        ]
    }

    searchForName(name) {
        return this.customers.filter((customer) => {
            return customer.name === name;
        })
    }
}