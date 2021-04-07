import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-card',
  templateUrl: './entries-card.component.html',
  styleUrls: ['./entries-card.component.scss']
})
export class EntriesCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() viewDocs: string;
  @Input() category: string;
  @Input() protocol: string;
}
