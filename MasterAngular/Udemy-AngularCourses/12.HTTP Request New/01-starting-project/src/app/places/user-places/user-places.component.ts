import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetchig = signal(false);
  error = signal('');
  private placesServices = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
      this.isFetchig.set(true);
      const subscrition = this.placesServices.loadUserPlaces()
        .subscribe({
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
}
