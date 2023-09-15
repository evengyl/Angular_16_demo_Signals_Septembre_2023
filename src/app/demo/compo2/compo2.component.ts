import { Component, Signal, WritableSignal } from '@angular/core';
import { TestSignalsService } from '../shared/test-signals.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.scss']
})
export class Compo2Component {
  
  count : WritableSignal<number>
  total : Signal<number>

  constructor(private readonly signalServ : TestSignalsService)
  {
    this.count = this.signalServ.count
    this.total = this.signalServ.total
  }
}
