import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../../environments/environment';
import {Observable} from 'rxjs';
import { ICustomer } from '../model/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_ENDPOINTS.customers);
  }
}
