import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { REG_DATE} from '../../../shared/constants/common';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  LeftMenuInfo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.LeftMenuInfo = this.fb.group({
      date: ['', {
        validators: forbiddenDateValidator(new RegExp(REG_DATE)),
        updateOn: 'blur'
      }],
      time: [''],
      adress: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]}),
      near: []
    });
  }

  ngOnInit() {
    this.LeftMenuInfo.setValue({
        date: new Date('01.01.2019'),
        time: '8:00 am',
        adress: {
          start: 'Купревича',
          end: 'пр-т Победителей',
        },
        near: ''
      }
    );
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.LeftMenuInfo.value);
  }
  get date() { return this.LeftMenuInfo.get('date'); }
}
export function forbiddenDateValidator(date: RegExp): ValidatorFn {
  return (control: FormControl): { [key: string]: any } | null => {
    const temp = new Date(control.value);
    let buf: string;
    buf = temp.toLocaleDateString();
    const forbidden: boolean = !(date.test(buf));
    if (control.value === null) {
      return {forbiddenDate: {value: 'There is a mistake in this date!'}};
    } else {
      return forbidden ? {forbiddenDate: {value: 'Not close date:' + buf}} : null;
    }
  };
}

