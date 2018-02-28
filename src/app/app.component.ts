import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	
	constructor() {}

	// public openModal(template: TemplateRef<any>) {
 //    	this.modalRef = this.modalService.show(template);
 //  	}
}
