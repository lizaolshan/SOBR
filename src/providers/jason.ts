import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JasonProvider {
    baseUrl: string = "https://a1884573-1047-45f7-ba0b-f650222fd9a2-bluemix.cloudant.com";
    constructor(private httpClient: HttpClient) {

    }

    public getProfiles(): Observable<Profile[]> {
        //return this.httpClient.get(this.baseUrl + )
    }
}

export class Profile {
    id: string;
    name: string;
    profileImage: string;
    age: string;
    bio: string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}