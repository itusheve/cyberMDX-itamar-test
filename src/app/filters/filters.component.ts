import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  a: any;

  constructor() { }

  ngOnInit(): void {
  }

  test(t) {
    console.log(t);
  }
}
