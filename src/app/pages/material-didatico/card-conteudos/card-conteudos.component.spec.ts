/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardConteudosComponent } from './card-conteudos.component';

describe('CardConteudosComponent', () => {
  let component: CardConteudosComponent;
  let fixture: ComponentFixture<CardConteudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConteudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConteudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
