import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Giphy, IGiphy } from '../interfaces/giphy';
import { PreviewGiphyComponent } from '../preview-giphy/preview-giphy.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  endReached = false;
  foundGifs: IGiphy[] = [];
  offset: number = 12;
  perPage: number = 12;
  query: string = '';
  url: string = "";

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  openDialog(imageUrl: string): void {
    const dialogRef = this.dialog.open(PreviewGiphyComponent, {
      width: '600px',
      data: {imageUrl: imageUrl}
    });
  }

  ngOnInit(): void {
    this.dataService.trendingGifs().subscribe((res: any) => {
      this.addGifsToArray(res.data);
    });
  }

  performSearch(searchTerm: string): void {
    this.foundGifs = [];
    this.search();
  }

  search() {
    this.dataService.searchGifs(this.query, this.perPage, this.offset)
    .subscribe((res: any) => {
      this.addGifsToArray(res.data);
    });
  }

  addGifsToArray(response: any) {
    for (const gif of response) {
      const giphyUrl = gif.images.downsized.url;
      const giphy = new Giphy(giphyUrl);
      this.foundGifs.push(giphy);
    }
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop)
      + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      this.loadMore();
    }
  }

  loadMore() {
    this.offset = this.offset + this.perPage;
    this.search();
  }

  keyPressAlphaNumeric(event: any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
