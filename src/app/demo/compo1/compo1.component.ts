import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { TestSignalsService } from '../shared/test-signals.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss']
})
export class Compo1Component {
  
  count : WritableSignal<number>

  price : WritableSignal<number>
  qty : WritableSignal<number>
  total : Signal<number>

  listUser : WritableSignal<{ id : number, name : string}[]>


  constructor(private readonly signalServ : TestSignalsService)
  {
    this.count = this.signalServ.count

    this.price = this.signalServ.price
    this.qty = this.signalServ.qty
    this.total = this.signalServ.total

    this.listUser = this.signalServ.listUser

  }

  increment(){
    this.signalServ.increment()
  }

  decrement(){
    this.signalServ.decrement()
  }

  initSignal(){
    //INITIALISE un NOUVELLE valeur du signal
    this.count.set(1000)
  }


  mutateList(){
    this.signalServ.mutateList()
  }
}
