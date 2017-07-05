/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabAdvancedComponent } from './tab-advanced.component';
import {TabService} from "../tab.service";
import {Messages} from "../../messages";
import {PubkeyComponent} from "../pubkey/pubkey.component";
import {EvalorderComponent} from "../evalorder/evalorder.component";
import {ReqhandlersComponent} from "../reqhandlers/reqhandlers.component";

describe('TabAdvancedComponent', () => {
  let component: TabAdvancedComponent;
  let fixture: ComponentFixture<TabAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TabAdvancedComponent, PubkeyComponent, EvalorderComponent, ReqhandlersComponent ],
      providers: [ TabService, Messages]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
