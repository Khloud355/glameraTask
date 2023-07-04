import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessFormComponent } from '../components/business-form/business-form.component';
import { ChooseBusinesComponent } from '../components/choose-busines/choose-busines.component';
import { SucessComponent } from '../shared/sucess/sucess.component';
const routes: Routes = [
  { path: '', component: BusinessFormComponent },
  { path: 'choosebussines', component: ChooseBusinesComponent },
  { path: 'sucesspage', component: SucessComponent }

]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModuleModule { }
