import { Component, OnInit,ViewChild  } from '@angular/core';
import { SahamService }  from '../saham.service';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-sahamreversal',
  templateUrl: './sahamreversal.component.html',
  styleUrls: ['./sahamreversal.component.css']
})
export class SahamreversalComponent implements OnInit {  
  @ViewChild('childModal') childModal: ModalDirective;

  constructor(private _sahamService : SahamService, private modalService: BsModalService) { }

  modalRef: BsModalRef;
  isModalShown: boolean = false;
  sahamrup: Array<any> = [];
  sahamrdown: Array<any> = [];
  sahammaster: Array<any> = [];
  sahamressup: Array<any> = [];
  errorMessage: any;


  // showModal(id:any): void {  
  //   this._sahamService.getSahamMasterbyid(id).subscribe(            
  //     data =>{
  //       this.sahammaster = data['data'];
  //       console.log(data['data']['id_ticker']);
  //       console.log(data['data']['nm_ticker']);      
  //     })   
  //   // this.childModal.show();
  // }

  showModal(id:any): void {      
    this._sahamService.getSahamResSup(id).subscribe(            
      data =>{
        this.sahamressup = data['data'];
         // console.log(data['data']['id_ticker']);
        // console.log(data['data'][0]['nm_ticker']);
        // console.log(data['data'][0]['ma1']);
      })
    this.childModal.show();
  }

  hideModal(): void {
    this.childModal.hide();
  }

  getSahamRup(){		
    this._sahamService.getSahamRup().subscribe(            
      data=>{
        this.sahamrup = data['data'];              
      },error=>{console.log(this.errorMessage);})
  }

  getSahamRdown(){
    this._sahamService.getSahamRdown().subscribe(      
      data=>{
        this.sahamrdown = data['data'];              
      },error=>{console.log(this.errorMessage);})
  }

  ngOnInit() {
    this.getSahamRup();
    this.getSahamRdown();   
  }

}
