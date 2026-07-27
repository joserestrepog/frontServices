import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LocationListComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule
  ]
})
export class LocationsModule { }
