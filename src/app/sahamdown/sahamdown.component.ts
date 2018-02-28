import { Component, OnInit } from '@angular/core';
import { SahamService }  from '../saham.service';


@Component({
	selector: 'app-sahamdown',
	templateUrl: './sahamdown.component.html',
	styleUrls: ['./sahamdown.component.css']
})



export class SahamdownComponent implements OnInit {

	constructor( private _sahamService : SahamService) { }
	
	sahamdown: Array<any> = [];
	sahamdown1: Array<any> = [];
	sahamdown2: Array<any> = [];
	sahamdown3: Array<any> = [];
	errorMessage: any;

	getSahamDown(){
		this._sahamService.getSahamDown().subscribe(
			// data => this.sahamdown = data,
			// error => this.errorMessage = error
			// )
			data=>{
				this.sahamdown = data['data'];											
			})
	}

	getSahamDown1(){
		this._sahamService.getSahamDown1().subscribe(
			data=>{
				this.sahamdown1 = data['data'];											
			})
	}

	getSahamDown2(){
		this._sahamService.getSahamDown2().subscribe(
			data=>{
				this.sahamdown2 = data['data'];							
			})
	}

	getSahamDown3(){
		this._sahamService.getSahamDown3().subscribe(
			data=>{
				this.sahamdown3 = data['data'];							
			})
	}

	ngOnInit() {
		this.getSahamDown();
		this.getSahamDown1();
		this.getSahamDown2();
		this.getSahamDown3();
	}

}
