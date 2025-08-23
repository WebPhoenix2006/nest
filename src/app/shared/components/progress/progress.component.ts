import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() color: string = '#4caf50';
  @Input() height: string = '8px';
  @Input() showLabel: boolean = true;
}
