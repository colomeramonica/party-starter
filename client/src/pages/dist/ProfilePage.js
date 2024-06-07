"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var UserPhoto_1 = require("../components/UserPhoto");
var user_circle_svg_1 = require("../assets/icons/user_circle.svg");
var write_svg_1 = require("../assets/icons/write.svg");
var DnDClasses_1 = require("../data/DnDClasses");
var DnDRaces_1 = require("../data/DnDRaces");
var material_1 = require("@mui/material");
var NavBar_1 = require("../components/NavBar");
var PhotoGallery_1 = require("../components/PhotoGallery");
var ProfilePage = function () {
    var _a = react_1.useState({
        name: 'Mollymauk',
        description: 'The best character',
        race: 'Tiefling',
        classes: []
    }), state = _a[0], setState = _a[1];
    var handleChange = react_1.useCallback(function (name, value) {
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = Array.isArray(value) ? value : value.toString(), _a)));
        });
    }, [setState]);
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement("div", { className: "profile_page__photo-frame" },
            react_1["default"].createElement(UserPhoto_1["default"], null)),
        react_1["default"].createElement("div", { className: "profile_page__section_info" },
            react_1["default"].createElement("div", { className: "profile_page__section_title" },
                react_1["default"].createElement("h3", null, "Caracther Info")),
            react_1["default"].createElement("div", { className: "profile_page__section_info_input" },
                react_1["default"].createElement(material_1.TextField, { id: "input-with-icon-textfield", label: "Name", value: state.name, onChange: function () { return handleChange('name', state.name); }, InputProps: {
                        startAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: "start" },
                            react_1["default"].createElement(user_circle_svg_1.ReactComponent, { style: { width: '20px', height: '20px', fill: '#2C363F', marginLeft: '7px' } })))
                    }, variant: "outlined", size: "small", color: "secondary" })),
            react_1["default"].createElement("div", { className: "profile_page__section_info_input" },
                react_1["default"].createElement(material_1.TextField, { id: "input-with-icon-textfield", label: "Description", value: state.description, onChange: function () { return handleChange('description', state.description); }, InputProps: {
                        startAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: "start" },
                            react_1["default"].createElement(write_svg_1.ReactComponent, { style: { width: '20px', height: '20px', fill: '#2C363F', marginLeft: '7px' } })))
                    }, variant: "outlined", size: "small", color: "secondary" })),
            react_1["default"].createElement("div", { className: "profile_page__section_info_input" },
                react_1["default"].createElement(material_1.FormControl, { fullWidth: true, className: "profile_page__section_info_input" },
                    react_1["default"].createElement(material_1.InputLabel, { id: "demo-simple-select-label" }, "Race"),
                    react_1["default"].createElement(material_1.Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: state.race, label: "Race", onChange: function (event) { return handleChange('race', event.target.value); } }, Object.entries(DnDRaces_1["default"]).map(function (_a) {
                        var raceName = _a[0], raceData = _a[1];
                        return (react_1["default"].createElement(material_1.MenuItem, { value: raceName }, raceName));
                    })))),
            react_1["default"].createElement("div", { className: "profile_page__section_info_input" },
                react_1["default"].createElement(material_1.Autocomplete, { multiple: true, options: Object.values(DnDClasses_1["default"]), getOptionLabel: function (option) { return option; }, onChange: function (event, value) {
                        handleChange('classes', value);
                    }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { variant: "outlined", label: "Class" }))); } }))),
        react_1["default"].createElement("div", { className: "profile_page__section_gallery" },
            react_1["default"].createElement("div", { className: "profile_page__section_title" },
                react_1["default"].createElement("h3", null, "Photo Gallery")),
            react_1["default"].createElement("div", { className: "profile_page__section_gallery_images" },
                react_1["default"].createElement(PhotoGallery_1["default"], null))),
        react_1["default"].createElement("div", { className: "profile_page__actions" },
            react_1["default"].createElement(material_1.Button, { className: "profile_page__actions_button--save", variant: "contained", size: "small" }, "Salvar"))));
};
exports["default"] = ProfilePage;
