import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
 
  matriz: any[11][11] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imagem = true;
  status = "";
  mensagem = "";

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

btnClick(){
  this.imagem = !this.imagem;
  return this.imagem;
}

visivel(){
  if (this.imagem == true){
    this.status = "Visível";    
  }else{
    this.status = "Invisível"
  }
  return this.status;
}

esconderImagem(){
  if (this.visivel() == "Visível"){  
     this.mensagem = "block"
  }else{
    this.mensagem = "none"
  }
  return this.mensagem;
}
}

