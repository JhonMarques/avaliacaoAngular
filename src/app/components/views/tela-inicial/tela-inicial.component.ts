import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {


  valor1 = 1;
  valor2 = 0;
  valor3 = 0;
 
  constructor() { }

  ngOnInit(): void {
   
  }

  
resultFibonacci(){
    
    this.valor3 = this.valor2 + this.valor1;
    this.valor1 = this.valor2;
    this.valor2 = this.valor3;

}


}