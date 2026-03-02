// main.ts
// ------------------------------------------------------
// This is the ENTRY POINT of the Angular application.
// When the app starts, Angular first executes this file.
// ------------------------------------------------------


// Import bootstrapApplication from Angular.
// This function is responsible for starting (bootstrapping)
// a standalone Angular application.
import { bootstrapApplication } from '@angular/platform-browser';


// Import the global application configuration.
// This usually contains providers like routing,
// HTTP client, animations, etc.
import { appConfig } from './app/app.config';


// Import the root component of the application.
// This is the first component that gets loaded
// and displayed in the browser.
import { App } from './app/app';


// ------------------------------------------------------
// Bootstrapping the Angular Application
// ------------------------------------------------------

// bootstrapApplication() starts the Angular app.
// 1. App → Root component of the application
// 2. appConfig → Global configuration settings
bootstrapApplication(App, appConfig)

  // If any error occurs during app startup,
  // it will be caught here and printed in the browser console.
  // This helps in debugging startup issues.
  .catch((err) => console.error(err));



// SUMMARY
// ------------------------------------------------------
// • This file starts your Angular application.
// • It uses Standalone API (modern Angular approach).
// • No NgModule is required (unlike older Angular versions).
// • Errors during startup are handled with .catch().
// ------------------------------------------------------