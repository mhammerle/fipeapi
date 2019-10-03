import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Model } from './models.model';
import { SearchByFipeService } from 'src/app/search-by-fipe.service';


@Component({
  selector: 'fp-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  modelsList: Model[] = [];
  show: boolean;

  private modelsSub: Subscription;

  selectedModelId: string;

  constructor(private searchByFipeService: SearchByFipeService) { }

  ngOnInit() {
    this.show = false;
    // Models Data
    this.searchByFipeService.getModels();
    this.modelsSub = this.searchByFipeService.getModelsUpdatedListener()
    .subscribe((model: Model[]) => {
      this.modelsList = model;
      if (this.modelsList.length > 0) { this.show = true; }
      });
  }

  selectYear() {
    const id = this.selectedModelId;
    this.searchByFipeService.setFipeUrl(null, id, null);
   }
}
