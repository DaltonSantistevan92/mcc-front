import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IUrl } from '../../interfaces/data-url.interface';

@Component({
  selector: 'app-link-login',
  templateUrl: './link-login.component.html',
  styles : [ `  ` ]
})
export class LinkLoginComponent {
  @Input() dataUrl! : IUrl;
  router = inject(Router);

  enviarDatos() {
    this.router.navigate(['/auth/login'], { queryParams: this.dataUrl });
  }

}
