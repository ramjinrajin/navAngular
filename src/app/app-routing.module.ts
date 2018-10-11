import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './Student/create/create.component';
import { EditComponent } from './Student/edit/edit.component';
import { ListComponent } from './Student/list/list.component';

const routes: Routes = [
  {path:'Create',component:CreateComponent},
  {path:'Edit/:code',component:EditComponent},
  {path:'List',component:ListComponent},
  {path:'',redirectTo:'/Create',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
