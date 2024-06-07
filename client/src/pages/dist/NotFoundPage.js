"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var NotFoundPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    /**
     * Call this function to redirect the user to the homepage.
     */
    var redirectToHomePage = function () {
        navigate('/');
    };
    return (react_1["default"].createElement("div", { style: { position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } },
        react_1["default"].createElement("h1", { style: { fontSize: '4em' } }, "Oops 404!"),
        react_1["default"].createElement("span", { style: { cursor: 'pointer' }, onClick: function () { return redirectToHomePage(); } }, "Homepage")));
};
exports["default"] = NotFoundPage;
