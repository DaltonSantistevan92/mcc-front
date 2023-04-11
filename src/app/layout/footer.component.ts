import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
