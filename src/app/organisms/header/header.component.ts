import { Component, OnInit } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavigationService } from '../../services/navigation.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  webAppTitle = "Wendy's Frontend Template Example"
  menuIcon: IconDefinition = faBars

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.navService.setShowNav(true)
  }
}
