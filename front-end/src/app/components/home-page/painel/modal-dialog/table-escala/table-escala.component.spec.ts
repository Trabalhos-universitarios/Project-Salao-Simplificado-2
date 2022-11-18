import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEscalaComponent } from './table-escala.component';

describe('TableEscalaComponent', () => {
  let component: TableEscalaComponent;
  let fixture: ComponentFixture<TableEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
