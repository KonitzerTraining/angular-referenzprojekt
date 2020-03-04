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
  public id: string;
  public customer: ICustomer;

  public customerEditForm: FormGroup = this.fb.group({
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
        console.log(customer);

        this.customerEditForm.patchValue(customer);
      });
  }

  updateCustomer() {
     console.log(this.customerEditForm.value);

    // Egentlich nicht nötig
    const customer = {
      // Weitere Eigenschaften
      // spread-Operator
      ...this.customerEditForm.value
    };

    console.log(customer);
    this.customerService.updateCustomer(this.customerEditForm.value as ICustomer)
    // this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.router.navigate(['/customers']);
      });
  }
}
