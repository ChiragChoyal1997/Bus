import {Seats} from 'src/app/seats.model';
import {Bus} from 'src/app/bus.model';

export class Blockticket {

    constructor(private seat:Seats, private bus:Bus){}
    name:string;
    email:string;
    contact:string;
    age:string;
    gender:string;
}
