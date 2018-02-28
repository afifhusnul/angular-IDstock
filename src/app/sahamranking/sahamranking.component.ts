import { Component, OnInit } from '@angular/core';
import { SahamService }  from '../saham.service';

@Component({
  selector: 'app-sahamranking',
  templateUrl: './sahamranking.component.html',
  styleUrls: ['./sahamranking.component.css']
})
export class SahamrankingComponent implements OnInit {

  constructor( private _sahamService : SahamService) { }
  sahamtopvol: Array<any> = [];

  getSahamTopVol(){
		this._sahamService.getSahamTopVol().subscribe(
			data=>{
				this.sahamtopvol = data['data'];											
			})
	}

  ngOnInit() {
  	this.getSahamTopVol();
  }

}
