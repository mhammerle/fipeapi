import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Brand } from './panel/search-by-fipe/brands/brands.model';
import { FipeValue } from './panel/search-by-fipe/fipe-values/fipe-values.model';

@Injectable({providedIn: 'root'})
export class SearchByPlateService {

  // defaultUrl = http://fipeapi.appspot.com/api/1/carros/veiculo/21/001267-0/2013-1.json

  private brandsUrl = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';

  private fipeValueUrl: string;

  private brandList: Brand[];
  private brandsUpdated = new Subject<Brand[]>();

  private fipeValue: FipeValue;
  private fipeValueUpdated = new Subject<FipeValue>();

  constructor(private http: HttpClient ) {}

  setFipeValueUrl(brandId: string, fipeCode: string, yearModel: string) {
    this.fipeValueUrl = 'http://fipeapi.appspot.com/api/1/carros/veiculo/' + brandId + '/' + fipeCode + '/' + yearModel + '-1.json';
    console.log(this.fipeValueUrl);
  }

  getBrands() {
    this.http.get<Brand[]>(this.brandsUrl).subscribe((brand) => {
      this.brandList = brand;
      this.brandsUpdated.next([...this.brandList]);
    });
  }

  getBrandsUpdatedListener() {
    return this.brandsUpdated.asObservable();
  }

  getFipeValue() {
    this.http.get<FipeValue>(this.fipeValueUrl).subscribe((fipeValue) => {
      this.fipeValue = fipeValue;
      this.fipeValueUpdated.next(this.fipeValue);
    });
  }

  getFipeValueUpdatedListener() {
    return this.fipeValueUpdated.asObservable();
  }

}
