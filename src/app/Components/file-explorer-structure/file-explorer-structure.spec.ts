import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerStructure } from './file-explorer-structure';

describe('FileExplorerStructure', () => {
  let component: FileExplorerStructure;
  let fixture: ComponentFixture<FileExplorerStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExplorerStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExplorerStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
