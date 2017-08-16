import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLoaderComponent } from './j-loader.component';

describe('JLoaderComponent', () => {
  let component: JLoaderComponent;
  let fixture: ComponentFixture<JLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
