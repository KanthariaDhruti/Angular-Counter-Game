import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=0
  increment(){
    this.count=this.count+1
  }
  decrement(){
    if(this.count==0){
      return
    }else{
      this.count=this.count-1
    }
  }
  reset(){
    this.count=0
  }

}
