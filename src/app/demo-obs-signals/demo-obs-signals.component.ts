import { Component, WritableSignal, signal, computed, Signal } from '@angular/core';
import { DemoObsService } from './demo-obs.service';

@Component({
  selector: 'app-demo-obs-signals',
  templateUrl: './demo-obs-signals.component.html',
  styleUrls: ['./demo-obs-signals.component.scss']
})
export class DemoObsSignalsComponent {

  count : WritableSignal<number>
  
  price : WritableSignal<number>
  qty : WritableSignal<number>
  total : Signal<number>

  val : WritableSignal<{value : number, name : string}>

  constructor(private obsServe : DemoObsService){

    this.count = this.obsServe.count

    this.price = this.obsServe.price
    this.qty = this.obsServe.qty
    this.total = this.obsServe.total

    this.val = this.obsServe.val
  }

  initSignal(){
    //le signal peux être set à partir de sont service comme dans increment()
    //mais aussi directement dans le compo ! il sera tout aussi réactif !!! voir decrement()
    //dans le service la version courte de la callback et dans decrement() la version longue de la callback
    this.count.set(1000)
  }
  
  increment(): void {
    this.obsServe.increment()
  }

  decrement(): void {
    this.count.update((c : number) => {
      console.log(c)
      c = c - 1
      return c
    });
  }

  increasePrice(){
    this.price.update((p : number) => p + 289)
  }


  mutateSignal(){
    this.obsServe.test()
  }


}
