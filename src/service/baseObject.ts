/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



export class SavingRequest {
    diary_id: number;
    title: string;
    detail: string;
    image64: any;
}


export class DiaryObject {
    constructor() {
    }
    diary_id: number;
    title: string;
    detail: string;
    image: string;
    image64: string;
}