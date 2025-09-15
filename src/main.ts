import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// ✅ AG Grid v33+ module registration
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register once before bootstrap
ModuleRegistry.registerModules([AllCommunityModule]);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
