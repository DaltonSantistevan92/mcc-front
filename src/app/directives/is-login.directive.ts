import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Directive({
  selector: '[isLogin]',
})
export class IsLoginDirective {

  auth = inject(AuthService);
  viewContainerRef = inject(ViewContainerRef);
  templateRef = inject(TemplateRef<any>);

 
  @Input() set isLogin( valor: boolean ) { 
    const token = this.auth.estasAutenticado();

    const valorActualizado = token ? valor : !valor;

    this.actualizarVista(valorActualizado);
   
  };

  actualizarVista(valor: boolean){
    this.viewContainerRef.clear();
    if(valor) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);  //crea la lista embebida
    }
  }

}
