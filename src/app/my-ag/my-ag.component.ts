import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms"

@Component({
  selector: 'app-my-ag',
  templateUrl: './my-ag.component.html',
  styleUrls: ['./my-ag.component.scss']
})
export class MyAgComponent implements OnInit {

  constructor() { }
  user:any = {name:'',pwd:''};
  myGruop: any = {};
  handleChange(event: any) {
    console.log(event)
  }
  onSubmit() {
     console.log(this.myGruop)
  }
  ngOnInit(): void {
  //   this.myGruop = this.formBuilder.group({
  //     name: [this.user.name, Validators.required, Validators.minLength(3)],
  //     // pwd : [this.user.pwd, Validators.minLength(4)]
  //  })
    this.myGruop = new FormGroup({
      name: new FormControl(this.user.name,[
        Validators.required,
        Validators.minLength(4)
      ])
    });
    this.myGruop = new FormGroup({
      pwd: new FormControl(this.user.pwd,[
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  get name(): any {
    return this.myGruop.get('name');
  }
  get pwd(): any{
    return this.myGruop.get('pwd');
  }
}
