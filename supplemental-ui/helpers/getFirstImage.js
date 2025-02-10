'use strict'

const IMG_TAG_RX = /<img[^>]+src="([^">]+)"/;

module.exports = (html) => {
    const imgTagMatch = html && html.toString().match(IMG_TAG_RX);
    return imgTagMatch ? imgTagMatch[1] : null;
};
