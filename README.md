# Rudy Hermawan — IT Solutions for Business

A one-page profile website for IT services supporting businesses and retail stores.

## Services
- IT support and PC maintenance
- Server installation and network configuration
- Distributor software and retail POS
- CCTV installation and support

## Run locally
Open `index.html` in a browser, or run a static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

The site uses plain HTML and CSS with no build step. The profile photo is stored at `assets/foto-rudy.png`.

## Structure
- `index.html` - main one-page website
- `idcard.html` - printable digital ID card (landscape, front and back)
- `assets/style.css` - styles, including dark mode
- `assets/main.js` - mobile menu, scroll animations, theme toggle, inquiry form
- `assets/i18n.js` - Indonesian translations (English text lives in the HTML)
- `assets/foto-rudy.png` - profile photo

## Features
- ID/EN language switch and light/dark mode (both remembered in the browser)
- Quick inquiry form that opens WhatsApp with a prefilled message
