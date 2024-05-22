import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const token = userService.getJwtToken();
  const modifiedRequest = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`),
  });

  return next(modifiedRequest);
};
