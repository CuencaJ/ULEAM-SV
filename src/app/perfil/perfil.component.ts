import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as xml2js from 'xml-js';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  cosas: any;

  constructor(private http: HttpClient) {}

  hola() {
    this.http.get('/assets/xml.xml', { responseType: 'text' }).subscribe(
      (xmlData: string) => {
        const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonData);
        this.cosas = parsedData.usuario.datos_usuario;
      },
      (error: any) => {
        console.error('Error al cargar el archivo XML:', error);
      }
    );
  }
}
