import { Component, OnInit, Input  } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-Curso-detail',
  templateUrl: './Curso-detail.component.html',
  styleUrls: ['./Curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {


  @Input() CursoDetail!: Curso;
  constructor() { }

  ngOnInit() {
  }

}
