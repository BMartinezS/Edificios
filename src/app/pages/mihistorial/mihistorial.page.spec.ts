import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MihistorialPage } from './mihistorial.page';

describe('MihistorialPage', () => {
  let component: MihistorialPage;
  let fixture: ComponentFixture<MihistorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MihistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
