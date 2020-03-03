import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import CustomerService from '../../services/customer.service';
import ICustomer from 'src/app/model/icustomer';

@Component({
  selector: 'crm-page-customer-edit',
  templateUrl: './page-customer-edit.component.html',
  styleUrls: ['./page-customer-edit.component.scss']
})

export class PageCustomerEditComponent implements OnInit {
  private id: string;
  private customer: ICustomer;
  private customerEditForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    purchases: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getOneCustomer(this.id)
      .subscribe((customer) => {
        this.customerEditForm.patchValue(customer);
      });
  }

  updateCustomer() {
    console.log(this.customerEditForm.value);

    // Egentlich nicht nötig
    const customer = {
      ...this.customerEditForm.value
    };

    console.log(customer);
    this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.router.navigate(['/customers']);
      });
  }
}
