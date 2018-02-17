/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Response, Headers} from '@angular/http';



export class PostService {
    constructor(public http: Http) {

    }

    post(url: string, req: any) {
        let headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        let result = this.http.post(url, req, {
            headers: headers
            //      for keep session api
            //        ,withCredentials: true
        })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

        //        result.then(resData => {
        //            let postObjext: PostObject = resData;
        //            if (postObjext.resultCode != null && postObjext.resultCode == "0001"){
        //                 this.gd.shareObj['main'].logined = false;
        //            }
        //        });

        return result;
    }


    postSubSubscribe(url: string, req: any) {


        let headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        let result = this.http.post(url, req, {headers: headers, withCredentials: true});
        //            .subscribe(response => {
        //                console.log(response);
        //                // if I am not mistaken "response.headers" should contain the "Set-Cookie" you are looking for 
        //            });



        return result;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let result:any = new Object();
        result.msg = "Error"
        result.resultCode = "500"
        result.detail = "Error detail"
        return result;
    }
}

