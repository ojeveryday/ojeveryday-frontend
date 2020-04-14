import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckComponent } from './check.component';
import { CheckModule } from './check.module';

describe('CheckComponent', () => {
    let component: CheckComponent;
    let fixture: ComponentFixture<CheckComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CheckModule, RouterTestingModule, BrowserAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
