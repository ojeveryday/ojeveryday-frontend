import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ParticipantService {
    private api = 'http://localhost:3000/checkDayInfo/day?date=2020-04-14';
    constructor(private httpClinet: HttpClient) {}

    public getParticipantsByDate() {
        return this.httpClinet.get(this.api);
    }
}
