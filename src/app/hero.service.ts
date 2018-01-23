import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message-service.service';

import { Injectable } from '@angular/core';

@Injectable()
export class HeroService 
constructor(private messageService: MessageService) { }
   getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}
}

