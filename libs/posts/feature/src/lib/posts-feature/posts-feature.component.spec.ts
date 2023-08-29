import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsFeatureComponent } from './posts-feature.component';

describe('PostsFeatureComponent', () => {
  let component: PostsFeatureComponent;
  let fixture: ComponentFixture<PostsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
