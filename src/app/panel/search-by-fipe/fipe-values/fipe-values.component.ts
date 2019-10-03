import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FipeValue } from './fipe-values.model';
import { SearchByFipeService } from 'src/app/search-by-fipe.service';


@Component({
  selector: 'fp-fipe-values',
  templateUrl: './fipe-values.component.html',
  styleUrls: ['./fipe-values.component.css']
})
export class FipeValuesComponent implements OnInit {

  fipeValueList: FipeValue;
  show = false;
  isLoading = false;

  private fipeValuesSub: Subscription;

  constructor( private searchByFipeService: SearchByFipeService) { }

  ngOnInit() {
    this.searchByFipeService.getFipeValues();
    this.fipeValuesSub = this.searchByFipeService.getFipeValuesUpdatedListener()
       .subscribe((FipeValues: FipeValue) => {
          this.isLoading = true;
          setTimeout(() => {
            this.fipeValueList = FipeValues;
            this.show = true;
            this.isLoading = false;
          }, 500);
        });
  }
}
