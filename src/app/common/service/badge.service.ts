import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  private status = true

  private subject = new BehaviorSubject(false);
  chanelBadge = this.subject.asObservable();

  addTv(): void{
    this.subject.next(true)
  }

  remuveTv(): void{
    this.subject.next(false)
  }
}
