import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { ApiLocation } from '../models/location';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../shared/services/loading.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: ApiLocation[] = [];
  searchTerm = '';
  currentPage: number = 1;
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    public loadingService: LoadingService

  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const page = Number(params.get('page')) || 1;
      const name = params.get('name') || '';

      this.currentPage = page;
      this.searchTerm = name;

      const request = name
        ? this.locationService.searchByName(name, page)
        : this.locationService.getLocations(page);


      this.loadingService.show();

      request
        .pipe(
          finalize(() => this.loadingService.hide())
        )
        .subscribe({
          next: response => {
            this.locations = response.results;
            this.hasNextPage = response.info.next !== null;
            this.hasPreviousPage = response.info.prev !== null;
          }
        });
    });
  }

  goToPage(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: page
      },
      queryParamsHandling: 'merge'
    });
  }
  search(): void {
    const name = this.searchTerm.trim();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        name: name || null,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }

}
