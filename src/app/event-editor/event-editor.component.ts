import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  event: Event = new Event();

  constructor(
    private eventService: EventService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.eventService.get(params.id).subscribe(
          event => {
            console.log(event);
            this.event = event || new Event();
          }
        )
    );
  }

}
