import { Component, OnInit,Input,EventEmitter,Output,ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-text2',
  templateUrl: './my-text2.component.html',
  styleUrls: ['./my-text2.component.scss']
})
export class MyText2Component implements OnInit {
 
  
  constructor() { }

  title: String = '我是title';
  name: String = '';
  pheoe = null;
  @Input('name') name1: any;
  // @Input('age') ages: any;
  _ages: number = 0;
  @Output('soncfu') soncfu  = new EventEmitter();

  @Input()
  set age(age: number) {
    console.log('设置age');
    this._ages = age ||0;
  };
  get age() {
    console.log('1')
    return this._ages
  }
  //  ages: number = 0;
 
  show(text:any) {
    console.log(text)
    this.soncfu.emit('发送')
  }

  text() {
    console.log(1)
  }
  ngOnInit(): void {
  }

}

