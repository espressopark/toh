import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManageHeroComponent } from './manage-hero/manage-hero.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: 'regiser', component: RegisterHeroComponent},
      {path: 'manage', component: ManageHeroComponent}
    ]}
];

@NgModule({
  declarations: [IndexComponent, RegisterHeroComponent, ManageHeroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
