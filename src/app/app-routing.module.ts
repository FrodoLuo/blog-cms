import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'article',
        loadChildren: () => import('./modules/article/article.module').then(mod => mod.ArticleModule)
      },
      {
        path: 'media',
        loadChildren: () => import('./modules/media/media.module').then(mod => mod.MediaModule)
      }
    ],
    component: MainComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
