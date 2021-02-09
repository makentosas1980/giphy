import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PreviewGiphyComponent } from '../preview-giphy/preview-giphy.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  url: string = "";
  foundGifs: any[] = [];
  perPage: number = 12;
  offset: number = 12;
  result: any;
  endReached = false;
  subscription: Subscription = new Subscription;
  query: string = '';

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  openDialog(url: string): void {
    const dialogRef = this.dialog.open(PreviewGiphyComponent, {
      width: '500px',
      data: {url: url}
    });
  }

  ngOnInit(): void {
    this.dataService.trendingGifs().subscribe((res: any) => {
      this.foundGifs = res.data;
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  performSearch(searchTerm: string): void {
    this.foundGifs = [];
    this.search();
  }

  loadMore() {
    this.offset = this.offset + this.perPage;
    this.search();
  }

  search() {
    this.dataService.searchGifs(this.query, this.perPage, this.offset)
    .subscribe((res: any) => {
      this.result = res.data;
      this.foundGifs = this.foundGifs.concat(this.result);
    });
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
