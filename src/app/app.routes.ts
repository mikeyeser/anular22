import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MycartComponent } from './mycart/mycart.component';
import { ErrorComponent } from './error/error.component';


export const routes: Routes = [
    {path: "", redirectTo: 'menu', pathMatch: "full"},
    {path: "main", component : MainComponent},
    {path: "about", component : AboutComponent},
    {path: "menu", component : MenuComponent},
    {path: "mycart", component : MycartComponent},
    {path: "**", component : ErrorComponent}
];
