import { Component, OnInit, ViewContainerRef, inject  } from '@angular/core';
import { IUrl } from '../interfaces/data-url.interface';
import { SelectorService } from '../services/selector.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dataUrl! : IUrl;
  viewContainerRef = inject(ViewContainerRef);
  selectorService = inject(SelectorService);

  ngOnInit(): void {
    const myUrlSelector = this.selectorService.getSelector(this.viewContainerRef.element.nativeElement.tagName.toLowerCase());
    this.dataUrl = { url : myUrlSelector };
  }

 
}
