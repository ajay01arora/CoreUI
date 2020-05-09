import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() states
  @Input() districts

  @Input() zones
  @Input() summary



  constructor() { }

  ngOnInit(): void {
  }

}
