import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client.model';

@Injectable()
export class ClientService {
    private apiRoot = environment.apiUrl;
    private baseUrl = 'api/clients'

    constructor(private _http: HttpClient){}

    getClients() : Observable<Client[]> {
        return this._http.get<Client[]>(`${this.apiRoot}${this.baseUrl}`);
    }

    getClient(id : number) :Observable<Client> {
        return this._http.get<Client>(`${this.apiRoot}${this.baseUrl}/${id}`)
    }
    
    
    
}