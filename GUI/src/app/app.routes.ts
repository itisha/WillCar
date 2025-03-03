import {Routes} from '@angular/router';
import {MainRoutes} from './pages/main/main.routes';
import {ProfileRoutes} from './pages/profile/profile.routes';
import {AuthorizationRoutes} from "./pages/authorization-page/authorization-page.routes";
import {MyBookingsRoutes} from "./pages/my-bookings/my-bookings.routes";
import {MyProposedRoutes} from "./pages/my-proposed/my-proposed.routes";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full'
  },
  ...MainRoutes,
  ...ProfileRoutes,
  ...AuthorizationRoutes,
  ...MyBookingsRoutes,
  ...MyProposedRoutes
];
