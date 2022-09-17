import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeInputComponent } from './code-input.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [CodeInputComponent],
  imports: [CommonModule, NzInputModule, FormsModule, NzButtonModule, NzIconModule],
  exports: [
    CodeInputComponent
  ]
})
export class CodeInputModule {}
