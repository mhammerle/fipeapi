import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Brand } from './brands.model';
import { SearchByFipeService } from 'src/app/search-by-fipe.service';


@Component({
  selector: 'fp-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  selectedBrandId: string;

  brandsList: Brand[] = [];

  private brandsSub: Subscription;

  brandControl = new FormControl();

  constructor(private searchByFipeService: SearchByFipeService) { }

  ngOnInit() {
    // Brands Data
    this.searchByFipeService.setFipeUrl(null, null, null);

    this.brandsSub = this.searchByFipeService.getBrandsUpdatedListener()
    .subscribe((brand: Brand[]) => {
      this.brandsList = brand;
      });

  }

  selectModel() {
   const id = this.selectedBrandId;
   this.searchByFipeService.setFipeUrl(id, null, null);
  }
}
