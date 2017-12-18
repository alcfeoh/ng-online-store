import {Component, Input } from '@angular/core';

@Component({
  selector: 'ngs-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  @Input()
  title;

  @Input()
  description;

}
