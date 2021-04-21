import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos =[
    {
      id: '1',
      nome: 'Jorge',
      idade: '26',
      estado: 'solteiro'
    },
    {
      id: '5',
      nome: 'Gabriel',
      idade: '17',
      estado: 'solteiro'
    },
    {
      id: '2',
      nome: 'Juan Pablo',
      idade: '548',
      estado: 'casado'
    },
    {
      id: '3',
      nome: 'igor',
      idade: '18',
      estado: 'solteiro'
    },
    {
      id: '4',
      nome: 'Matheus',
      idade: '22',
      estado: 'solteiro'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
