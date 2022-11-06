import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    declarations: [],
    exports: [
        ButtonModule,
        CardModule,
        TableModule,
        DynamicDialogModule,
        InputTextModule,
        DropdownModule,
        InputNumberModule,
        ConfirmDialogModule,
        ProgressSpinnerModule
    ]
})
export class PrimengModule { }