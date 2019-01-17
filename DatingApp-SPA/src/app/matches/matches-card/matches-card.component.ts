import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-matches-card',
  templateUrl: './matches-card.component.html',
  styleUrls: ['./matches-card.component.css']
})
export class MatchesCardComponent {
  @Input() user: User;

  constructor() {}
}
