import { Component, inject } from '@angular/core';
import { EventsStore } from '../../store';

@Component({
  selector: 'app-display-all-events',
  imports: [],
  templateUrl: './display-all-events.html',
  styleUrl: './display-all-events.css',
})
export class DisplayAllEvents {
  private readonly store = inject(EventsStore);
  protected readonly events = this.store.eventsToday;

  addOne(): void {
    const newEvent = {
      id: Math.floor(Math.random() * 1000),
      date: new Date(),
      location: 'New Location',
      title: 'New Event'
    };
    this.store.addNewOneEvent(newEvent);
  }
}
