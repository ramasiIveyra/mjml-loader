import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  email = '';
  //emailControl = new FormControl('', [Validators.required, Validators.email]);
  password = '';

  correct_email= 'admin@gmail.com'
  correct_pass= 'admin'
  isEmCorrect =false;
  isPassCorrect =false;
  formSubmitted = false;
  color = "grey";
  //Validation
  myForm: FormGroup = new FormGroup({}); // li emltih f tag form
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({ //FormGroup=formBuilder.group
      password: ['', Validators.required], // name required
      email: ['', [Validators.required, Validators.email]] // email required, w syntaxe  (email) shih built-in ghi staemlom
    })  
  }

  submitForm() {
    this.formSubmitted = true;
    
    if (
      this.myForm.get('email')?.value === this.correct_email &&
      this.myForm.get('password')?.value === this.correct_pass
    ) {
      this.isEmCorrect = true;
      this.isPassCorrect = true;
      this.color = "0px 0px 0px ";
    } 
    else {
      this.isEmCorrect = false;
      this.isPassCorrect = false;
      this.color = "2px 2px red";
    }
  }
}

