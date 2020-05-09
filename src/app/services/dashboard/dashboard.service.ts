import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl:string="https://api.covid19india.org/" 
  //https://api.covid19india.org/state_district_wise.json'
  constructor(private httpClient: HttpClient) { }

async  getAllData(){
    const data=await this.httpClient.get(this.baseUrl+'data.json').toPromise()
  console.log("data====",{data});
    
 
   return data;
     
      
    }
    async  getDistrictWiseData(){
      const data=await this.httpClient.get(this.baseUrl+'state_district_wise.json').toPromise()
    console.log("data===district wise data=",{data});
      
   
     return data;
       
        
      }

      async getDistrictZones(){
        const data=await this.httpClient.get(this.baseUrl+'zones.json').toPromise()
        console.log("data===Zones  data=",{data});
          
       
         return data;
      }
  }
// }
