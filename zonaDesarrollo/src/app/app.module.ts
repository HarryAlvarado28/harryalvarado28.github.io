import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './comp/header/header.component';
import { ActivityComponent } from './comp/activity/activity.component';
import { SpecialitiesComponent } from './comp/specialities/specialities.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { EducationComponent } from './comp/education/education.component';
import { WorkexperenceComponent } from './comp/workexperence/workexperence.component';
import { FooterComponent } from './comp/footer/footer.component';
import { FavoritephrasesComponent } from './comp/favoritephrases/favoritephrases.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivityComponent,
    SpecialitiesComponent,
    SkillsComponent,
    EducationComponent,
    WorkexperenceComponent,
    FooterComponent,
    FavoritephrasesComponent,
    PresentationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
