import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PredictionService {

constructor(private http: HttpClient) { }

    getPrediction(lat,lon){

        const obj = {
            lat: lat,
            lon: lon
        };
        const _baseUrl = 'http://localhost:8080/lands/add';
        return this.http.post(_baseUrl, obj).map((response: Response) =>{
            console.log (response.json());
        });
    }
}