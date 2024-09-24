import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLess } from '@fortawesome/free-brands-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardTitle?: string = 'Titulo';
  @Input() cardContent?: string = 'Some content';
  @Input() cardImg?: string = 'img';

  more = faPlus;
  minus = faMinus;
}
