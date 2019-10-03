import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Car } from './car.model';
import { Brand } from '../search-by-fipe/brands/brands.model';
import { SearchByPlateService } from '../../search-by-plate.service';
import { FipeValue } from '../search-by-fipe/fipe-values/fipe-values.model';
import { VEHICLES } from '../../vehicles';

@Component({
  selector: 'fp-search-by-plate',
  templateUrl: './search-by-plate.component.html',
  styleUrls: ['./search-by-plate.component.css']
})

export class SearchByPlateComponent implements OnInit {

  // cars: Car[] = [
  //   {plate: 'ABC1234', brand: 'RENAULT', fipe_code: '025099-6', year_model: '2007'},
  //   {plate: 'ABC1235', brand: 'VOLVO', fipe_code: '029063-7', year_model: '2006'},
  //   {plate: 'ABC1236', brand: 'CHERY', fipe_code: '073009-2', year_model: '2014'}
  // ];

  cars: Car[] = VEHICLES;

  show: number;
  selectedBrandId: string;
  selectedFipeCode: string;
  selectedYearModel: string;

  brandsList: Brand[] = [];

  selectedBrand: Brand[];

  private brandsSub: Subscription;

  brandControl = new FormControl();

  fipeValueList: FipeValue;

  private fipeValuesSub: Subscription;

  fipeValueControl = new FormControl();

  isLoading: boolean;

  constructor(private searchByPlateService: SearchByPlateService) { }

  ngOnInit() {
    this.show = 0;
    // Brands Data
    this.searchByPlateService.getBrands();
    this.brandsSub = this.searchByPlateService.getBrandsUpdatedListener()
    .subscribe((brand: Brand[]) => {
      this.brandsList = brand;
      });
  }

  filterID(selectedPlate: string) {
    this.show = 0;
    this.isLoading = true;
    setTimeout(() => {
    if (selectedPlate.length < 7) {
      this.isLoading = false;
      this.show = 2;
    } else {
      let filteredCar: Car[];
      let filteredCarBrand: string;
      filteredCar = this.cars.filter(cars => cars.plate.toLowerCase().includes(selectedPlate.toLowerCase()));
      if (filteredCar.length === 1) {
        filteredCarBrand = filteredCar[0].brand;
        this.selectedFipeCode = filteredCar[0].fipe_code;
        this.selectedYearModel = filteredCar[0].year_model;
      } else {
        this.isLoading = false;
        this.show = 2;
      }
      this.selectedBrand = this.brandsList.filter(brandsList => brandsList.name.toLowerCase().includes(filteredCarBrand.toLowerCase()));
      if (this.selectedBrand.length === 1) {
        this.selectedBrandId = this.selectedBrand[0].id;
        this.searchByPlateService.setFipeValueUrl(this.selectedBrandId, this.selectedFipeCode, this.selectedYearModel);
        this.getFipe();
        this.isLoading = false;
        this.show = 1;
      } else {
        this.isLoading = false;
        this.show = 2;
      }
    }
    }, 500);

  }

  getFipe() {
        // Fipe Values Data
        this.searchByPlateService.getFipeValue();
        this.fipeValuesSub = this.searchByPlateService.getFipeValueUpdatedListener()
        .subscribe((FipeValues: FipeValue) => {
          this.fipeValueList = FipeValues;
          });
  }
}
