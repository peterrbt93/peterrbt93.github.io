import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { teachingComponent } from './teaching.component';

const routes: Routes = [
  {
    path: '', component: teachingComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },
      {
        path: 'mailing',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },
      {
        path: 'mapping',
        loadChildren: () => import(`./mapping/mapping.module`)
          .then(mod => mod.MappingModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teachingRoutingModule { }