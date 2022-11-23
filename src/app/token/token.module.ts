import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokenComponent} from "./token.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzTagModule} from "ng-zorro-antd/tag";

@NgModule({
  declarations: [TokenComponent],
    imports: [CommonModule, NzModalModule, BrowserAnimationsModule, NzTagModule],
  exports: [TokenComponent]
})
export class TokenModule {}
