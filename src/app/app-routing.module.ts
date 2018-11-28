import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'Tickets', loadChildren: './tickets/tickets.module#TicketsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsPageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'filmDetails', loadChildren: './film-details/film-details.module#FilmDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
