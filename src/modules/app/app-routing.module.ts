import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/company-form', pathMatch: 'full' },
  {
    path: 'company-form',
    loadChildren: (): Promise<any> => import('../company-form').then((m) => m.CompanyFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
