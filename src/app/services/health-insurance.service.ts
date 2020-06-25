import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { SearchRequestModel } from '../models/request/search-request.model';
import { GetHealthRequestModel } from '../models/request/get-health-request.model';
import { SendEmailRequestModel } from '../models/request/send-email-request.model';
import { SendSmsRequestModel } from '../models/request/send-sms-request.model';
import { HealthPlanSelectedRequestModel } from '../models/request/health-plan-selected-request.model';
import { HealthProposalRequestModel } from '../models/request/health-proposal-request.model';
import { HealthPGRequestModel } from '../models/request/healthpg-request.model';
import { HealthDownloadPolicyRequestModel } from '../models/request/health-download-policy-request.model';
import { CommonResponseModel } from '../models/response/common-response.model';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService {

  searchObject: SearchRequestModel;
  contactObject: ContactModel;

  constructor(private http: HttpClient) { }

  searchHealthInsurance(request: SearchRequestModel): Observable<CommonResponseModel> {
    this.searchObject = request;
    return this.http.post<any>(environment.apiURL + '/HealthSearchRequest', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  getHealthInsuranceById(request: GetHealthRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthGetResultByEnquiryNo', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  sendEmail(request: SendEmailRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthSendEmail', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  sendSMS(request: SendSmsRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthSendSMS', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }
  getHealthPlanSelected(request: HealthPlanSelectedRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthPlanSelected', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  postHealthProposalForm(request: HealthProposalRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthProposalForm', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  getHealthPGResponse(request: HealthPGRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthPGResponse', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  getHealthDownloadPolicy(request: HealthDownloadPolicyRequestModel) {
    return this.http.post<any>(environment.apiURL + '/HealthDownloadPolicy', request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  handleError(error) {
    return throwError(error);
  }
}
