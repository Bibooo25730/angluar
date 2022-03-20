import { Component, OnInit,EventEmitter,Output,Input,ViewChild } from '@angular/core';
import { MyText2Component } from "../my-text2/my-text2.component"

@Component({
  selector: 'app-my-text1',
  templateUrl: './my-text1.component.html',
  styleUrls: ['./my-text1.component.scss']
})
export class MyText1Component implements OnInit {

  @Input('father2') father3: any;
  name: string = 'zs'
  age: number = 12;

  title: String = '';
  @Output('myclick') myclicks = new EventEmitter();
  @Output() mymessage = new EventEmitter();
  handleClick($event:any) {
    console.log($event);
    let div1 = document.getElementById('aa');
    console.log(div1)
  }
  handleConut() {
    this.myclicks.emit('自定义事件')
    console.log(this.mymessage)
  }
  handleSon(event: void) {
    console.log(1)
    console.log('----接收子',event)
  }
  ngOnInit(): void {
  }
  constructor() {
  
  }
  @ViewChild(MyText2Component)
  set MyText2Component(v: MyText2Component) {
      v.text()
  }
  
 


}
