import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent
//   }
// ]

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/features/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: 'users',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/features/users/users.module#UsersModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,

  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes //, {enableTracing: true} 
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
