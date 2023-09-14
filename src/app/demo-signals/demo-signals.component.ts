import { Component, Signal, WritableSignal, computed } from '@angular/core';
import { DemoObsService } from '../demo-obs-signals/demo-obs.service';

@Component({
  selector: 'app-demo-signals',
  templateUrl: './demo-signals.component.html',
  styleUrls: ['./demo-signals.component.scss']
})
export class DemoSignalsComponent {

  count : WritableSignal<number>
  total : Signal<number>

  
  constructor(private demoObs : DemoObsService)
  {
    this.count = this.demoObs.count
    this.total = this.demoObs.total
  }

}
