import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatCardModule,
         MatAutocompleteModule,
         MatFormFieldModule,
         MatProgressSpinnerModule,
         MatSelectModule,
         MatGridListModule,
         MatButtonModule,
         MatExpansionModule,
         MatProgressBarModule,
         MatSnackBarModule
          } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './panel/toolbar/toolbar.component';
import { BrandsComponent } from './panel/search-by-fipe/brands/brands.component';
import { ModelsComponent } from './panel/search-by-fipe/models/models.component';
import { YearModelsComponent } from './panel/search-by-fipe/year-models/year-models.component';
import { FipeValuesComponent } from './panel/search-by-fipe/fipe-values/fipe-values.component';
import { SearchByFipeComponent } from './panel/search-by-fipe/search-by-fipe.component';
import { SearchByPlateComponent } from './panel/search-by-plate/search-by-plate.component';
import { HomeComponent } from './panel/home/home.component';
import { ROUTES } from './app.routes';
import { TcoComponent } from './panel/tco/tco.component';
import { FooterComponent } from './panel/footer/footer.component';
import { ModalityComponent } from './panel/modality/modality.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BrandsComponent,
    ModelsComponent,
    YearModelsComponent,
    FipeValuesComponent,
    SearchByFipeComponent,
    SearchByPlateComponent,
    HomeComponent,
    TcoComponent,
    FooterComponent,
    ModalityComponent,
    LoginComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSnackBarModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
