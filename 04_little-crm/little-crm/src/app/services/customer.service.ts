import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../environments/environment';
import {Observable} from 'rxjs';
import ICustomer from '../model/icustomer';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {

  public info = 'test';

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<ICustomer[]> {
    // return this.http.get<ICustomer[]>('http://localhost:3000/customers');
    return this.http.get<ICustomer[]>(API_ENDPOINTS.customers);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(API_ENDPOINTS.customers + '/' + id);
  }

  getOneCustomer(id: string) {
    return this.http.get<ICustomer>(API_ENDPOINTS.customers + '/' + id);
  }

  updateCustomer(customer: ICustomer) {
    return this.http.put<ICustomer>(API_ENDPOINTS.customers + '/' + customer.id, customer);
  }
}
