export interface SendEmailRequestModel {
    body: string;
    to: string;
    cc: string;
    bcc: string;
    subject: string;
}