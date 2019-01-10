import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { Weather1Component } from './weather1/weather1.component';

// new
// Add HttpClientModule import TS and import angular
import { HttpClientModule } from '@angular/common/http';
import { Weather2Component } from './weather2/weather2.component';
import { Weather3Component } from './weather3/weather3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule, LineChartModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from "@angular/flex-layout";


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { WeatherhomeComponent } from './weatherhome/weatherhome.component';
import { Weather4Component } from './weather4/weather4.component';
import { Weather5Component } from './weather5/weather5.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    Weather1Component,
    Weather2Component,
    Weather3Component,
    WeatherhomeComponent,
    Weather4Component,
    Weather5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  FlexLayoutModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
