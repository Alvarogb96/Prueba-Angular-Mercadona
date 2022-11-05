import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';

@NgModule({
    declarations: [],
    exports: [
        ButtonModule,
        CardModule,
        TableModule
    ]
})
export class PrimengModule { }