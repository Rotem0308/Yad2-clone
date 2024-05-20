import { HostListener, inject } from '@angular/core';
import { CanActivateFn, NavigationStart, Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';

export const userFormGuard: CanActivateFn = (route, state) => {
  const formService = inject(FormDataService);
  const router = inject(Router);


  return true;
};
