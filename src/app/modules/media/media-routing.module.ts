import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaListComponent } from './components/media-list/media-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', component: MediaListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
