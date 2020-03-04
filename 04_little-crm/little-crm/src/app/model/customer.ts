import ICustomer from "./icustomer";

export class Customer implements ICustomer{
  id?: number;
  name: string = '';
  purchases: number = 0;
}
