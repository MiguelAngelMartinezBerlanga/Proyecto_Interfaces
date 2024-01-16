import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'resumen-card',
    templateUrl: './resumen-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ResumenCardComponent implements OnInit {
  ngOnInit(): void {}
}