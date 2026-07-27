import { Component, OnInit } from '@angular/core';
import { Location } from '../models/locations.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: Location[] = [];
  loading = false;
  error = false;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    this.loading = true;
    this.locationService.getLocations().subscribe({
      next: (response) => {
        this.locations = response.results;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }

    });

  }

}
