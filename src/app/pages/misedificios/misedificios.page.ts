import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-misedificios',
  templateUrl: './misedificios.page.html',
  styleUrls: ['./misedificios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MisedificiosPage implements OnInit {

  buildings = [
    { name: 'Edificio 1', address: 'Dirección 1' },
    { name: 'Edificio 2', address: 'Dirección 2' },
    // ... agregar más edificios aquí
  ];

  constructor() {}

  ngOnInit() {}

  addBuilding() {
    // Lógica para agregar un nuevo edificio
    // Podría abrir un modal o navegar a una página de formulario
  }

  editBuilding(building:any) {
    // Lógica para editar un edificio existente
    // Podría abrir un modal con un formulario de edición
  }

  createVisit(building:any) {
    // Lógica para crear una visita para un edificio
    // Podría abrir un modal o navegar a una página de formulario
  }

}
