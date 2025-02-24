import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
//Esto es un comentario
bootstrapApplication(AppComponent)
  .catch((error) => console.error(error));
