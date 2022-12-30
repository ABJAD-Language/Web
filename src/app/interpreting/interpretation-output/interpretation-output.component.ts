import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-interpretation-output',
  templateUrl: './interpretation-output.component.html',
  styleUrls: ['./interpretation-output.component.scss']
})
export class InterpretationOutputComponent {


  @Input() output: string = '';
  @Input() loading: boolean = false;

}
