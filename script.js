document.addEventListener("DOMContentLoaded", () => {
    const colorMap = {
        codePrimaryBg: "--primary-bg",
        codeSecondaryBg: "--secondary-bg",
        codePrimaryText: "--primary-text",
        codeSecondaryText: "--secondary-text",
        codeTertiaryText: "--tertiary-text",
        codePrimaryAccent: "--primary-accent",
        codeSecondaryAccent: "--secondary-accent",
        codeTertiaryAccent1: "--tertiary-accent1",
        codeTertiaryAccent2: "--tertiary-accent2",
        codeTertiaryAccent3: "--tertiary-accent3",
        codeSuccess: "--success",
        codeWarning: "--warning",
        codeError: "--error",
        codeInfo: "--info"
    };

    for (const [elementId, cssVar] of Object.entries(colorMap)) {
        const colorCode = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();

        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = colorCode;
        }
    }
});
