import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NuevoProductoComponent } from './nuevo-producto.component';

describe('NuevoProductoComponent', () => {
  let component: NuevoProductoComponent;
  let fixture: ComponentFixture<NuevoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        InputNumberModule
      ],
      declarations: [ NuevoProductoComponent ],
      providers: [DynamicDialogRef,
        DynamicDialogConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
