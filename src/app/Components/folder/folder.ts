import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-folder',
  imports: [FaIconComponent],
  templateUrl: './folder.html',
  styleUrl: './folder.css',
  inputs: ['file']
})
export class Folder {

//   file: any;
//   faFile: any;
//   faFolderOpen: any;
//   faFolderClosed: any;
  
//   toggle() {
//     if (this.file.isFolder) {
//       this.file.open = !this.file.open;
//     }
//   }

//   // Optional: file type icons
//   getFileIcon(name: string): string {
//     const ext = name.split('.').pop()?.toLowerCase();
//     switch (ext) {
//       case 'js': return '🟨';
//       case 'css': return '🎨';
//       case 'html': return '🌐';
//       case 'json': return '📝';
//       case 'ico': return '🔹';
//       default: return '📄';
//     }
//   }
// }
}
