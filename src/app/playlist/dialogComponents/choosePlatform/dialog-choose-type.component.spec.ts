import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChooseTypeComponent } from './dialog-choose-type.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import {SpeedTestModule} from "ng-speed-test";

describe('DialogChooseTypeComponent', () => {
  let component: DialogChooseTypeComponent;
  let fixture: ComponentFixture<DialogChooseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChooseTypeComponent, TranslatePipe ],
      imports: [ MatDialogModule, RouterTestingModule, TranslateModule.forRoot(), SpeedTestModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChooseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
