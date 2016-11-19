import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';

const app_routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

export const app_routing = RouterModule.forRoot(app_routes);
