import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetchig = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetchig.set(true);
    const subscrition = 
      this.placesService.loadAvailablePlaces().subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetchig.set(false);
        },
      });

    this.destroyRef.onDestroy(()=>{
      subscrition.unsubscribe();
    })
  }

  onSelectPlace(selectedPlace: Place){
    const subscrition = 
    this.placesService.addPlaceToUserPlaces(selectedPlace)
    .subscribe(
        {
          next: (resData) => console.log(resData),
        }
      );

      this.destroyRef.onDestroy(() => {
        subscrition.unsubscribe();
      })
  }
}
