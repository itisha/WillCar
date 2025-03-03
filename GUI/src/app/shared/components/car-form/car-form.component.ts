import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Car, User} from "../../types/common";

@Component({
  selector: 'car-form-component',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  @Input() user: User;

  @Output() addCar: EventEmitter<Car> = new EventEmitter();
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { this.profileForm = this.fb.group({
    model: [''],
    color: [''],
    number: ['']
  });
  }

  ngOnInit() {
  }

}
