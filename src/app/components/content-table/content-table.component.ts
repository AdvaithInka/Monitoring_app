import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent {

  @Input() assets: any[] = [];  // Accept the assets array as input

}
