(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('b'));
    } else {
        root.returnExports = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (b) {
    return {
        "version": "4.3.1",
        "license": "https://raw.githubusercontent.com/devdanim/dnm-ffmpeg-builds/main/FFMPEG-LICENSE.txt",
        "source": "https://github.com/FFmpeg/FFmpeg/archive/n4.3.1.zip",
        "builds": {
            "win": "https://raw.githubusercontent.com/devdanim/dnm-ffmpeg-builds/main/bin/ffmpeg-win64.zip",
            "mac": "https://raw.githubusercontent.com/devdanim/dnm-ffmpeg-builds/main/bin/ffmpeg-macos64.zip"
        }
    };
}));