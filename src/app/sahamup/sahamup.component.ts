import { Component, OnInit } from '@angular/core';
import { SahamService }  from '../saham.service';

@Component({
	selector: 'app-sahamup',
	templateUrl: './sahamup.component.html',
	styleUrls: ['./sahamup.component.css']
})


export class SahamupComponent implements OnInit {
	
	private sahamup: Array<any> = [];
	private sahamup1: Array<any> = [];
	private sahamup2: Array<any> = [];
	private sahamup3: Array<any> = [];
	private errorMessage: any;

	private pages: Array<number>;
	private page: number = 0;
	private total: number;
	private maxSize: number = 5;
	private itemsPerPage: number = 0;
	private bigTotalItems: number = 0;	
	private currentPage: number = 1;

	constructor( private _sahamService : SahamService) { }

	setPage(currentPage,event:any){
		event.preventDefault();
		this.page=currentPage;
		this.getSahamUp1();
	}

	pageChanged(event: any): void { 	
		// console.log('Page changed to: ' + event.page);
		// console.log('Number items per page: ' + event.itemsPerPage);
		// console.log('Number items per page: ' + event.myUrl);
	}

	getSahamUp(){
		this._sahamService.getSahamUp().subscribe(
		// 	data => this.sahamup = data,
		// 	error => this.errorMessage = error
		// )
		data=>{
				this.sahamup= data['data'];											
			})
	}

	getSahamUp1(){
		this._sahamService.getSahamUp1(this.page).subscribe(						
			// data=>{
			// 	this.sahamup1 = data['data'];			
			// 	this.pages = new Array(data['last_page']);
			// 	this.bigTotalItems = data['total'];
			// 	this.itemsPerPage = data['per_page'];
			// 	this.currentPage = data['current_page'];				

			// 	// console.log(this.sahamup1 = data['data']);
			// 	// console.log(this.pages = new Array(data['last_page']));
			// 	// console.log(this.bigTotalItems = data['total']);
			// 	// console.log(this.itemsPerPage = data['per_page']);
			// 	// console.log(this.currentPage = data['current_page']);
			// },error=>{console.log(this.errorMessage);})
			data=>{
				this.sahamup1 = data['data'];
				this.pages = new Array(data['meta']['pagination']['total_pages']);
				this.bigTotalItems = data['meta']['pagination']['total'];
				this.itemsPerPage = data['meta']['pagination']['per_page'];
				this.currentPage = data['meta']['pagination']['current_page'];
			})
	}  

	getSahamUp2(){
		this._sahamService.getSahamUp2().subscribe(
			data=>{
				this.sahamup2 = data['data'];											
			})
	}

	getSahamUp3(){
		this._sahamService.getSahamUp3().subscribe(
			// data => this.sahamup3 = data,
			// error => this.errorMessage = error
			// )
			data=>{
				this.sahamup3 = data['data'];											
			})
	}
	

	ngOnInit() {
		this.getSahamUp();
		this.getSahamUp1();
		this.getSahamUp2();
		this.getSahamUp3();
	}


}
