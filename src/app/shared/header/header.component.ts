import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  constructor(public translate: TranslateService){
    
  }


  changeLanguageToSpanish(): void {
    console.log('Idioma cambiado al Español');
    this.translate.use('es');    
    
    // window.location.reload();
  }
  // Se cambia el idioma a Inglés
  changeLanguageToEnglish(): void {
    this.translate.use('en');
    console.log('Idioma cambiado al Inglés');
    // window.location.reload();
  }
  // Se cambia el idioma a Catalan
  changeLanguageToCatalan(): void {
    this.translate.use('cat');
    console.log('Idioma cambiado al Catalan');
    // window.location.reload();
  }

}
