import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';

@Component({
  selector: 'app-monitoring-jobs',
  templateUrl: './monitoring-jobs.component.html',
  styleUrls: ['./monitoring-jobs.component.css']
})
export class MonitoringJobsComponent implements OnInit {
  registrationDate: string = '';
  titleName: string = '';
  contentType: string = 'All';
  monitoringType: string = '';
  releaseDate: string = '';
  watermarkDetectionType: string = 'Manual';
  timeZone: string = 'Local Time';
  status: string = 'All';

  assetDetails: any[] = [];

  constructor(private monitoringJobsService: AssetService) {
    console.log('MonitoringJobsComponent constructor called');
  }

  ngOnInit(): void {
    console.log('MonitoringJobsComponent ngOnInit called');
    this.loadAllAssets();
  }

  loadAllAssets(): void {
    console.log('loadAllAssets function called');
    this.monitoringJobsService.getAllAssets().subscribe(
      (response) => {
        console.log('All assets loaded successfully', response);
        this.assetDetails = response;
      },
      (error) => {
        console.error('Error fetching all asset details:', error);
      }
    );
  }

  onSearch(): void {
    console.log('Search button clicked');
    const searchParams = {
      registrationDate: this.registrationDate,
      titleName: this.titleName,
      contentType: this.contentType,
      monitoringType: this.monitoringType,
      releaseDate: this.releaseDate,
      watermarkDetectionType: this.watermarkDetectionType,
      timeZone: this.timeZone,
      status: this.status
    };
    console.log('Search params:', searchParams);

    this.monitoringJobsService.searchAssets(searchParams).subscribe(
      (response) => {
        console.log('Search results received', response);
        this.assetDetails = response;
      },
      (error) => {
        console.error('Error fetching asset details:', error);
      }
    );
  }
}