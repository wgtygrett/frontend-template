import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { dialogOpenClose } from '../../animations'
import { DialogService } from '../../services/dialog.service'

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  animations: [dialogOpenClose],
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() id: string
  @Input() title: string
  isOpen: 'open' | 'closed' = 'closed'
  private element: any

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = this.el.nativeElement
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('dialog must have an id')
      return
    }
    document.body.appendChild(this.element)

    this.element.addEventListener('click', (el: { target: { id: string } }) => {
      if (el.target.id === 'dialog-container') {
        this.close()
      }
    })

    this.dialogService.add(this)
  }

  ngOnDestroy(): void {
    this.dialogService.remove(this.id)
    this.element.remove()
  }

  open(): void {
    this.element.style.display = 'block'
    document.body.classList.add('dialog-open')
    this.isOpen = 'open'
  }

  close(): void {
    document.body.classList.remove('dialog-open')
    this.isOpen = 'closed'
    setTimeout(() => {
      this.element.style.display = 'none'
    }, 300)
  }
}
