import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CestaService {
    private placeSource = new BehaviorSubject<string>('');

    place$ = this.placeSource.asObservable();

    setPlace(value: string) {
        this.placeSource.next(value);
    }

    private postalCodeSource = new BehaviorSubject<string>('');

    postalCode$ = this.postalCodeSource.asObservable();

    setPostalCode(value: string) {
        this.postalCodeSource.next(value);
    }
}