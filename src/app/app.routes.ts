import { Routes } from '@angular/router';

import { HomeComponent } from './panel/home/home.component';
import { SearchByFipeComponent } from './panel/search-by-fipe/search-by-fipe.component';
import { SearchByPlateComponent } from './panel/search-by-plate/search-by-plate.component';
import { TcoComponent } from './panel/tco/tco.component';
import { ModalityComponent } from './panel/modality/modality.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

export const ROUTES: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'panel' , component: PanelComponent,
                    children: [
                      {path: '' , component: HomeComponent},
                      {path: 'home' , component: HomeComponent},
                      {path: 'model' , component: SearchByFipeComponent},
                      {path: 'plate' , component: SearchByPlateComponent},
                      {path: 'tco' , component: TcoComponent},
                      {path: 'modality' , component: ModalityComponent},
                    ]},
];
