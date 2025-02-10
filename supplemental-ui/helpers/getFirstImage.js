'use strict'

const IMG_TAG_RX = /<img[^>]+src="([^">]+)"/;

module.exports = (html) => {
    const imgTagMatch = html && html.toString().match(IMG_TAG_RX);
    if (!imgTagMatch) return null;

    const imagePath = imgTagMatch[1].replace(/^(?:\.\.\/)*/, '');
    return imagePath;
};
