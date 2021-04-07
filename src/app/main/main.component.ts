import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EntriesService, IEntity } from '../entries/entries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ents$: Observable<IEntity[]>;

  constructor(private entriesService: EntriesService) {}

  ngOnInit(): void {
    this.ents$ = this.entriesService.fetchData();
    this.entriesService.searchTerms.subscribe((title) => {
      this.ents$ = this.entriesService.fetchDataByTitle(title);
    });
  }
}
