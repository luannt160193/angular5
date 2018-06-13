import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  },
  { path: 'createUser', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
