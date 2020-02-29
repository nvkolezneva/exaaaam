import { Thing } from './model/Thing';
import { ThingService } from './service/thing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'bmstu-frontend';

  screen = 'contacts';
  newThing: Thing = {};
  things: Thing[];
  thingsView: Thing[];

  nameFilter = '';
  ne7wThing = '';

  constructor(public thingService: ThingService) {
  }

  async ngOnInit() {
    this.things = await this.thingService.getThings();
    this.thingsView = this.things;
    this.showOutdated();
  }

  deleteThingFromList(thing) {
    this.things = this.things.filter((mThing) => mThing.id !== thing.id);
    this.thingsView = this.thingsView.filter((mThing) => mThing.id !== thing.id);
  }

  filter() {
    this.thingsView = this.things.filter((thing) =>
      thing.name.includes(this.nameFilter)
    );
  }

  showAll() {
    this.thingsView = this.things;
  }
  showDone() {
    this.thingsView = this.things.filter((thing) => thing.status == true);
  }
  showNotDone() {
    this.thingsView = this.things.filter((thing) => thing.status == false);
  }
  showOutdated() {
    this.thingsView = this.things.filter((thing) => (new Date(thing.finish_date) < new Date()) && (thing.status == false));
  }

  async addThings() {
    await this.thingService.createThing(this.newThing);
    this.things = await this.thingService.getThings();
    this.thingsView = this.things;
    this.newThing = {};
  }
}
