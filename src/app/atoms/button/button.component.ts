import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() variant: string
  @Input() disabled: boolean = false
  @Input() borderRadius: string = '0.5rem'; // Default border-radius

  constructor() {}

  ngOnInit(): void {}

  getVariant(): string {
    switch (this.variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'warning':
        return 'btn-warning';
      case 'open':
        return 'btn-open';
      case 'navy':
        return 'btn-navy';
      case 'eggplant':
        return 'btn-eggplant';
      case 'blue-violet':
        return 'btn-blue-violet';
      case 'wine':
        return 'btn-wine';
      case 'emerald':
        return 'btn-emerald';
      default:
        return 'btn-primary'; // Default to primary if variant isn't recognized
    }
  }
}
