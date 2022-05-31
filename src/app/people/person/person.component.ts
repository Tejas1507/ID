import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(public service : PersonService ) { }

  ngOnInit() {}

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
