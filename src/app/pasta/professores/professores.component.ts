import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  professores =[
    {
      id: '1',
      nome: 'Vanessa',
      idade: '28',
      estado: 'solteira'
    },
    {
      id: '5',
      nome: 'Juan Pablo',
      idade: '47',
      estado: 'casado'
    },
    {
      id: '2',
      nome: 'Milena',
      idade: '24',
      estado: 'casada'
    },
    {
      id: '3',
      nome: 'Igor',
      idade: '32',
      estado: 'solteiro'
    },
    {
      id: '4',
      nome: 'Luana',
      idade: '34',
      estado: 'solteira'
    },

    {
      id: '10',
      nome: 'Juniro',
      idade: '34',
      estado: 'solteiro'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
