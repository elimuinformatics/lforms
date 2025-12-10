# Angular Test Compilation Issues

The Angular unit tests are currently failing due to compilation errors. This needs to be fixed to maintain proper test coverage.

## Current Issues

1. **ngSwitch directive not recognized** in `lhc-button-popover.component.spec.ts`

   - Error: `Can't bind to 'ngSwitch' since it isn't a known property of 'ng-container'`
   - Need to properly configure CommonModule or fix component dependencies

2. **Custom component not recognized** in `lhc-item-display.component.spec.ts`
   - Error: `'lhc-item-question-text' is not a known element`
   - Need to properly declare all component dependencies in test modules

## Current Status

- ✅ **FHIR unit tests fixed**: 791 tests passing (timezone issues resolved, FHIR SDC test edge cases handled)
- ✅ **NPM workflow ready**: Uses `npm run test:fhir-unit` which covers core library functionality
- ❌ **Angular unit tests**: Still failing due to compilation issues above

## Temporary Workaround

For the NPM release workflow, we're currently running only the FHIR unit tests (`npm run test:fhir-unit`) which comprehensively test the core library functionality (791 tests).

## TODO

- [ ] Fix Angular component test module configuration
- [ ] Ensure all required modules and components are properly imported in test files
- [ ] Consider using TestBed.configureTestingModule with proper module setup
- [ ] Once fixed, update workflow to use `npm run test:unit` (both FHIR + Angular tests)

## Priority

Medium - The FHIR tests cover the core functionality, but Angular component tests should be working for complete coverage.
