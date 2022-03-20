import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mu-host',
  templateUrl: './mu-host.component.html',
  styleUrls: ['./mu-host.component.scss']
})
export class MuHostComponent implements OnInit {

  constructor() { }
  birthday = new Date(2002, 10, 8);
  get FormDate() {
    return 'YYYY-MM-dd'
  }
  ngOnInit(): void {
  }

}
