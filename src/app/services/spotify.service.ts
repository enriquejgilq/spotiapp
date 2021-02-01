import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("servicio de spotify!!! ");
  }
    //token de autenticacion vence cada 60 min!!!

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query}`; 
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDx9giXJ2vw4xQqrU5t0xmrr5j--RqBuQtpHEVq4FiT1H5I_ZnHqVGBC5qM6pMuug1sn73o57Noq3Uoxxg",
    });
    return this.http.get(url, { headers });
  }
  getNewRelease() {
   return this.getQuery('browse/new-releases?limit=20').pipe(map( data=> data['albums'].items)); 
  }
  getArtistas(buscar1: string) {
    return this.getQuery(`search?q=${buscar1}&type=artist&limit=15`).pipe(map((data) => data["artists"].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map((data) => data["artists"].items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=co`)
    .pipe(map((data) => data["tracks"]));
  }


}
