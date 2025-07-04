# 👰 Hera – Wedding Planner App

**Hera** è un'app mobile sviluppata in **React Native** per aiutare le coppie a pianificare il proprio matrimonio in modo semplice, elegante e completamente personalizzato. Offre una panoramica curata delle migliori location, FAQ utili, ispirazioni fotografiche, e molto altro.

---

## 📲 Funzionalità principali

- 🎠 **Carousel** con immagini ispirazionali per matrimoni
- 🏛️ **Top Location** in formato galleria orizzontale
- 📷 **Hero Image** a tutto schermo
- 🏷️ **Categorie tematiche**: Ville, Sale, Dimore, Catering
- 💬 **FAQ interattive** (espandibili)
- 📞 **Contatti diretti** e inviti all’azione
- 📝 **Pulsante “Sign Up”** per registrazione o contatto

---

## 🛠 Tech Stack

- **React Native**
- **React Navigation**
- **Custom Components** (es. `Carousel`)
- Supporto asset locali (`require(...)`)

---

## 🚀 Come avviare il progetto

1. **Clona il repository**

```bash
git clone https://github.com/tuo-utente/hera-app.git
cd hera-app
```

2. **Installa le dipendenze**

```bash
npm install
# oppure
yarn install
```

3. **Avvia il progetto**

```bash
npm start
# oppure
yarn start
```

> Usa [Expo Go](https://expo.dev/client) sul tuo smartphone per testare rapidamente.

---

## 🗂️ Struttura delle cartelle

```
hera-app/
├── assets/               # Immagini e media
│   ├── logo.png
│   ├── wedding1.jpg
│   ├── villa1.jpg
│   └── ...
├── components/
│   └── Carousel.js
├── screens/
│   └── HomeScreen.js
├── App.js
├── package.json
└── README.md
```

---

## 📁 Contenuti dinamici

### Categorie

```js
const categories = ['VILLE', 'SALE', 'DIMORE', 'CATERING'];
```

### Top Locations

```js
const topLocations = [
  { id: '1', image: require('../assets/villa1.jpg') },
  ...
];
```

### FAQ

Espandibili al tocco, con risposte dirette a dubbi comuni sul wedding planning.

---

## 📬 Contatti

Per richieste, info o collaborazioni:

- 📞 Tel: **(+39) 328 556 2095**
- 📧 Email: **info@designmyweddingevent.com**
- 🌐 Social: Instagram, Facebook (da collegare)

---

## 🪪 Licenza

Questo progetto è distribuito sotto licenza **MIT**.

---

> **Hera** – L'app che rende il tuo matrimonio unico, elegante e perfettamente organizzato.