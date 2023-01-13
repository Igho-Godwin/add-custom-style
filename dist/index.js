class Styling {
    constructor(styleId, selector, attributes, mediaQuery) {
        this.styleId = styleId;
        this.selector = selector;
        this.attributes = attributes;
        this.mediaQuery = mediaQuery;
    }
    verifyAttribute(attribute) {
        let attributes = attribute.split(":");
        if (typeof attributes[0] === "undefined" ||
            typeof attributes[1] === "undefined") {
            return false;
        }
        attributes[0] = attributes[0].replace(/ /g, ""); // eg background-color, color, font-size
        attributes[1] = attributes[1].replace(/ /g, ""); // e.g yellow , red, 20px
        const lengthOfFirstAttribute = attributes[0].length;
        const lengthOfSecondAttribute = attributes[1].length;
        attributes[0] =
            attributes[0][0] === "{"
                ? attributes[0].slice(1, lengthOfFirstAttribute)
                : attributes[0];
        attributes[1] =
            attributes[1][lengthOfSecondAttribute - 1] === "}"
                ? attributes[1].slice(0, lengthOfSecondAttribute - 1)
                : attributes[1].slice(0, lengthOfSecondAttribute);
        const isValid = CSS.supports(attributes[0], attributes[1]);
        return isValid;
    }
    verifyAttributes() {
        let attributes = this.attributes.split(",");
        if (attributes.length === 1) {
            const isValid = this.verifyAttribute(this.attributes);
            return isValid;
        }
        else {
            for (const attribute of attributes) {
                let isValid = this.verifyAttribute(attribute);
                if (isValid === false) {
                    return isValid;
                }
            }
            return true;
        }
    }
    createStyle(css) {
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        head.appendChild(style);
        style.type = "text/css";
        style.id = this.styleId;
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
    }
    addCustomStyle() {
        const attributeIsValid = this.verifyAttributes();
        if (typeof this.mediaQuery != "undefined") {
            const mediaPropertyIsValid = this.verifyAttribute(this.mediaQuery);
            if (mediaPropertyIsValid === false) {
                console.log("Please enter valid attributes");
            }
            return;
        }
        if (attributeIsValid === false) {
            console.log("Please enter valid attributes");
            return;
        }
        const css = `${this.selector} ${this.attributes}`;
        this.createStyle(css);
    }
}
const style = new Styling("jj", "#foo", "{ background-color: green, color: yellow, width : 20px }");
style.addCustomStyle();
//# sourceMappingURL=index.js.map