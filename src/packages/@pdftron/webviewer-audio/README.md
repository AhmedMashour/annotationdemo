# WebViewer Audio

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It allows you to view and annotate PDF files on your web app with a fully customizable UI.

This is an addon for WebViewer that allows loading media files (.mp3, .mp4, ogg, webm, etc.), so that their audio tracks can annotated and redacted.

<!-- How to clear image cache: https://stackoverflow.com/questions/26898052/how-to-force-image-cache-update-in-readme-rst-on-github -->
<img src="https://pdftron.s3.amazonaws.com/custom/websitefiles/wv-audio.png" width="730">

Also, try out the react sample [here](https://github.com/PDFTron/webviewer-audio-sample). It shows how to integrate WebViewer and WebViewer-Audio with a server component for the saving of annotations.

## Demo

https://webviewer-audio.web.app/

## Initial setup

Before you begin, make sure your development environment includes [Node.js and npm](https://www.npmjs.com/get-npm).

## Install

```
npm install @pdftron/webviewer-audio
```

## How to use

Here is an example of how WebViewer and WebViewer-audio could be integrated into your application.

```javascript
import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import { initializeAudioViewer } from '@pdftron/webviewer-audio';

const App = () => {
    const viewer = useRef(null);

    useEffect(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
        },
        viewer.current,
      ).then(async instance => {
        // Extends WebViewer to allow loading media files (.mp3, .mp4, ogg, webm, etc.)
        const {
            loadAudio,
        } = await initializeAudioViewer(
            instance,
            {
                license: '---- Insert commercial license key here after purchase ----',
            }
        );

        // Load a media element at a specific url. Can be a local or public link
        // If local it needs to be relative to lib/ui/index.html.
        // Or at the root. (eg '/audio.mp3')
        const audioUrl = '/audio.mp3';
        loadAudio(audioUrl);
      });
    }, []);

    return (
        <div className="App">
            <div className="webviewer" ref={viewer} />
        </div>
    );
}

export default App;
```

Also see the [React sample](https://github.com/PDFTron/webviewer-audio-sample), for a complete solution, with further customizations.

### Loading as a Script Tag

If your environment can not import WebViewer Audio from the module, you can instead include WebViewer Audio as a script tag. Simply, take the file `node_modules/@pdftron/webviewer-audio/dist/main.js` and add it to your project's html page. WebViewer Audio requires the react library, so include that as well.

```html
    <head>
        ...
        <!-- Load React. -->
        <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>        
        <!-- main.js can be renamed -->
        <script src="./main.js"></script>
    </head>
```

This will add the object `WebViewerAudio` to the window. This object contains `initializeAudioViewer`. So the previous code can be changed to:

```javascript
    ...
    const license = '---- Insert commercial license key here after purchase ----';
    const {
        loadAudio,
    } = await window.WebViewerAudio.initializeAudioViewer(
        instance,
        { license },
    );
    ...
```

## Documentation

[API documentation](https://www.pdftron.com/api/audio/)

## WebViewer APIs

See @pdftron/webviewer [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## License

WebViewer Audio will run in trial mode until a license is provided. For more information on licensing, please visit our [website](https://www.pdftron.com/licensing/).