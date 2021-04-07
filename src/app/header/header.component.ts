import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries/entries.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private entriesService: EntriesService) {}
  onSearchChange(title: string) {
    this.entriesService.searchTerms.next(title);
  }

}
