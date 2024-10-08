import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assets: any[] = [];  // Variable to hold the assets array

  // This function will be triggered when assets are emitted
  updateAssets(fetchedAssets: any[]): void {
    this.assets = fetchedAssets;  // Update the assets array
    console.log('Assets updated:', this.assets);  // Debugging
  }
}
