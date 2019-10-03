import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-tco',
  templateUrl: './tco.component.html',
  styleUrls: ['./tco.component.css']
})
export class TcoComponent implements OnInit {

  show: number;

  manutTotal: number;
  totalGeral: number;
  recomendacao: string;
  dataEstudo: string;
  pontoIdealdeTroca: number;
  dataTest = {
    placa: 'EUN2089',
    marca: 'FIAT',
    modelo: 'SIENA',
    ano_fabricacao: 2011,
    ano_modelo: 2011,
    km_atual: 129291,
    idf: 0.9,
    peventiva: 17461.92,
    corretiva: 3812.58,
    sinistro: 210,
    outros: 3.99,
    gestao: 6147.86,
    valor_mercado: 20453.55,
    ultima_os: {
        seqos: 737133,
        data: '02/04/2015',
        km: 122867,
        valor: 1859.7,
        motivo: 'PREVENTIVA'
    },
    ultimas_prev: [{seqos: 737133, data: '02/04/2015', km: 122867, valor: 1859.7},
                   {seqos: 689737, data: '24/10/2014', km: 118025, valor: 313.7},
                   {seqos: 662325, data: '07/08/2014', km: 110274, valor: 1100}]
  };


  constructor() { }

  ngOnInit() {
    this.manutTotal = this.dataTest.peventiva + this.dataTest.corretiva + this.dataTest.outros + this.dataTest.sinistro;
    this.totalGeral = this.manutTotal + this.dataTest.gestao;
    this.dataEstudo = '22/07/2017';
    this.pontoIdealdeTroca = 1.04;
    this.recomendacao = 'Substituir';
    this.show = 0;
  }

  showDetails() {
    this.show = 1;
  }

}
