import { Component, OnInit } from '@angular/core';
import { SahamService }  from '../saham.service';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-sahamsession',
  templateUrl: './sahamsession.component.html',
  styleUrls: ['./sahamsession.component.css']
})
export class SahamsessionComponent implements OnInit {

  private sahamsession: Array<any> = [];
  private searchmaster: Array<any> = [];
  private errorMessage: any;
  private id: any;

  searchResult = [];

  stateCtrl: FormControl = new FormControl();
  searchTerm: FormControl = new FormControl();

  myForm: FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  // selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado'
  ];
  

  constructor(private _sahamService : SahamService) { }

  // this.searchTerm.valueChanges
  //      .debounceTime(400) 
  //      .subscribe(data => {
  //        this.service.search_stock(data).subscribe(response =>{
  //          console.log(response);
  //          this.searchResult = response
  //        })
  //      })

 
  getSearchMaster(){
    this._sahamService.getSearchMaster().subscribe(
      data => this.searchmaster = data,      
      error => this.errorMessage = error
      )
  }

  getSahamSession(){
    this._sahamService.getSahamSession(this.id).subscribe(
      data => this.sahamsession = data,      
      error => this.errorMessage = error
      )
  }

  ngOnInit() {
  	this.getSahamSession();
  }

}
