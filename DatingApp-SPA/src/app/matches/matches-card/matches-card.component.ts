import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-matches-card',
  templateUrl: './matches-card.component.html',
  styleUrls: ['./matches-card.component.css']
})
export class MatchesCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
