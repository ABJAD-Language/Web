import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'abjad-parsing-analysis',
  templateUrl: './parsing-analysis.component.html',
  styleUrls: ['./parsing-analysis.component.scss']
})
export class ParsingAnalysisComponent {

  @Input() bindings: any[] = [];

}
