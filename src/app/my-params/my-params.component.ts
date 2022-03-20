import { Component, OnInit,DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-params',
  templateUrl: './my-params.component.html',
  styleUrls: ['./my-params.component.scss']
})
export class MyParamsComponent implements OnInit,DoCheck {
  id: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  handleNavgate() {
    // this.router.navigateByUrl('hello/12',{skipLocationChange:true});
    // this.router.navigate(['hello','12'])
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
