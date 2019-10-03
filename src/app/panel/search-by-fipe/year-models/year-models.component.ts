import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { YearModel } from './year-models.model';
import { SearchByFipeService } from '../../../search-by-fipe.service';


@Component({
  selector: 'fp-year-models',
  templateUrl: './year-models.component.html',
  styleUrls: ['./year-models.component.css']
})
export class YearModelsComponent implements OnInit {

  yearModelsList: YearModel[] = [];
  show: boolean;

  private yearModelsSub: Subscription;

  selecteYearID: string;

  constructor(private searchByFipeService: SearchByFipeService) { }

  ngOnInit() {
    this.show = false;
    // Year Models Data
    this.searchByFipeService.getYearModels();
    this.yearModelsSub = this.searchByFipeService.getYearModelsUpdatedListener()
    .subscribe((yearModel: YearModel[]) => {
      this.yearModelsList = yearModel;
      if (this.yearModelsList.length > 0) { this.show = true; }
      });
  }

  setFipe() {
    const id = this.selecteYearID;
    this.searchByFipeService.setFipeUrl(null, null, id);
  }
}
