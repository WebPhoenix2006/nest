import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() buttonText: string = 'default text';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';

  @Input() buttonType: 'button' | 'submit' = 'button';
}
