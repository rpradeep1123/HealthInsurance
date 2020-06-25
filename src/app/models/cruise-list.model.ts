export class DetailsTab {
    productFeatures: ProductFeatures;
    additionalBenefits: AdditionalBenefits;
    productLimitations: ProductLimitations;
    waitingPeriods: WaitingPeriods;
    aboutCompany: AboutCompany;
}

export class ProductFeatures {
    basicFeatures: Columns[];
    specialFeatures: Columns[];
}

export class AdditionalBenefits {
    usp: Columns[];
    additionalFeatures: Columns[];
}

export class ProductLimitations {
    subLimits: Columns[];
    coPay: Columns[];
}

export class WaitingPeriods {
    waitingPeriods: Columns[];
    exclusions: Columns[];
}

export class AboutCompany {
    factsFigures: Columns[];
    downloads: Columns[];
}

export class Columns {
    colType: string;
    colValue: string;
}