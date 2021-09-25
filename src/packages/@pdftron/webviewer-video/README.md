# WebViewer Video

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It allows you to view and annotate PDF files on your web app with a fully customizable UI.

This is an addon for WebViewer that allows loading HTML5 videos (.mp4, ogg, webm) so that their video frames can be annotated. For more information, see this [guide](https://www.pdftron.com/documentation/web/get-started/manually-video/).

<!-- How to clear image cache: https://stackoverflow.com/questions/26898052/how-to-force-image-cache-update-in-readme-rst-on-github -->
<img src="https://pdftron.s3.amazonaws.com/custom/websitefiles/wv-video.png" width="730">

Also, try out the react sample [here](https://github.com/PDFTron/webviewer-video-sample). It shows how to integrate WebViewer and WebViewer-Video with a server component for the saving of annotations.

## Demo

https://webviewer-video.web.app/

## Initial setup

Before you begin, make sure your development environment includes [Node.js and npm](https://www.npmjs.com/get-npm).

## Install

```
npm install @pdftron/webviewer-video
```

## How to use

Here is an example of how WebViewer and WebViewer-video could be integrated into your application.

```javascript
import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import { initializeVideoViewer } from '@pdftron/webviewer-video';

const App = () => {
    const viewer = useRef(null);

    useEffect(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          selectAnnotationOnCreation: true,
        },
        viewer.current,
      ).then(async instance => {
        const license = '---- Insert commercial license key here after purchase ----';

        // Extends WebViewer to allow loading HTML5 videos (.mp4, ogg, webm).
        const {
            loadVideo,
        } = await initializeVideoViewer(
            instance,
            { license },
        );

        // Load a video at a specific url. Can be a local or public link
        // If local it needs to be relative to lib/ui/index.html.
        // Or at the root. (eg '/video.mp4')
        const videoUrl = 'https://pdftron.s3.amazonaws.com/downloads/pl/video/video.mp4';
        loadVideo(videoUrl);
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

Also see the [React sample](https://github.com/PDFTron/webviewer-video-sample), for a complete solution, with further customizations.

### Loading as a Script Tag

If your environment can not import WebViewer Video from the module, you can instead include WebViewer Video as a script tag. Simply, take the file `node_modules/@pdftron/webviewer-video/dist/main.js` and add it to your project's html page. WebViewer Video requires the react library, so include that as well.

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

This will add the object `WebViewerVideo` to the window. This object contains `initializeVideoViewer`. So the previous code can be changed to:

```javascript
    ...
    const license = '---- Insert commercial license key here after purchase ----';
    const {
        loadVideo,
    } = await window.WebViewerVideo.initializeVideoViewer(
        instance,
        { license },
    );
    ...
```


### Custom Video Watermark

You can use the WebViewer `setWatermark` API. Please see the guide [here](https://www.pdftron.com/documentation/web/guides/watermarks/).

## Documentation

[API documentation](https://www.pdftron.com/api/video/)

## WebViewer APIs

See @pdftron/webviewer [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## License

WebViewer Video will run in trial mode until a license is provided. For more information on licensing, please visit our [website](https://www.pdftron.com/licensing/).