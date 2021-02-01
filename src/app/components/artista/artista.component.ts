import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  loading: boolean; 
  topTracks: any[]=[]

  constructor(private router: ActivatedRoute, private spotifty: SpotifyService ) {
    this.router.params.subscribe(params=>{
      console.log(params['id'])


      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    })
   }
getArtista( id: string){
  this.loading = true

  this.spotifty.getArtista( id).subscribe(artista=>{
    this.artista = artista
    console.log(artista)
    this.loading = false;

  })

}
getTopTracks( id: string){
  this.spotifty.getTopTracks(id).subscribe((topTracks: any)=>{
    console.log(topTracks)
    this.topTracks = topTracks;

  })
}


}
