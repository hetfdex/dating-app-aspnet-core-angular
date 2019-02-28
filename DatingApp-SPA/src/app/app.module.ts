import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import {TimeAgoPipe} from 'time-ago-pipe';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AlertifyService } from './services/alertify.service';
import { MessagesComponent } from './messages/messages.component';
import { ConnectionsComponent } from './connections/connections.component';
import { appRoutes } from './routes';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { MatchesListComponent } from './matches/matches-list/matches-list.component';
import { MatchesCardComponent } from './matches/matches-card/matches-card.component';
import { MatchesDetailsComponent } from './matches/matches-details/matches-details.component';
import { MatchesDetailsResolver } from './resolvers/matches-details.resolver';
import { MatchesListResolver } from './resolvers/matches-list.resolver';
import { MatchesEditComponent } from './matches/matches-edit/matches-edit.component';
import { MatchesEditResolver } from './resolvers/matches-edit.resolver';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './matches/photo-editor/photo-editor.component';
import { ListsResolver } from './resolvers/list.resolver';
import { MessagesResolver } from './resolvers/messages.resolver';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      ConnectionsComponent,
      MatchesListComponent,
      MatchesCardComponent,
      MatchesDetailsComponent,
      MatchesEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      PaginationModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      BsDatepickerModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MatchesDetailsResolver,
      MatchesListResolver,
      MatchesEditResolver,
      ListsResolver,
      PreventUnsavedChangesGuard,
      MessagesResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
