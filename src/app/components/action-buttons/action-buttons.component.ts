import { Component, Output, EventEmitter } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {

  @Output() assetsFetched: EventEmitter<any[]> = new EventEmitter(); // Emit assets as an array

  constructor(private assetService: AssetService) {}

  loadAssets(): void {
    console.log('Search button clicked');
    this.assetService.getAllAssets().subscribe(
      (data) => {
        this.assetsFetched.emit(data);  // Emit the fetched data as an event
      },
      (error) => {
        console.error('Error fetching assets', error);  // Handle error
      }
    );
  }

  onSearch(): void {
    this.loadAssets();  // Trigger the API call when the search button is clicked
  }
}
