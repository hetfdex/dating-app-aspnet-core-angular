import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { MatchesListComponent } from './matches/matches-list/matches-list.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children: [
        { path: 'matches', component: MatchesListComponent },
        { path: 'connections', component: ConnectionsComponent },
        { path: 'messages', component: MessagesComponent }
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
