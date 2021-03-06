import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'appSettings',
    loadChildren: './appSettings/appSettings.module#AppSettingsPageModule'
  },
  { path: 'telescopes', loadChildren: './telescopes/telescopes.module#TelescopesPageModule' },
  { path: 'sky-objects', loadChildren: './sky-objects/sky-objects.module#SkyObjectsPageModule' },
  { path: 'paths', loadChildren: './paths/paths.module#PathsPageModule' },
  { path: 'path-detail', loadChildren: './path-detail/path-detail.module#PathDetailPageModule' },
  { path: 'telescope-create-update', loadChildren: './telescope-create-update/telescope-create-update.module#TelescopeCreateUpdatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
