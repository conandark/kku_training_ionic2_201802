import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiaryObject } from '../../service/baseObject';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-diary-modal',
    templateUrl: 'diaryModal.html'
})

export class DiaryModal {

    diaryObject: DiaryObject;


    constructor(public platform: Platform, params: NavParams, public viewCtrl: ViewController) {
        if(params.data != null){
           this.diaryObject =  params.data;
        }
    }   


    onSave() {
        this.viewCtrl.dismiss(this.diaryObject);
    }

    onCancel() {
        this.viewCtrl.dismiss();
    }

    getImagem(readerEvt, midia){
        //console.log('change no input file', readerEvt);
        let diaryObject  = this.diaryObject;
        let file = readerEvt.target.files[0];
        var reader = new FileReader();
      
        reader.onloadend = function () {
            //console.log('base64 do arquivo',reader.result);
            diaryObject.image64 = btoa(reader.result);
            console.log('base64 done');
        };
        reader.onerror = function (error) {
            console.log('Erro ao ler a imagem : ', error);
        };

        reader.readAsBinaryString(file);
    }

}