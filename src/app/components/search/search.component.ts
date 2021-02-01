import { Component,  } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent   {

  artistas : any[] = [];
  loading: boolean; 

  constructor(private spotify: SpotifyService ) { 

  }





  buscar(buscar1: string){
    this.loading = true

    this.spotify.getArtistas(buscar1).subscribe((data: any)=>{
      this.artistas = data;
     this.loading = false

    }, (errorVacio)=>{
      this.loading = false
      this.artistas = [];

    })
  console.log(buscar1)
  }

}
