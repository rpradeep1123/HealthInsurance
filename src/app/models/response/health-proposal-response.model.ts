export interface Table {
    insuranceCompany: string;
    paymentGatewayUrl: string;
    returningUrl: string;
    product: string;
}

export interface HealthProposalResponseModel {
    Table: Table[];
}