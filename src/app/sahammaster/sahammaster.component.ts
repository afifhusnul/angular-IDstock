import { Component, OnInit, Input } from '@angular/core';
import { SahamService }  from '../saham.service';
import { Http, Headers } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';


@Component({
	selector: 'app-sahammaster',
	templateUrl: './sahammaster.component.html',
	styleUrls: ['./sahammaster.component.css']
})

export class SahammasterComponent implements OnInit {  
	private sahammaster: Array<any>;
	private pages: Array<number>;
	// private pages: number=0;
	private errorMessage: any;

	private maxbajul: Array<any>;
	private bajul: any;

	private page: number = 1;
	private totalPages: number=0;
	private maxSize: number = 5;
	private itemsPerPage: number = 0;
	private bigTotalItems: number = 0;	
	private bigCurrentPage: number = 1;

	

	constructor(private http: Http, private _sahamService : SahamService) { }

	dwFile(zipfile:any){
		console.log('File date ' + zipfile);
		 // FileSaver.saveAs(file, zipFile);
		const headers = new Headers();
		headers.append('Accept', 'application/zip');
		this.http.get('http://www.idxdata.co.id/Download_Data/Daily/Stock_Summary/SS'+zipfile+'.zip', { headers: headers })
		.toPromise()
		.then(response => this.saveToFileSystem(response));
	}

	private saveToFileSystem(response) {
		const contentDispositionHeader: string = response.headers.get('Content-Disposition');
		// const parts: string[] = contentDispositionHeader.split(';');
		// const filename = parts[1].split('=')[1];
		const filename = "datazip.zip";
		// const blob = new Blob([response._body], { type: "application/zip" });
		const blob = response.blob();
		saveAs(blob, filename);

	}

	
	setPage(bigCurrentPage,event:any){
		event.preventDefault();
		this.page=bigCurrentPage;
		this.getSahamMaster();
	}

	pageChanged(event: any): void { 	
		// console.log('Page changed to: ' + event.page);
		// console.log('Number items per page: ' + event.itemsPerPage);
		// console.log('Number items per page: ' + event.myUrl);
	}

	ngOnInit() {
		this.getSahamMaster();		
	}

	getMaxBajul(){		
		this._sahamService.getMaxBajul().subscribe(
			data => this.maxbajul = data,
			error => this.errorMessage = error
			)
		
	}

	getSahamMaster(){
		this._sahamService.getSahamMaster(this.page).subscribe(						
			data=>{
				this.sahammaster = data['data'];			
				// this.pages = new Array(data['last_page']);
				// this.bigTotalItems = data['total'];
				// this.itemsPerPage = data['per_page'];
				// this.bigCurrentPage = data['current_page'];

				this.pages = new Array(data['meta']['pagination']['total_pages']);
				this.totalPages = data['meta']['pagination']['total_pages'];
				this.bigTotalItems = data['meta']['pagination']['total'];
				this.itemsPerPage = data['meta']['pagination']['per_page'];
				this.bigCurrentPage = data['meta']['pagination']['current_page'];								
			})
	}  


}
