import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersUiComponent } from './users-ui.component';

describe('UsersUiComponent', () => {
  let component: UsersUiComponent;
  let fixture: ComponentFixture<UsersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
