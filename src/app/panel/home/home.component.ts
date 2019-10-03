import { Component, OnInit } from '@angular/core';

import { SearchByFipeService } from '../../search-by-fipe.service';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( searchByFipeService: SearchByFipeService ) {}

  ngOnInit() {
  }
}
