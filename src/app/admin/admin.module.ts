import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManageHeroComponent } from './manage-hero/manage-hero.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminService} from './admin.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'register', component: RegisterHeroComponent},
      {path: 'manage', component: ManageHeroComponent}
    ]}
];

@NgModule({
  declarations: [IndexComponent, RegisterHeroComponent, ManageHeroComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
