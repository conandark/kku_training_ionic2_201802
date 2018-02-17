import {Injectable} from '@angular/core';
import {SavingRequest} from './baseObject';
import {PostService} from './PostService';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {Http, Response, Headers} from '@angular/http';

@Injectable()
export class BaseService extends PostService {

    baseUrl: string;

   constructor(public http: Http) {
        super(http);
        this.baseUrl = "http://127.0.0.1/ionicAPI/ionicAPI/ionicAPI/";
    }



    addData(req:SavingRequest) {
       return this.post(this.baseUrl + "addData", req);
    }

    editData(req:SavingRequest) {
       return this.post(this.baseUrl + "editData", req);
    }

    deleteData(req:SavingRequest) {
       return this.post(this.baseUrl + "deleteData", req);
    }

    getData() {
       return this.post(this.baseUrl + "getData", {});
    }


}
