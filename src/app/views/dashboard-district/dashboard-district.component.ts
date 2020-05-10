import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-district',
  templateUrl: './dashboard-district.component.html',
  styleUrls: ['./dashboard-district.component.css']
})
export class DashboardDistrictComponent implements OnInit {



  
  dtOptions: DataTables.Settings = {};

  @Input() districts: any[];
  allDistrictData:any=[]

  constructor() { }

  ngOnInit() {
  
      this.setDataTable()
   
   
  }

  async setDataTable(){
    this.allDistrictData=[]
    let distNames=await Object.keys(this.districts[0]);
   
    
    // let districtData=
    await distNames.map((name)=>{
      console.log("names===",name,this.districts[0][name])
      let obj=this.districts[0][name]
      obj.name=name
      
      this.allDistrictData.push(obj);
    })
              this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 40,
                processing: true
              };

  }
}
