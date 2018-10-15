module.exports = {
    pageElement: function (selector) {

        return { get: function get() {
            return $(selector);
        } };
    },

    pageElementAll: function (selector) {

        return { get: function get() {
            return $$(selector);
        } };
    }
};