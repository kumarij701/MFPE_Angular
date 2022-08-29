import { DatePipe } from "@angular/common";

export interface ConsumerModel {
    consumerId : number;
    consumerName : string;
    dateOfBirth : Date;
    email : string;
    panNumber : string;
    agentId : number;
}
