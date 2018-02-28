import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SahamService {
	
	baseUrl: string = 'http://192.168.6.130:8000/api/';

  constructor(private http: Http) { }

    getMaxBajul(){    
      return this.http.get(this.baseUrl + 'maxbajul')
      .map(res => res.json());
    }

    getSahamMaster(page:number){    
      return this.http.get(this.baseUrl + 'stockmaster?page='+page)
      .map(res => res.json());
    }

    getSahamMasterbyid(id:any){    
      return this.http.get(this.baseUrl + 'stockmaster/'+id)
      .map(res => res.json());
    }

    getSahamResSup(id:any){    
      return this.http.get(this.baseUrl + 'stockressup/'+id)
      .map(res => res.json());
    }

    search_stock(term){
        return this.http.get(this.baseUrl + term).map(res => {
          return res.json().map(item => {
            return item.stockmaster
          })
        })
    }

    getSearchMaster(){    
      return this.http.get(this.baseUrl + 'mastersearch')
      .map(res => res.json());
    }

    getSahamSession(id:any){    
      return this.http.get(this.baseUrl + 'session/'+id)
      .map(res => res.json());
    }

    getSahamRup(){    
      return this.http.get(this.baseUrl + 'stockrevup')
      .map(res => res.json());
    }

    getSahamRdown(){    
      return this.http.get(this.baseUrl + 'stockrevdown')
      .map(res => res.json());
    }
   

    getSahamUp(){     
      return this.http.get(this.baseUrl + 'stockup')
      .map(res => res.json());
    }

    getSahamUp1(page:number){    
      return this.http.get(this.baseUrl + 'stockup1?page='+page)
      .map(res => res.json());
    }

    getSahamUp2(){    
      return this.http.get(this.baseUrl + 'stockup2')
      .map(res => res.json());
    }

    getSahamUp3(){    
      return this.http.get(this.baseUrl + 'stockup3')
      .map(res => res.json());
    }


    getSahamDown(){      
      return this.http.get(this.baseUrl + 'stockdown')
      .map(res => res.json());
    }

    getSahamDown1(){    
      return this.http.get(this.baseUrl + 'stockdown1')
      .map(res => res.json());
    }

    getSahamDown2(){    
      return this.http.get(this.baseUrl + 'stockdown2')
      .map(res => res.json());
    }

    getSahamDown3(){    
      return this.http.get(this.baseUrl + 'stockdown3')
      .map(res => res.json());
    }

    getSahamTopVol(){    
      return this.http.get(this.baseUrl + 'stockvol')
      .map(res => res.json());
    }

    _errorHandler(error:Response){
      debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }

  }
