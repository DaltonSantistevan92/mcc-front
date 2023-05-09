import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

  public getSelector(nameSelector: string): string {
    return nameSelector.replace('app-', '');
  }
}
