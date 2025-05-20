import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  termos = [
    { nome: '1º Termo', cor: '#DFF6C4' },
    { nome: '2º Termo', cor: '#EDE5DA' },
    { nome: '3º Termo', cor: '#A6D8A8' },
    { nome: '4º Termo', cor: '#BCE9A8' },
    { nome: '5º Termo', cor: '#FFFBCC' },
    { nome: '6º Termo', cor: '#A8B6A6' }
  ];

  adicionarTurma() {
    alert('Função de adicionar turma acionada!');
  }

  acessarTermo(termo: string) {
    alert(`Você clicou em ${termo}`);
  }
}

