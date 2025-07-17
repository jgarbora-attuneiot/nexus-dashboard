// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-deprecated-slot-attribute": "off",
        "vue/no-v-html": "off",
    },
    // Your custom configs here
});
