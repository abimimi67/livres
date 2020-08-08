import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { BackendComponent } from './components/backend/backend.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TeaserComponent } from './components/teaser/teaser.component';


// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CategoriesComponent } from './components/produits/categories/categories.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RomansPoliciersComponent } from './components/produits/romans-policiers/romans-policiers.component';
import { RomanceComponent } from './components/produits/romance/romance.component';
import { ReligionComponent } from './components/produits/religion/religion.component';
import { HumourComponent } from './components/produits/humour/humour.component';
import { EnfantsComponent } from './components/produits/enfants/enfants.component';
import { FamilleComponent } from './components/produits/famille/famille.component';
import { DeveloppementPersonnelComponent } from './components/produits/developpement-personnel/developpement-personnel.component';
import { PhilosophieComponent } from './components/produits/philosophie/philosophie.component';
import { ItemDetailsComponent } from './components/produits/item-details/item-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };


const appRoutes: Routes = [
  // {
  //   path: 'project/:id',
  //   canActivate: [AuthGuardService],
  //   component: ProjectDetailsComponent,
  // },

  // page par défaut (doit être tout en haut de la liste)
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full'
  },
  {
    path: 'philosophie/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'religion/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'famille/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'developpement-personnel/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'humour/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'romans-policiers/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'enfants/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'religion/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: 'religion',
    component: ReligionComponent
  },
  {
    path: 'philosophie',
    component: PhilosophieComponent
  },
  {
    path: 'developpement-personnel',
    component: DeveloppementPersonnelComponent
  },
  {
    path: 'famille',
    component: FamilleComponent
  },
  {
    path: 'humour',
    component: HumourComponent
  },
  {
    path: 'enfants',
    component: EnfantsComponent
  },
  {
    path: 'romance',
    component: RomanceComponent
  },
  {
    path: 'romans-policiers',
    component: RomansPoliciersComponent,
  },
  // page introuvable (doit être tout en bas de la liste)

  {
    path: '**',
    redirectTo: 'presentation',
    pathMatch: 'full'
  },

];
@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    TeaserComponent,
    PresentationComponent,
    CategoriesComponent,
    RomansPoliciersComponent,
    RomanceComponent,
    ReligionComponent,
    HumourComponent,
    EnfantsComponent,
    FamilleComponent,
    DeveloppementPersonnelComponent,
    PhilosophieComponent,
    ItemDetailsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    // PerfectScrollbarModule,
    // AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
