import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MatchesEditComponent } from '../matches/matches-edit/matches-edit.component';

@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<MatchesEditComponent> {
  canDeactivate(component: MatchesEditComponent) {
    if (component.editForm.dirty) {
      return window.confirm('Unsaved changes will be lost');
    }
    return true;
  }
}
