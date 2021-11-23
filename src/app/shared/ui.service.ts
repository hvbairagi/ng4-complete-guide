import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UIService {
  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(message, action, duration = 3000) {
    this.snackbar.open(message, action, { duration });
  }
}
