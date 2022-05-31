import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  form: FormGroup = new FormGroup({

    $key: new FormControl(null),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    monum: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', Validators.email),
    pass: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]),
    address: new FormControl('', Validators.required),
    gender: new FormControl('1'),
    dob: new FormControl(''),
    agree: new FormControl(false)
  });


initializeFormGroup(){
  this.form.setValue({
    $key: null,
    fname: '',
    lname: '',
    monum: '',
    email: '',
    pass: '',
    address: '',
    gender: 1,
    dob: '',
    agree: false
  });
}
}
