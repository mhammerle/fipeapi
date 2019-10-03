import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Brand } from './panel/search-by-fipe/brands/brands.model';
import { Model } from './panel/search-by-fipe/models/models.model';
import { YearModel } from './panel/search-by-fipe/year-models/year-models.model';
import { FipeValue } from './panel/search-by-fipe/fipe-values/fipe-values.model';

@Injectable({providedIn: 'root'})
export class SearchByFipeService {

  private brandID: string;
  private modelID: string;

  private brandUrl: string;
  private modelUrl: string;
  private yearUrl: string;
  private fipeUrl: string;

  private brandList: Brand[];
  private modelList: Model[];
  private yearModelList: YearModel[];
  private fipeValueList: FipeValue;

  private brandsUpdated = new Subject<Brand[]>();
  private modelsUpdated = new Subject<Model[]>();
  private yearModelsUpdated = new Subject<YearModel[]>();
  private fipeValuesUpdated = new Subject<FipeValue>();

  constructor(private http: HttpClient ) {}

  setFipeUrl(brand: string, model: string, yearModel: string) {
    if (brand === null && model === null && yearModel === null) {
      this.brandUrl = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';
      this.getBrands();
    } else if (brand != null && model === null && yearModel === null) {
      this.modelUrl = 'http://fipeapi.appspot.com/api/1/carros/veiculos/' + brand + '.json';
      this.brandID = brand;
      this.getModels();
    } else if (brand === null && model != null && yearModel === null) {
      this.yearUrl = 'http://fipeapi.appspot.com/api/1/carros/veiculo/' + this.brandID + '/' + model + '.json';
      this.modelID = model;
      this.getYearModels();
    } else if (brand === null && model === null && yearModel != null) {
      this.fipeUrl = 'http://fipeapi.appspot.com/api/1/carros/veiculo/'
                     + this.brandID + '/' + this.modelID + '/' + yearModel + '.json';
      this.getFipeValues();
    }
  }

  getBrands() {
    this.http.get<Brand[]>(this.brandUrl).subscribe((brand) => {
      this.brandList = brand;
      this.brandsUpdated.next([...this.brandList]);
    });
  }

  getBrandsUpdatedListener() {
    return this.brandsUpdated.asObservable();
  }

  getModels() {
    this.http.get<Model[]>(this.modelUrl).subscribe((model) => {
      this.modelList = model;
      this.modelsUpdated.next(this.modelList);
    });
  }

  getModelsUpdatedListener() {
    return this.modelsUpdated.asObservable();
  }

  getYearModels() {
    this.http.get<YearModel[]>(this.yearUrl).subscribe((yearModel) => {
      this.yearModelList = yearModel;
      this.yearModelsUpdated.next(this.yearModelList);
    });
  }

  getYearModelsUpdatedListener() {
    return this.yearModelsUpdated.asObservable();
  }

  getFipeValues() {
    this.http.get<FipeValue>(this.fipeUrl).subscribe((fipeValue) => {
      this.fipeValueList = fipeValue;
      this.fipeValuesUpdated.next(this.fipeValueList);
    });
  }

  getFipeValuesUpdatedListener() {
    return this.fipeValuesUpdated.asObservable();
  }

}
