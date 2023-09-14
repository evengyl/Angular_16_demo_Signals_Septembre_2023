import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoObsService {

  count = signal(0)

  price = signal(42)
  qty = signal(10)
  total = computed(() => this.price() * this.qty())


  val = signal({value : 1, name : "tutu"})
  

  increment(): void {
    this.count.update((c) => (c = c + 1));
  }
  
  test(){
    //la difference entre mutate et update est qu'on ne peut pas madofier un seul element dans update 
    //dans le mutate, j'ai pu uniquemenht modifier un seul element value
    this.val.mutate((val) => (val.value = this.val().value + 1));
    //this.val.update((val) => (val = { value : this.val().value + 1 }));

    //grossos modo les types complexes ensembles de références, doivent passer par mutate
  }


}
