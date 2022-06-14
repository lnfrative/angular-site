import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { GroupFeatureActionComponent } from './group-feature-action/group-feature-action.component';
import { SectionCalculatorComponent } from './section-calculator/section-calculator.component';
import { IncomeCalculatorComponent } from './income-calculator/income-calculator.component';
import { TopPerformAssetsComponent } from './top-perform-assets/top-perform-assets.component';
import { SectionSmartSavingComponent } from './section-smart-saving/section-smart-saving.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    HeroComponent,
    FeaturesComponent,
    GroupFeatureActionComponent,
    SectionCalculatorComponent,
    IncomeCalculatorComponent,
    TopPerformAssetsComponent,
    SectionSmartSavingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
