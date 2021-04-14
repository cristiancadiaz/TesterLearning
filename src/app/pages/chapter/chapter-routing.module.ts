import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ChapterComponent } from './chapter.component';

const routes: Routes = [
  { path: ':id', component: ChapterComponent },
  { path: ':id/activity', component: ActivityComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
