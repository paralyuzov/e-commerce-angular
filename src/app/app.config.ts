import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { routes } from './app.routes';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { cpuReducer } from './store/cpu/cpu.reducer';
import { CpuEffects } from './store/cpu/cpu.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({
      cpu: cpuReducer,
    }),

    provideEffects([CpuEffects]),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      trace: false,
      traceLimit: 75,
    }),

    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    }),
  ],
};
