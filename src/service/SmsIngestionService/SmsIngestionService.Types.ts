export namespace SmsIngestionServiceTypes {
    export interface SmsData {
        estateId?: string;
        senderPhoneNumber: string;
        recipients: string[];
        recipientsPhoneNumber: string[];
        message: string;
    }
}
