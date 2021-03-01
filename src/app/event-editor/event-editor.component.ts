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
        this.eventService.get(Number(params.id)).subscribe( // a params.id egy string, amit numberré alakítunk a Number() segítségével
          event => {
            console.log(event);
            this.event = event || new Event();
          }
        )
    );
  }

  onSubmit():void {
    this.eventService.update(this.event)
  }

}
