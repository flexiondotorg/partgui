import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageBarComponent } from './percentage-bar.component';
import { MdDialogModule } from '@angular/material';
import { ModalsModule } from '../../modals.module';
import { RpcModule } from '../../../core/rpc/rpc.module';
import { SharedModule } from '../../../shared/shared.module';

describe('PercentageBarComponent', () => {
  let component: PercentageBarComponent;
  let fixture: ComponentFixture<PercentageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RpcModule.forRoot(),
        ModalsModule,
        MdDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update progress', () => {
    component.updateProgress(5);
    expect(component.syncPercentage).toEqual(5);
  });
});
