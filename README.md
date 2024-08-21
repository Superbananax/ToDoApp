
# ToDoApp
## Opis projektu

ToDoApp, stworzona przy użyciu Nuxt 3, TypeScript oraz Tailwind CSS, dodatkowo użyłem heroicons oraz Axiosa. Aplikacja pobiera dane z zewnętrznego API, umożliwia oznaczanie zadań jako wykonane oraz wyświetla szczegóły zadań i ich podzadań, postarałem się by projekt wyglądał w miarę przyjemnie dla oka. 

![Zrzut ekranu 2024-08-21 092829](https://github.com/user-attachments/assets/e1a6104e-8ad7-4b58-8184-0c2c458deaad)

## Instalacja

1. Sklonuj repozytorium na swoje lokalne środowisko:

   ```bash
   git clone https://github.com/Superbananax/ToDoApp.git
   cd ToDoApp
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

## Konfiguracja

Przed uruchomieniem projektu, skonfiguruj zmienne środowiskowe.

1. Stwórz plik `.env` w katalogu głównym projektu


2. Zaktualizuj wartość zmiennej `VITE_API_BASE_URL` w pliku `.env`:

   ```plaintext
   VITE_API_BASE_URL=http://XX.XX.XXX.XXX:XXXX
   ```


## Uruchomienie projektu

Aby uruchomić projekt lokalnie, użyj komendy:

```bash
npm run dev
```


Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

## Lintowanie i formatowanie

W projekcie zintegrowano ESLint i Prettier do utrzymania spójności kodu.


- **Formatowanie kodu**:

  ```bash
  npm run format
  ```


## Struktura projektu

- `components/` - Komponenty Vue.js używane w aplikacji
- `composables/` - Funkcje reużywane i logika związana z taskami
- `utils/` - Pomocnicze funkcje API
- `assets/` - Pliki statyczne, takie jak style i obrazy
- `pages/` - Główne widoki aplikacji
- `public/` - Pliki publiczne, które są dostępne bezpośrednio w URL


