import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mihistorial',
  templateUrl: './mihistorial.page.html',
  styleUrls: ['./mihistorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MihistorialPage implements OnInit {

  visits = [
    {
      building: 'Edificio 1',
      date: '2023-08-25',
      description: 'Inspección de seguridad, limpieza',
      charge: 150,
    },
    {
      building: 'Edificio 2',
      date: '2023-07-20',
      description: 'Reparación de ascensor',
      charge: 300,
    },
    // ... añadir más visitas aquí
  ];

  constructor() { }

  ngOnInit() {
  }

}
