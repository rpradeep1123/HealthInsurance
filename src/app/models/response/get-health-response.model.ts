export interface Table {
    sno: number;
    InsuranceCompanyName: string;
    policyTypeName: string;
    netPremium: string;
    Tax: string;
    totalPremium: string;
    roomRent: string;
    coPayment: string;
    preexistingDisease: string;
    NetworkHospital: string;
    planname: string;
    noofpeople: string;
    userid: string;
    enquiryid: string;
    usertype: string;
}

export interface Table1 {
    enquiryid: string;
    companyname: string;
    planname: string;
    noofpeople: string;
    colType: string;
    colValue: string;
    type: string;
    headerValue: string;
}

export interface GetHealthResponseModel {
    Table: Table[];
    Table1: Table1[];
}