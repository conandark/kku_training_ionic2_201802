import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseService } from '../../service/baseService';
import { DiaryObject, SavingRequest } from '../../service/baseObject';
import { ModalController } from 'ionic-angular';
import { DiaryModal } from '../modal/diaryModal';

@Component({
    selector: 'page-diary',
    templateUrl: 'diary.html'
})

export class DiaryPage {

    diaryObjects: DiaryObject[] = [];
    diaryObject: DiaryObject;
    diaryapiBaseURL:string = "http://127.0.0.1/ionicAPI/ionicAPI/";


    constructor(public navCtrl: NavController, private baseService: BaseService, public modalCtrl: ModalController) {
        this.getData();
    }

    getData() {
        this.baseService.getData().then(resData => {

            this.diaryObjects = resData;
        });
    }

    addData(item: DiaryObject) {
        let req: SavingRequest = new SavingRequest();
        req.title = item.title;
        req.detail = item.detail;
        req.image64 = item.image64;

        this.baseService.addData(req).then(resData => {
            this.getData();
        });
    }

    saveEditData(item: DiaryObject) {
        let req: SavingRequest = new SavingRequest();
        req.diary_id = item.diary_id;
        req.title = item.title;
        req.detail = item.detail;
        req.image64 = item.image64;

        this.baseService.editData(req).then(resData => {
            this.getData();
        });
    }

    deleteData(item: DiaryObject) {
        let req: SavingRequest = new SavingRequest();
        req.diary_id = item.diary_id;
        this.baseService.deleteData(req).then(resData => {
            this.baseService.getData();
        });
    }


    showDialog(item: DiaryObject) {
        this.diaryObject = item;
        let modal = this.modalCtrl.create(DiaryModal, this.diaryObject);
        modal.present();
        modal.onDidDismiss((data: any) => {
            console.log("CPage dismissed");
            if (data) {
                let obj: DiaryObject = data;
                if (obj.diary_id == null) {
                    this.addData(obj);
                } else {
                    this.saveEditData(obj);
                }
            }
        });
    }

    newDiary() {
        this.diaryObject = new DiaryObject();
        this.showDialog(this.diaryObject);
    }

}