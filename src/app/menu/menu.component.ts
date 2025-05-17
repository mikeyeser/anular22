import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuCardComponent } from './menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private api : MenuService){}

menu : Menu[] = []



ngOnInit(){
     this.api.getAll().subscribe((resp:any)=> {
      // console.log(resp)
      this.menu = resp
     })
  }

}
