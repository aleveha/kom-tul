### Webové stránky katedry obrábění a montáže Technické univerzity v Liberci

### Použité technologie (pro hledání dalších vývojářů):
- [ReactJS](https://reactjs.org) – knihovna v jazyce JavaScript pro tvorbu webového rozhraní
- [Next.js](https://nextjs.org) – rozšíření pro ReactJS pro vývoj aplikací se server-side renderingem (SSR) a zaměřené na SEO
- [TailwindCSS](https://tailwindcss.com) – CSS framework
- [next-i18next](https://github.com/i18next/next-i18next) – knihovna pro překlad textů (internacionální podpora)

### Jak spustit projekt lokálně:
1. Nainstalujte [Node.js](https://nodejs.org/en/download/)
2. Nainstalujte [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
3. Stáhněte si projekt
4. V adresáři projektu spusťte příkaz `yarn install`
5. Spusťte příkaz `yarn dev`
6. Otevřete v prohlížeči adresu `localhost:3000`

### Struktura projektu:
- `pages` – adresář s komponentami, které odpovídají jednotlivým stránkám
- `public` – adresář s veřejnými soubory, které se při buildu kopírují do kořenového adresáře projektu
- `src` – adresář s komponentami, které se používají na více stránkách nebo jsou používány jako podklad pro vytvoření stránky
- `styles` – adresář s globálními styly
- `public/locales/cs` – adresář s překlady do češtiny
- `public/locales/en` – adresář s překlady do angličtiny

### Jak měnit texty na stránkách:
1. V adresáři `public/locales/cs` nebo `public/locales/en` najděte soubor, který obsahuje text, který chcete změnit
2. Otevřete soubor v textovém editoru (doporučuji Web IDE přímo v GitLabu)
3. Upravte text (nezapomeňte opravit i překlad do druhého jazyka)
4. Uložte opravy pomoci tlačítka `Create commit` => napište smysuplný commit message => vyberte `Commit to main branch` => klikněte na `Commit changes`.
5. Po chvíli se změny automaticky zobrazí na stránkách.

P.s.: pro větší opravy doporučuji se obratit na vývojáře.

### Udržování projektu:
Správce webu je zatím [Nikita Tashchilin](https://github.com/aleveha). Pokud máte nápad na vylepšení, napište mi [email](mailto:nikita.tashchilin@tul.cz).\
Pro budoucné udržovaní doporučuji [UXFans](https://uxf.cz/).