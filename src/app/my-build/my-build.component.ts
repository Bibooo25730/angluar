import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from "@angular/forms"
@Component({
  selector: 'app-my-build',
  templateUrl: './my-build.component.html',
  styleUrls: ['./my-build.component.scss']
})
export class MyBuildComponent implements OnInit {
  userForm: FormGroup;
  FormGroup: any;
  constructor(private fb: FormBuilder) { 
    this.userForm = fb.group({
      name: ['Tom',Validators.required],
      pwd: ['123456', Validators.minLength(6)],
      address: fb.group({
        street: ['华阳'],
        city:['成都']
      })
    })
  }
  onSubmit() {
    console.log('--------------');
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
    console.log('--------------');
    
  }

  ngOnInit(): void {
  }

}
