import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig }  from '@angular/router';
import { routes } from './app.routes'

bootstrap(<any>AppComponent, [ provideRouter(<RouterConfig>routes), HTTP_PROVIDERS]);
