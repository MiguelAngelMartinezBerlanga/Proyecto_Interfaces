import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CestaService {
    private countrySource = new BehaviorSubject<string>('');

    country$ = this.countrySource.asObservable();

    setCountry(value: string) {
        this.countrySource.next(value);
    }

    private postalCodeSource = new BehaviorSubject<string>('');

    postalCode$ = this.postalCodeSource.asObservable();

    setPostalCode(value: string) {
        this.postalCodeSource.next(value);
    }

    private placeSource = new BehaviorSubject<string>('');

    place$ = this.placeSource.asObservable();

    setPlace(value: string) {
        this.placeSource.next(value);
    }

    private emailSource = new BehaviorSubject<string>('');

    email$ = this.emailSource.asObservable();

    setEmail(value: string) {
        this.emailSource.next(value);
    }

    private nameSource = new BehaviorSubject<string>('');

    name$ = this.nameSource.asObservable();

    setName(value: string) {
        this.nameSource.next(value);
    }

    private surnamesSource = new BehaviorSubject<string>('');

    surnames$ = this.surnamesSource.asObservable();

    setSurnames(value: string) {
        this.surnamesSource.next(value);
    }

    private streetSource = new BehaviorSubject<string>('');

    street$ = this.streetSource.asObservable();

    setStreet(value: string) {
        this.streetSource.next(value);
    }

    private houseSource = new BehaviorSubject<string>('');

    house$ = this.houseSource.asObservable();

    setHouse(value: string) {
        this.houseSource.next(value);
    }

    private citySource = new BehaviorSubject<string>('');

    city$ = this.citySource.asObservable();

    setCity(value: string) {
        this.citySource.next(value);
    }

    private phoneSource = new BehaviorSubject<string>('');

    phone$ = this.phoneSource.asObservable();

    setPhone(value: string) {
        this.phoneSource.next(value);
    }

    private nieSource = new BehaviorSubject<string>('');

    nie$ = this.nieSource.asObservable();

    setNie(value: string) {
        this.nieSource.next(value);
    }
}