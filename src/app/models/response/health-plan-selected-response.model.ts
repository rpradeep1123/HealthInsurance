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

export interface HealthPlanSelectedResponseModel {
    Table: Table[];
}