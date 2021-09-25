## 2.5.3 (2021-09-20)

- Various bug fixes

## 2.5.2 (2021-09-09)

- Various bug fixes
- Refactoring and optimizing code

## 2.5.1 (2021-08-31)

- Various bug fixes
- Updating documentation regarding ffmpeg
- Webviewer Audio should now transpile to es5

## 2.5.0 (2021-08-26)

- Webviewer Audio is now backwards compatible with Webviewer 7.x
- Read only mode is now respected when changed after initial load
- Multiple audio instances should now work and play their appropriate audio tracks

## 2.4.2 (2021-08-16)

- Bugfix for waveform peaks being incorrect and having trouble loading

## 2.4.0 (2021-08-12)

- Viewer now respects read only mode
- Updating styling of tool should reflect when creating regions
- Waveform should now be responsive
- Some ie11 compatibility fixes. 
    - ie11 Video/Audio editing disabled. 
    - ie11 Waveform does not render.
- Added ability to load video as a script tag
    - Added a `Loading as Script Tag` section to README


## 2.2.0 (2021-08-05)

- Updated package to work with WebViewer 8.0 and newer

## 2.1.0 (2021-09-03)

- Added getWaveSurfer API to retrieve the underlying WaveSurfer object.

## 2.0.3 (2021-07-14)

- Documented audio events
- Changed to use the builtin download button in WebViewer
- Various bug fixes

## 2.0.0 (2021-06-22)

- Removed react being provided by the package. The important project must now supply react.

- New rendering of the waveform.
