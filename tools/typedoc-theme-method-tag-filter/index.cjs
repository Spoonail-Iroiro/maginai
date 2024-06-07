"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.MethodTagFilterTheme = void 0;
const typedoc_1 = require("typedoc");
function toStyleClass(str) {
    return str
        .replace(/(\w)([A-Z])/g, (_m, m1, m2) => m1 + "-" + m2)
        .toLowerCase();
}
class MethodTagFilterTheme extends typedoc_1.DefaultTheme {
    getReflectionClasses(reflection) {
        const classes = super.getReflectionClasses(reflection).split(" ");
        const filters = this.application.options.getValue("visibilityFilters");
        for (const key of Object.keys(filters)) {
            if (key.startsWith("@")) {
                if (key !== "@deprecated") {
                    const className = toStyleClass(`tsd-is-${key.substring(1)}`);
                    if (classes.includes(className))
                        continue;
                    const hasTag = (ref) => ref.comment?.hasModifier(key) ||
                        ref.comment?.getTag(key);
                    const hasTagInSelf = hasTag(reflection);
                    const hasTagInAllSignatures = !!reflection.signatures?.length &&
                        reflection.signatures?.every((sig) => hasTag(sig));
                    if (hasTagInSelf || hasTagInAllSignatures) {
                        classes.push(className);
                    }
                }
            }
        }
        return classes.join(" ");
    }
}
exports.MethodTagFilterTheme = MethodTagFilterTheme;
function load(app) {
    app.renderer.defineTheme("method-tag-filter", MethodTagFilterTheme);
}
exports.load = load;
