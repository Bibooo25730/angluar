import { Component,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class HelloComponent  {

  constructor() { }
  array: Array<any> = [{ id: 1, name: 'zs' }, { id: 2, name: 'ls' }, { id: 3, name: 'ww' }]
  isShow = 'A';
  trackById(index:number,item:any) {
    return item.id;
  }
  count:number=1;
  handleConut(n:any) {
    console.log(n)
    this.count++;
  }
  // 父传子
  father: String = '父亲给子传递的数据';
}
