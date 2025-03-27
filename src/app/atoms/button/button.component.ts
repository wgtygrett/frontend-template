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

  constructor() {}

  ngOnInit(): void {}

  getVariant(): string {
    switch (this.variant) {
      case 'primary':
        return 'btn-primary'
      case 'secondary':
        return 'btn-secondary'
      case 'warning':
        return 'btn-warning'
      case 'open':
        return 'btn-open'
      default:
        return 'btn-primary'
    }
  }
}
