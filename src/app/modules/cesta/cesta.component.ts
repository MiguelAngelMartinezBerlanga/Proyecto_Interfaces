import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-cesta',
    templateUrl: './cesta.component.html',
    standalone: true,
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class CestaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}