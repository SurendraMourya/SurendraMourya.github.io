import { MediaMatcher } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav'
import { MatIconRegistry } from '@angular/material/icon'
import { NavService } from './shared/services/nav.service'
import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild
} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'websiteresume';
  @ViewChild('snav') snav: MatSidenav

  mobileQuery: MediaQueryList
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void

  constructor(
    cdf: ChangeDetectorRef,
    media: MediaMatcher,
    matIconRegistry: MatIconRegistry,
    private navService: NavService,
    private meta: Meta,
    private title: Title
  ) {
    // Meta tags
    this.title.setTitle('Home | Surendra Mourya')
    this.meta.addTags([
      { name: 'og:title', content: 'Home | Surendra Mourya' },
      {
        name: 'og:description',
        content: `Just a normal person who tries to explore the world and find his purpose.`
      },
      { name: 'og:url', content: 'https://surendramourya.me' },
      {
        name: 'og:image',
        content: 'https://surendramourya.me/assets/images/surendramourya.jpeg'
      },
      { name: 'type', content: 'website' }
    ])

    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => cdf.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)

    // Add custom material icons
    matIconRegistry.registerFontClassAlias('fa')
    matIconRegistry.registerFontClassAlias('fab')

    // close nav on mobile
    this.navService.target.subscribe(data => {
      setTimeout(() => {
        this.closeSideNav()
      }, 1000)
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }

  closeSideNav() {
    if (this.mobileQuery.matches) {
      // mobile
      this.snav.close()
    }
  }
}
