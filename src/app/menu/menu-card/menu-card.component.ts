import { Component, Input, input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-card',
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

 

   @Input() singleProduct? : Menu





}




