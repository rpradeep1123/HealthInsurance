export interface SearchRequestModel {
    policyTypeName: string;
    sumInsured: string;
    adt: Adt[];
    Daughter: Daughter[];
    Son: Son[];
    Father: Father[];
    Mother: Mother[];
    IsYearlyOrClaimwise: string;
    YearlyOrClaimwiseAmount: string;
}
export interface Adt {
    Gender: string;
    age: string;
}

export interface Daughter {
    Gender: string;
    age: string;
}

export interface Son {
    Gender: string;
    age: string;
}

export interface Father {
    Gender: string;
    age: string;
}

export interface Mother {
    Gender: string;
    age: string;
}


