import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Trabajo } from '../../trabajo';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  trabajos: Array<Trabajo> = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.trabajos = this.servicioService.devolverTrabajo();
  }

}
