import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.css']
})
export class ModalityComponent implements OnInit {


  brandList: string[] = [
    'NISSAN'
  ];

  modelList: string[] = [
    'VERSA 1.6',
    'MARCH 1.0',
    'KICKS 1.6 AT'
  ];

  openAll: boolean;

  constructor() { }

  ngOnInit() {
    this.openAll = false;
  }

  openExpansion() {
    this.openAll = true;
  }

  closeExpansion() {
    this.openAll = false;
  }
}
