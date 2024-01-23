import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({

    selector: 'app-hombres',
    templateUrl: './hombres.component.html',
    standalone: true,
    imports: [RouterOutlet],
})

export class HombresComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
