import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() cardTitle?:string ='Titulo'
  @Input() cardContent?:string ='Some content'
  @Input() cardImg?:string = 'img'

}
