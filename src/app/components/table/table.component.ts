import {  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
  Renderer2 } from '@angular/core';
import {STATE_ROW_STATISTICS} from '../../../utils/constants.js';
import {DashboardDistrictComponent} from '../../views/dashboard-district/dashboard-district.component'
// import $ from "jquery";
// import {DataTable} from 'datatables.net'
import { DataTableDirective } from 'angular-datatables';


console.log({STATE_ROW_STATISTICS})

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() states
  @Input() districts

  @Input() zones
  // @Input() summary

  STATE_ROW_STATISTICS:any=[]
  dtOptions: DataTables.Settings = {};
  message = '';
  tableLoaded:any=false
  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  private childRow: ComponentRef<DashboardDistrictComponent>;

  constructor(
    private compFactory: ComponentFactoryResolver,
    private viewRef: ViewContainerRef,
    private _renderer: Renderer2
  ) { }


  ngOnInit() {
   console.log("state_roe==",STATE_ROW_STATISTICS)
   this.STATE_ROW_STATISTICS=STATE_ROW_STATISTICS
    console.log("state_roe==",this.states,this.districts,this.zones)
// setTimeout(() => {
  
  this.setDataTable()
// }, 300);
  }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }



  expandRow(trRef, rowData) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      var row = dtInstance.row(trRef);
      if (row.child.isShown()) {
        row.child.hide();
        this._renderer.removeClass(trRef, 'shown');
      }
      else {console.log("rowData====",rowData,rowData.state,this.districts[rowData.state])
        let factory = this.compFactory.resolveComponentFactory(DashboardDistrictComponent);
        this.childRow = this.viewRef.createComponent(factory);
        this.childRow.instance.districts = [this.districts[rowData.state].districtData];
        // this.childRow
        row.child(this.childRow.location.nativeElement).show();
        this._renderer.addClass(trRef, 'shown');
      }
    })
  }


  async setDataTable(){

    this.tableLoaded=true;

console.log("this.states===",this.states)
this.states.shift()
this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 10,
  processing: true
};

    // this.dtOptions = {
    //          data:this.states,
    //     //  "ajax":this.states, //"../ajax/data/objects.txt",
    //       "columns": [
    //           {
    //               "className":      'details-control',
    //               "orderable":      false,
    //               "data":           null,
    //               "defaultContent": ''
    //           },
    //           { title:"State/UT","data": "state" },
    //           { title:"Confirmed", "data": "confirmed" },
    //           { title:"Active", "data": "active" },
    //           { title:"Recovered", "data": "recovered" },
    //           { title:"Deaths", "data": "deaths" }

    //       ],
     
    // };
  // }

    // $(document).ready(function() {
      // var table = 
      // $('#example').DataTable( )
  //       data:this.states,
  //        // "ajax": "../ajax/data/objects.txt",
  //         "columns": [
  //             {
  //                 "className":      'details-control',
  //                 "orderable":      false,
  //                 "data":           null,
  //                 "defaultContent": ''
  //             },
  //             { "data": "state" },
  //             { "data": "confirmed" },
  //             { "data": "active" },
  //             { "data": "recovered" },
  //             { "data": "deaths" }

  //         ],
  //         "order": [[1, 'asc']]
  //     } );
       
  //     // Add event listener for opening and closing details
  //     // $('#example tbody').on('click', 'td.details-control',  ()=> {
  //     //     var tr = $(this).closest('tr');
  //     //     var row = table.row( tr );
   
  //     //     if ( row.child.isShown() ) {
  //     //         // This row is already open - close it
  //     //         row.child.hide();
  //     //         tr.removeClass('shown');
  //     //     }
  //     //     else {
  //     //         // Open this row
  //     //         row.child( format(row.data()) ).show();
  //     //         tr.addClass('shown');
  //     //     }
  //     // } );
// console.log("inside the jquery")

//   } );

  }


 


}


function format ( d ) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
      '<tr>'+
          '<td>Full name:</td>'+
          '<td>'+d.name+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extension number:</td>'+
          '<td>'+d.extn+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extra info:</td>'+
          '<td>And any further details here (images etc)...</td>'+
      '</tr>'+
  '</table>';
}

/**


let jDataArrTable = [];
    console.log(this.state.usersData[1]);
    for (let data of this.state.usersData) {
      console.log(data)
      let obj = {
        //centerId:0,
        firstName: "",
        surName: "",
        studentId: "",
        userRole: "",
        option1: "",
        option2: "",
       // option3: ""// `<i class="far fa-times-circle"></i>`
      };
      if (data.centerId !== null) obj.centerId = data.centerId;
     console.log(data.userRole)
      if(data.userRole=="parent"){
      obj.firstName = `<span id="linkStudent" >${data.firstName}</span>`;
      (obj.surName = `<span id="linkStudent" >${data.surName}</span>`),
        (obj.studentId = `<span id="linkStudent" >${data.studentId}</span>`)
      }

      else if(data.userRole=="student") {
        console.log("inisfr parrrrrt")
        obj.firstName = `<span id="linkParent" >${data.firstName}</span>`;
        (obj.surName = `<span id="linkParent" >${data.surName}</span>`),
          (obj.studentId = `<span id="linkParent" >${data.studentId}</span>`)

      }
      else{
        obj.firstName = `<span id="show" >${data.firstName}</span>`;
        (obj.surName = `<span id="show" >${data.surName}</span>`),
          (obj.studentId = `<span id="show" >${data.studentId}</span>`)

      }
        (obj.userRole = this.getBadgeClasses(data.userRole));
      obj.option1 =
        "<span><i class='fas fa-edit' id='edit' style='color:#181f6d;' title='Edit User Details'></i><span>";
      obj.option2 =
         "<i class='fas fa-trash-alt' id='delete' style='color:red;' title='Edit User Details'></i>";


        jDataArrTable.push(obj);
    }

    let _this = this;

    $(document).ready(function() {
      var table = $("#example").DataTable({
        columns: [
          { data: "firstName", id: 0 },
          { data: "surName", id: 1 },
          { data: "studentId", id: 2 },
          { data: "userRole", id: 2 },
          { data: "option1", id: 3 },
          { data: "option2", id: 4 },
         //  { data: "option3", id: 5 }

        ],
        data: jDataArrTable,
        stateSave: true,
        stateSaveParams: function(settings, data) {
          data.search.search = "";
        },
        bDestroy: true
      });

      // $("#example tbody").on("click", "tr td #show", function() {
      //   var data = table.row($(this).parents("tr")).data();
      //   _this.handleRow(data);
      // });

      $("#example tbody").on("click", "tr td #show", function() {
        var data = table.row($(this).parents("tr")).data();
        _this.handleRow(data);
      });

      $("#example tbody").on("click", "tr td #edit", function() {
        var data = table.row($(this).parents("tr")).data();
        _this.handleEdit(data);
      });

      $("#example tbody").on("click", "tr td #delete", function() {
        var data = table.row($(this).parents("tr")).data();
        _this.openDeleteConfirmation(data);
      });


      $("#example tbody").on("click", "tr td #linkStudent", function() {
        var data = table.row($(this).parents("tr")).data();
        _this.handleLinkStudent(data);
      });


      $("#example tbody").on("click", "tr td #linkParent", function() {
        var data = table.row($(this).parents("tr")).data();
        _this.handleLinkParent(data);
      });


    });





 */