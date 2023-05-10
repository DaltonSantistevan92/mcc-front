import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisabledInput]'
})
export class DisabledInputDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('focus', ['$event'])
  onFocus(event: FocusEvent) {
    this.elementRef.nativeElement.blur();
  }

}
