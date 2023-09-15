import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestSignalsService {

  count = signal(0)

  price = signal(42)
  qty = signal(10)
  total = computed(() => this.price() * this.qty())

  listUser = signal([
    { id : 1, name : "Loic" },
    { id : 2, name : "Sarah" },
  ])


  constructor() { }


  increment(){
    this.count.update((c) => (c = c + 1))
    //this.count.update(c => c = c + 1)
  }

  decrement(){
    this.count.update((c : number) => {
      c = c - 1
      return c
    })
  }

  
  mutateList(){
    this.listUser.mutate((userList) => {
      console.log(userList)
      
      userList.forEach((user) => {
        if(user.name == "Loic") user.name = "Bstorm"
      })

      return userList
    })
  }
}
