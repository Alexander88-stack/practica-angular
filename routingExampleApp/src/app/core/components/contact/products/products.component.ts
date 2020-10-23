import { Component,Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  publications:Object[];
  
  constructor() {
    this.publications= [
      {name:'champis', description: 'soy ligeramente aspero pero interesante'},
      {name:'chapiñol', description: 'me llamo champiñol y soy un champiñon amargo'},
      {name:'champirrabia', description: 'comiendome se te quitara toda la rabia'}
    ]
   }

   capturarCompra(nombrePublicacionComprada){
     alert('La compra ha sido enviada al componente padre '+nombrePublicacionComprada);
   }

  ngOnInit(): void {
  }
  

}
