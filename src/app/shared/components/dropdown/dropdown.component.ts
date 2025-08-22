import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  animations: [
    trigger('toggleDropdown', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          height: '*', // let Angular calculate natural height
          opacity: 1,
          overflow: 'hidden',
        })
      ),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class DropdownComponent {
  @Input() options: { label: string; value: any; action?: () => void }[] = [];
  @Input() ellipsis: boolean = false;
  @Input() placeholder: string = '';

  @Output() selected = new EventEmitter<any>();

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any) {
    this.selected.emit(option);
    if (option.action && typeof option.action === 'function') {
      option.action();
    }
    this.isOpen = false;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
