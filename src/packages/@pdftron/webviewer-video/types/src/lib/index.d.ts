import type { WebViewerInstance } from '@pdftron/webviewer';
export declare type LoadVideoOptions = {
    fileName?: string;
    headers?: any;
};
export declare type VideoViewerOptions = {
    license: string;
    showFrames: boolean;
    showTooltipPreview: boolean;
    renderControls: boolean;
    AudioComponent?: any;
    cacheAudioWaveform?: boolean;
    defaultLoadAudio?: boolean;
    generatedPeaks?: Array<number>;
    showFullscreenButton?: boolean;
    showSubtitlesButton?: boolean;
};
export declare type WebViewerVideoInstance = {
    getVideo: () => HTMLVideoElement;
    renderControlsToDOM: (container: HTMLElement) => void;
    loadVideo: (url: string | Blob | File, options?: LoadVideoOptions) => Promise<void>;
    setVideoWatermark: (instance: any, docViewer: any, iframeWindow: any) => void;
};
declare const renderControlsToDOM: (instance: any, container: any, options: any) => void;
declare const unmountWebViewerVideo: (instance: WebViewerInstance, customContainer: HTMLElement) => void;
declare const initializeWebViewerSettings: (instance: WebViewerInstance) => void;
declare const initializeVideoViewer: (instance: WebViewerInstance, options: VideoViewerOptions) => Promise<WebViewerVideoInstance>;
export { renderControlsToDOM, initializeVideoViewer, unmountWebViewerVideo, initializeWebViewerSettings, };
