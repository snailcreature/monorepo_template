/** @type {import("prettier").Config} */

export default {
    overrides: [
        {
            files: "*.(mj|t)s",
            options: {
                parser: "typescript",
                printWidth: 80,
                tabWidth: 4,
                semi: false,
                trailingComma: "es5",
                bracketSpacing: true,
            },
        },
        {
            files: "*.css",
            options: {
                parser: "css",
                printWidth: 80,
                tabWidth: 4,
            },
        },
    ],
}
