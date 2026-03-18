# Security Policy

## Supported Versions

This is a personal CV site. Only the latest deployed version is maintained.

| Version | Supported |
| ------- | --------- |
| latest  | ✅        |

## Reporting a Vulnerability

Please report security vulnerabilities by opening a [GitHub issue](https://github.com/JAS0N-SMITH/cv/issues) with the label `security`.

You can expect an acknowledgement within a few days. If the vulnerability is accepted, a fix will be prioritised and a patched version deployed as soon as practical. If declined, an explanation will be provided.

## Scope

This is a statically exported Next.js site hosted on GitHub Pages. It has no server-side logic, no user authentication, and no database. The primary attack surface is:

- Third-party dependencies (monitored via Dependabot and `npm audit`)
- External font/icon CDN resources (Google Fonts)
- Data files in the `data/` directory
