import { Component, WritableSignal } from '@angular/core';
import { TestSignalsService } from '../shared/test-signals.service';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.scss']
})
export class Compo3Component {
  
  count : WritableSignal<number>

  constructor(private readonly signalServ : TestSignalsService)
  {
    this.count = this.signalServ.count
  }
}