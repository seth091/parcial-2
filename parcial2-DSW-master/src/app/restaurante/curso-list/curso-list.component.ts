import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-Curso-list',
  templateUrl: './Curso-list.component.html',
  styleUrls: ['./Curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  Cursos: Array<Curso> = [];
  selectedCurso! : Curso;
  selected: Boolean = false;
  constructor(private CursoService : CursoService) { }

  getCursos(): void {
    this.CursoService.getCursos().subscribe((Cursos) => {
      this.Cursos = Cursos;
    });
  }

  getCertifica(): number {
    let certificacion = false;
    let idCertificado = 0;
    this.Cursos.forEach((Curso) => {
      if (Curso.offers_certificate != certificacion) {
        idCertificado = Curso.id;
      }
    });
    return idCertificado;
  }

  getNombreDelCursoConMayorPuntuacion(): string {
    let idCertificado = this.getCertifica();
    let CursoConMayorPuntuacion = this.Cursos.find(Curso => Curso.id === idCertificado);
    return CursoConMayorPuntuacion ? CursoConMayorPuntuacion.title : '';
  }

  onSelected(Curso: Curso): void {
    this.selected = true;
    this.selectedCurso = Curso;
  }


  ngOnInit() {
    this.getCursos();
  }

}
