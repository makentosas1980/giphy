import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //you need your own giphy API here
  giphyApi = '';

  constructor(private http: HttpClient) { }

  searchGifs(searchTerm: string, maxResult: number, offset: number) {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${this.giphyApi}&q=${searchTerm}&offset=${offset}&limit=${maxResult}`;
    return this.http.get(url);
  }

  trendingGifs() {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${this.giphyApi}&limit=12`;
    return this.http.get(url);
  }


}
