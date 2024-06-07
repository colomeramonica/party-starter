"use strict";
exports.__esModule = true;
var react_1 = require("react");
var camera_svg_1 = require("../assets/icons/camera.svg");
var material_1 = require("@mui/material");
var PhotoGallery = function () {
    var _a = react_1.useState(null), image = _a[0], setImage = _a[1];
    var handleImageUpload = function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                setImage(reader_1.result);
            };
            reader_1.readAsDataURL(file);
        }
    };
    return (react_1["default"].createElement("div", { className: "photo_gallery" },
        react_1["default"].createElement(material_1.Box, { className: "photo_gallery_images_item", height: 100, width: 100, component: "section", sx: { p: 2, border: '1px solid grey' } },
            react_1["default"].createElement("div", { className: "upload-container" },
                react_1["default"].createElement("input", { type: "file", id: "file-input", onChange: handleImageUpload, hidden: true }),
                react_1["default"].createElement("label", { htmlFor: "file-input" },
                    react_1["default"].createElement(camera_svg_1.ReactComponent, { className: "camera-icon", style: {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30px',
                            height: '30px',
                            fill: '#2C363F'
                        } })),
                image && react_1["default"].createElement("img", { className: "photo_gallery_images_preview", src: image, alt: "Preview", style: { width: '95px', height: '95px', objectFit: 'contain' } })))));
};
exports["default"] = PhotoGallery;
