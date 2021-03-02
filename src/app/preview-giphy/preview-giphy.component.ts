import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGiphy } from '../interfaces/giphy';

@Component({
  selector: 'app-preview-giphy',
  templateUrl: './preview-giphy.component.html',
  styleUrls: ['./preview-giphy.component.scss']
})
export class PreviewGiphyComponent {

  constructor(
    public dialogRef: MatDialogRef<PreviewGiphyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGiphy
  ) { }

}
