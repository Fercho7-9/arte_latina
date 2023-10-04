import { AfterViewInit, Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'box-card-team',
  templateUrl: './box-card-team.component.html',
  styleUrls: ['./box-card-team.component.css']
})
export class BoxCardTeam implements AfterViewInit {
  @Input() correo: string = '';
  @Input() carrera: string = '';
  @Input() dependencia: string = '';
  @Input() img: string = '';
  @Input() nombre: string = '';
  @Input() proyectos: string = '';
  @Input() tiempoActividad: string = '';
  isPhone: boolean = false;
  showMenu: boolean = false;

  constructor(private breakpointObs: BreakpointObserver) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.breakpointObs.observe(['(min-width: 540px)']).subscribe((res) => {
        if (res.matches) {
          this.isPhone = false;
        } else {
          this.isPhone = true;
        }
      });
    }, 0);
  }

}
