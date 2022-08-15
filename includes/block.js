(function (blocks, element) {
    var el = element.createElement;
    var blockStyle = {
        backgroundColor: '#EEE',
        color: 'transparent',
        padding: '48px',
        border: '1px dashed #CCC',
        backgroundImage: "url(https://i.imgur.com/ECCFaw5.jpg)",
    };
    var blockStyleFront = {};
    blocks.registerBlockType('fellyph/interactive-image-pixelation', {
        title: 'Interactive Image Pixelation',
        icon: 'admin-appearance',
        category: 'layout',
        edit: function () {
            return el(
                'p',
                { style: blockStyle },
                '[mosaico]'
            );
        },
        save: function () {
            return el(
                'p',
                { style: blockStyleFront },
                '[mosaico]'
            );
        },
    });
}(
    window.wp.blocks,
    window.wp.element
));