export interface HealthProposalRequestModel {
    enquiryID: string;
    suminsured: string;
    pincode: string;
    policyfor: string;
    plantype: string;
    premiumTenure: string;
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: string;
    height: string;
    weight: string;
    IsProposerSameAsInsured: string;
    ProposerMobileNo: string;
    ProposerEmail: string;
    ProposerPanCardNo: string;
    ProposerAddress: string;
    ProposerPincode: string;
    ProposerState: string;
    ProposerCity: string;
    insuredDetail: InsuredDetail[];
    NomineeName: string;
    NomineeRelation: string;
    IsUnlimitedAutoRecharge: string;
    IsPersonalAccidentOpt: string;
}
export interface InsuredDetail {
    Isprimary: string;
    relation: string;
    firstname: string;
    lastname: string;
    dateofbirth: string;
    height: string;
    weight: string;
    IsDiagnosedBefore: string;
    IsHospitalizedForAnyIllness: string;
    IsInjuredInLast48Month: string;
    IsclaimTaken: string;
    IsDeclinedCancelledCharged: string;
    IsInsurerCoveredUnderOtherInsuranceCompany: string;
    IsPreexistingDisease: string;
    IsDiabetes: string;
    IsHypertension: string;
    IsHIV: string;
    IsLiverDisease: string;
    IsCancerOrTumor: string;
    IsCardiacDisease: string;
    IsArthritisOrJointPain: string;
    IsKidneyDisease: string;
    IsParalyticOrStrokem: string;
    IsCongenitialDisease: string;
    IsAnyOtherDisease: string;
    IsAnyDisOrder: string;
    IsMinorInjuries: string;
    IsHospitalized: string;
    IsSmokeOrAlcoholOrDrugsOrTobacco: string;
}
