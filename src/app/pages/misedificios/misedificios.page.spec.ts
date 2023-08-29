import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisedificiosPage } from './misedificios.page';

describe('MisedificiosPage', () => {
  let component: MisedificiosPage;
  let fixture: ComponentFixture<MisedificiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisedificiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
