import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})

export class CajaComponent implements OnInit {
 
  @Input() nombrePublicacion: string = "Nombre del Producto";

  @Output() compraMandada = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  confirmacionCompra(){
    console.log('Compra realizada con exito!');
    
    this.nombrePublicacion = 'champiñion'
    this.compraMandada.emit(this.nombrePublicacion)
  }
}

