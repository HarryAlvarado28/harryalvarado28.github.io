import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './comp/skills/skills.component';
import { SpecialitiesComponent } from './comp/specialities/specialities.component';
import { HeaderComponent } from './comp/header/header.component';
import { PresentationComponent } from './presentation/presentation.component';


const routes: Routes = [
//   { path: 'skill', component: SkillsComponent },
  { path: '', component: PresentationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
