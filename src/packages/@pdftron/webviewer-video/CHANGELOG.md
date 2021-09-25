## 4.9.5 (2021-09-20)

- Various bugfixes

## 4.9.4 (2021-09-06)

- Added withCredentials option to loadVideo

## 4.9.0 (2021-08-24)

- Added the ability to pass custom headers to video fetches
- Various bugfixes

## 4.8.0 (2021-08-16)

- Added Typescript support
- Various bugfixes

## 4.7.0 (2021-08-12)

- Added `showAspectRatioGuideButton` flag
- Added `showPlaybackSpeedButton` flag
- Some ie11 compatibility fixes. 
    - ie11 Video/Audio editing disabled. 
    - ie11 Waveform does not render.
- Added ability to load video as a script tag
    - Added a `Loading as Script Tag` section to README

## 4.6.0 (2021-08-07)

- Added being able to load file and blob objects along urls

## 4.4.0 (2021-08-05)

- Updated package to work with WebViewer 8.0 and newer

## 4.3.5 (2021-07-29)

- Various bug fixes
- Memory leak issue fixed on some machines when loading many videos when not refreshing

## 4.3.0 (2021-07-19)

- Added `showSubtitlesButton` boolean option to `initializeVideoViewer`

## 4.2.0 (2021-07-09)

- Added automatic caching of audio peaks
- Added loading indicator when video is buffering
- Reorganized buttons on main control panel
- General refactoring of code
- Added ability to merge annotations directly into video
- Added `renderControlsToDOM` API

## 4.1.0 (2021-07-02)

- Added `videoPlay` and `videoPause` events
- Added `showFullscreenButton` boolean option to `initializeVideoViewer`

## 4.0.0 (2021-06-24)

- Adding support for integration of Webviewer-Audio and Webviewer-Video packages.
- Various small bug fixes
- `React` and `React-Dom` removed from bundle and now must be provided as a parent dependency
- Annotations and current time of video can now be viewed by frame number.

## 3.11.0 (2021-06-08)

- Merged options and videoSettings object in initializeVideoViewer
- Added renderControls option. Controls will now render automatically and can be disabled by setting this option to false.
- Removed useCrossOrigin and randomizeRequest options.

## 3.10.8 (2021-05-19)

Added getVideo function.

## 3.10.6 (2021-05-19)

Added showFrames, showTooltipPreview options.

## 3.10.4 (2021-05-05)

Various small bug fixes
- Read only mode works correctly with annotations

## 3.10.3 (2021-05-03)

Various small bug fixes

## 3.10.0 (2021-04-09)

### New features

New look for progress bar.

### Bug fixes

Fixed error being thrown when loading a new document and opting out using built in UI.

Fixed full screen button not working when opting out using built in UI.

Updated check for current version of WebViewer. Has to at least be 7.3.1 or error will be printed. 7.3.1 is necessary for the download button to work correctly.