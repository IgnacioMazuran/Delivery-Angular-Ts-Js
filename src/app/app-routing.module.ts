import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlatosComponent } from './components/platos/platos.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PlatoAdminComponent } from './components/plato-admin/plato-admin.component';
import { PlatoListaComponent } from './components/plato-lista/plato-lista.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'platos', component: PlatosComponent },
    { path: 'detallePlato/:id', component: DetallePlatoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    //{ path: '**', pathMatch: 'full', redirectTo: 'home' }  , //comentado funciona la lista de platos, sino me manda al home
    { path: 'lista', component: PlatoListaComponent },
    { path: 'admin/:id', component: PlatoAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
