import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsDataAccessComponent } from './posts-data-access.component';

describe('PostsDataAccessComponent', () => {
  let component: PostsDataAccessComponent;
  let fixture: ComponentFixture<PostsDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
