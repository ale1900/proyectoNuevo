import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';

@Injectable()
export class ServicioService {

  public trabajos: Array<Trabajo> = [new Trabajo (1,'Trabajo 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','http://vignette1.wikia.nocookie.net/howto/images/5/53/Wikimedia-logo.png/revision/latest?cb=20060925163236&path-prefix=es'), new Trabajo (2,'Trabajo 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','./assets/header.png'), new Trabajo (3,'Trabajo 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','https://upload.wikimedia.org/wikipedia/en/d/d7/Mercadona.png')]


  constructor() { }



devolverTrabajo(): Array<Trabajo> {
  return this.trabajos;
}

}
