import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HomeComponent} from './home/home.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {JqueryComponent} from './jquery/jquery.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent, children: [
      {path: ':hero_id', component: HeroDetailComponent}
    ]}, // 전체 url: /heroes/11
  {path: 'todo', component: TodoComponent},
  {path: 'jquery', component: JqueryComponent},

  // {path: '', redirectTo: '/home'}
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}, // loadChildren
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
