export interface CommonResponseModel {
    info: Info;
    data?: any;
}
export interface Info {
    status: number;
    message?: any;
    res: string;
}


