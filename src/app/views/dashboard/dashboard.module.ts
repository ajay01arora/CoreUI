import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataTablesModule } from 'angular-datatables';

// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
// import { RowComponent } from '../../components/row/row.component';
import { DashboardDistrictComponent } from '../dashboard-district/dashboard-district.component';

@NgModule({
  imports: [
    FormsModule,
    // BrowserModule,
    DataTablesModule,
    // DataTablesModule.forRoot(),
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ,TableComponent ,DashboardDistrictComponent],
  entryComponents: [DashboardDistrictComponent]
})
export class DashboardModule { }
