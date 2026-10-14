// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Angular 21 defaults TestBed to zoneless change detection; the web component
// bootstraps with zone change detection (src/main.ts), so test the same way.
@NgModule({ providers: [provideZoneChangeDetection()] })
class ZoneChangeDetectionModule {}

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  [BrowserDynamicTestingModule, ZoneChangeDetectionModule],
  platformBrowserDynamicTesting()
);

// TODO: load fhir unit tests
//const fhirContext = require.context('../test/karma', true, /\.spec\.js$/)
//fhirContext.keys().map(fhirContext);
