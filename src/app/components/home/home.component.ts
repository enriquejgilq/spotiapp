import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  // paises : any [] = [];
  constructor(/*private http : HttpClient */ private spotify: SpotifyService) {
    this.error = false
    this.loading = true;

    this.spotify.getNewRelease().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorService)=>{
      this.loading = false;
      this.error = true;
      this.mensajeError = errorService.error.error.message;
    });

    /* 
   Ejemplo de peticion GET 
   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((res: any) => {
      console.log(res)
      this.paises  = res
    })*/
  }

  ngOnInit(): void {}
}
