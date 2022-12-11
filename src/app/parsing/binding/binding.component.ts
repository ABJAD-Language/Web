import {Component, Input} from '@angular/core';

@Component({
  selector: 'abjad-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  @Input() binding: any;

  getFields(element: any = this.binding) {
    if (!element) return [];
    return Object.keys(element).filter(k => k != "_type" && !Array.isArray(element[k]) && !this.isBinding(element[k]));
  }

  getChildrenBindings() {
    if (!this.binding) return [];
    return Object.keys(this.binding).filter(k => !Array.isArray(this.binding[k]) && this.isBinding(this.binding[k]))
  }

  getChildrenListOfBindings() {
    if (!this.binding) return [];
    return Object.keys(this.binding).filter(k => Array.isArray(this.binding[k]) && this.isBinding(this.binding[k][0]))
  }

  getChildrenListsOfNonBindings() {
    if (!this.binding) return [];
    return Object.keys(this.binding).filter(k => Array.isArray(this.binding[k]) && !this.isBinding(this.binding[k][0]))
  }

  private isBinding( element: any) {
    return element && Object.keys(element).includes("_type");
  }
}
