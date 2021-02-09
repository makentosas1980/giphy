import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-giphy-data',
  templateUrl: './giphy-data.component.html',
  styleUrls: ['./giphy-data.component.scss']
})
export class GiphyDataComponent {

  constructor(
    public dialogRef: MatDialogRef<SearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchComponent
  ) { }

}
