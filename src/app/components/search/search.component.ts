import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { PolicyType } from '../../models/enums';
import { HealthInsuranceService } from 'src/app/services/health-insurance.service';
import { SearchRequestModel } from 'src/app/models/request/search-request.model';
import { GetHealthRequestModel } from 'src/app/models/request/get-health-request.model';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm: FormGroup;
  individualSearchForm: FormGroup;
  familySearchForm: FormGroup;
  seniorSearchForm: FormGroup;
  criticalSearchForm: FormGroup;
  topUpSearchForm: FormGroup;
  contactForm: FormGroup;
  adt: FormArray;
  daughterCountList: number[] = [1, 2, 3, 4];
  sonCountList: number[] = [1, 2, 3, 4];
  activeTab: string = PolicyType.ind;
  showContact: boolean = false;
  searchEnquiryId: string;

  constructor(private fb: FormBuilder, private healthService: HealthInsuranceService, private router: Router) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    });
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      pincode: ['', Validators.required]
    });

    this.individualSearchForm = this.fb.group({
      sumAssured: [''],
      adt: this.fb.array([
        this.createItem()
      ])
    });

    this.familySearchForm = this.fb.group({
      sumAssured: [''],
      adt: this.fb.array([

      ]),
      son: this.fb.array([

      ]),
      daughter: this.fb.array([

      ])
    });
    this.seniorSearchForm = this.fb.group({
      sumAssured: [''],
      adt: this.fb.array([

      ])
    });
    this.criticalSearchForm = this.fb.group({
      sumAssured: [''],
      adt: this.fb.array([

      ])
    });
    this.topUpSearchForm = this.fb.group({
      sumAssured: [''],
      adt: this.fb.array([

      ]),
      isYearly: [''],
      yearlyAmount: ['']
    });
    for (var i = 1; i < 6; i++) {
      this.initSlider(i);
    }
  }
  createItem(gender?) {
    return this.fb.group({
      gender: [gender ? gender : '', Validators.required],
      age: ['', Validators.required]
    })
  }

  initSlider(index) {
    $(`#slider-range-${index}`).slider({
      range: true,
      min: 0,
      max: 850,
      values: [50, 850],
      slide: (event, ui) => {
        this.setValue(index, ui.values[0] + "₹" + " - " + ui.values[1] + "₹");
      }
    });
    this.setValue(index, $(`#slider-range-${index}`).slider("values", 0) + "₹" + " - " + $(`#slider-range-${index}`).slider("values", 1) + "₹")
  }

  addItem(form: FormGroup, type: string, event: any) {
    switch (type) {
      case 'adult':
        (form.get('adt') as FormArray).clear();
        for (var i = 0; i < parseInt(event.target.value); i++)
          (form.get('adt') as FormArray).push(this.createItem());
        break;
      case 'son':
        this.daughterCountList = [];
        for (var i = 0; i < 4 - parseInt(event.target.value); i++)
          this.daughterCountList.push(i + 1);
        (form.get('son') as FormArray).clear();
        for (var i = 0; i < parseInt(event.target.value); i++)
          (form.get('son') as FormArray).push(this.createItem('Male'));
        break;
      case 'daughter':
        this.sonCountList = [];
        for (var i = 0; i < 4 - parseInt(event.target.value); i++)
          this.sonCountList.push(i + 1);
        (form.get('daughter') as FormArray).clear();
        for (var i = 0; i < parseInt(event.target.value); i++)
          (form.get('daughter') as FormArray).push(this.createItem('Female'));
        break;
      default:
        (form.get('daughter') as FormArray).clear();
        (form.get('son') as FormArray).clear();
    }
  }
  setActiveTab(tabName) {
    this.activeTab = PolicyType[tabName];
  }

  setValue(index, value) {
    switch (index) {
      case 1:
        this.individualSearchForm.patchValue({ sumAssured: value });
        break;
      case 2:
        this.familySearchForm.patchValue({ sumAssured: value });
        break;
      case 3:
        this.seniorSearchForm.patchValue({ sumAssured: value });
        break;
      case 4:
        this.criticalSearchForm.patchValue({ sumAssured: value });
        break;
      case 5:
        this.topUpSearchForm.patchValue({ sumAssured: value });
        break;
    }
  }
  submitSearchForm() {
    let request: SearchRequestModel;
    switch (this.activeTab) {
      case PolicyType.cri:
        request = {
          policyTypeName: PolicyType.cri,
          sumInsured: this.criticalSearchForm.value.sumAssured,
          adt: this.createRequestModel(this.criticalSearchForm, 'adult'),
          Daughter: [],
          Son: [],
          Father: [],
          Mother: [],
          IsYearlyOrClaimwise: "",
          YearlyOrClaimwiseAmount: ""
        }
        break;
      case PolicyType.fam:
        request = {
          policyTypeName: PolicyType.fam,
          sumInsured: this.familySearchForm.value.sumAssured,
          adt: this.createRequestModel(this.familySearchForm, 'adult'),
          Daughter: this.createRequestModel(this.familySearchForm, 'daughter'),
          Son: this.createRequestModel(this.familySearchForm, 'son'),
          Father: [],
          Mother: [],
          IsYearlyOrClaimwise: "",
          YearlyOrClaimwiseAmount: ""
        }
        break;
      case PolicyType.ind:
        request = {
          policyTypeName: PolicyType.ind,
          sumInsured: this.criticalSearchForm.value.sumAssured,
          adt: this.createRequestModel(this.criticalSearchForm, 'adult'),
          Daughter: [],
          Son: [],
          Father: [],
          Mother: [],
          IsYearlyOrClaimwise: "",
          YearlyOrClaimwiseAmount: ""
        }
        break;
      case PolicyType.sen:
        request = {
          policyTypeName: PolicyType.sen,
          sumInsured: this.criticalSearchForm.value.sumAssured,
          adt: this.createRequestModel(this.criticalSearchForm, 'adult'),
          Daughter: [],
          Son: [],
          Father: [],
          Mother: [],
          IsYearlyOrClaimwise: "",
          YearlyOrClaimwiseAmount: ""
        }
        break;
      case PolicyType.top:
        request = {
          policyTypeName: PolicyType.top,
          sumInsured: this.criticalSearchForm.value.sumAssured,
          adt: this.createRequestModel(this.criticalSearchForm, 'adult'),
          Daughter: [],
          Son: [],
          Father: [],
          Mother: [],
          IsYearlyOrClaimwise: this.criticalSearchForm.value.isYearly,
          YearlyOrClaimwiseAmount: this.criticalSearchForm.value.yearlyAmount
        }
        break;
    }
    this.healthService.searchHealthInsurance(request).subscribe(res => {
      this.searchEnquiryId = JSON.parse(res.info.res).enquiryID;
      this.showContact = true;
    })
  }

  createRequestModel(form: FormGroup, type) {
    let request = [];
    switch (type) {
      case 'adult':
        request = form.get('adt').value
        break;
      case 'son':
        request = form.get('son').value
        break;
      case 'daughter':
        request = form.get('daughter').value
        break;
    }
    return request;
  }

  goBack() {
    this.showContact = false;
  }

  submitContact() {
    this.healthService.contactObject = this.contactForm.value;
    this.router.navigate(['/cruise-list'], { queryParams: { enquiryId: this.searchEnquiryId } });

  }
}
