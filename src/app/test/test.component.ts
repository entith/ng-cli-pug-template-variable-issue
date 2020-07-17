import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.pug',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  items = [
    'one',
    'two',
    'three',
    'four'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
