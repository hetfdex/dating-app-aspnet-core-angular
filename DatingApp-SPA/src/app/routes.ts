import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { MatchesListComponent } from './matches/matches-list/matches-list.component';
import { MatchesDetailsComponent } from './matches/matches-details/matches-details.component';
import { MatchesDetailsResolver } from './resolvers/matches-details.resolver';
import { MatchesListResolver } from './resolvers/matches-list.resolver';
import { MatchesEditComponent } from './matches/matches-edit/matches-edit.component';
import { MatchesEditResolver } from './resolvers/matches-edit.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children: [
        { path: 'matches', component: MatchesListComponent, resolve: {users: MatchesListResolver} },
        { path: 'matches/edit', component: MatchesEditComponent, resolve: {user: MatchesEditResolver} },
        { path: 'matches/:id', component: MatchesDetailsComponent, resolve: {user: MatchesDetailsResolver} },
        { path: 'connections', component: ConnectionsComponent },
        { path: 'messages', component: MessagesComponent }
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
