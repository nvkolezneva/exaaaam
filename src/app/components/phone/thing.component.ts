import { ThingService } from '../../service/thing.service';
import { Thing } from '../../model/Thing';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent {
  @Input() thing: Thing;
  @Output() deleteThingFromList: EventEmitter<any> = new EventEmitter();

  isEditting = false;

  constructor(public thingService: ThingService) { }

  whatBorder(finish_date, status){
    if (status) { return 'text-secondary'; }
    // @ts-ignore
    const day = (new Date(finish_date) - (new Date())) / (60 * 60 * 24 * 1000);
    if (day <= 0) { return 'bg-danger'; }

    return 'text-dark';
  }
  onEdit() {
    if (this.isEditting) {
      this.thingService.editThing(this.thing);
    }
    this.isEditting = !this.isEditting;
  }

  onDelete() {
    console.log(this.thing);
    this.thingService.deleteThing(this.thing);
    this.deleteThingFromList.emit();
  }
}
