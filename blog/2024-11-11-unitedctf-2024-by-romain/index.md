---
slug: 2024-11-11-unitedctf-2024-by-romain
title: UnitedCTF 2024 - "Pomme d'amour"
date: 2024-11-11
authors: [romain]
tags: [reverse, unitedctf]
---

# Pomme d'amour

Ce writeup est à propos du challenge "Pomme d'amour" de l'édition 2024 du United CTF.
<!-- truncate -->

**This write-up was authored by one of our teammates [@RomainL972](https://github.com/RomainL972)! 🎉**


## Recréation du challenge

Pour tester ce challenge à la maison, téléchargez l'exécutable à exploiter `challenge.gz` et décompressez le. Le byte code correspondant au code exécuté était aussi fourni, mais je ne l'ai pas utilisé dans ma solution : [bytecode.txt](pomme-d-amour/bytecode.txt).

L'énoncé du défi venait avec un indice : "NodeJS Single executable applications".

## Extraction du code

Après avoir regardé la documentation des [Single executable applications](https://nodejs.org/api/single-executable-applications.html), j'ai créé ma propre application qui faisait juste `console.log("hello")`. J'ai trouvé que ce code était inscrit tel quel dans l'exécutable de sortie, environ à partir du 68300ème byte depuis la fin du fichier. J'ai donc regardé le contenu de l'exécutable fourni à partir de cet offset, et j'ai trouvé le code suivant:

```js
require("node:v8").setFlagsFromString("--no-lazy");
require("node:v8").setFlagsFromString("--no-flush-bytecode");
var script = new(require("vm").Script)(`"${" ".repeat(565)}"`,{
    cachedData: Buffer.from([251, 50, 233, ..., 61].map(b=>b^0x137))
}).runInThisContext();
```

Le code était en réalité beaucoup plus long, avec plein de nombres dans le `Buffer.from`. Je l'ai raccourci ici pour plus de lisibilité. Voici comment extraire ces données avec Python :

```bash
python -c "print(open('challenge', 'rb').read()[-68300:-60000].decode())"
```

## Analyse

D'après [la documentation de NodeJS](https://nodejs.org/api/vm.html#new-vmscriptcode-options), le buffer correspond au code cache qui résulte de la compilation just in time d'un script. N'ayant aucune connaissance en interprétation de code cache javascript, je décide de juste l'exécuter et voir ce qu'il se passe. Résultat : mon programme quitte. Étrange...

Je décide alors d'exécuter le script dans un contexte créé spécifiquement pour lui, grâce à la méthode `script.runInContext`. J'obtiens alors une exception: `Uncaught ReferenceError: process is not defined`. Il semblerait que le script essaye d'accéder à l'objet global `process`. J'utilise alors un objet [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) pour voir quels attributs de `process` sont utilisés. La réponse : `argv` et `exit`.

Après plus de tests, je vois que le programme accède au troisième élément d'argv. Peut-être que c'est ici que doit se trouver le flag pour que le programme fonctionne... En remplaçant la méthode `process.exit` par un appel à `console.log`, je vois justement que si je donne comme troisième élément d'argv le mot `flag`, alors `process.exit` est appelé deux fois au lieu de trois. Il semble donc que le programme compare `argv[2]` au flag et appelle `exit` dès qu'un caractère est incorrect.

## Exploitation
En comptant le nombre d'appels à `process.exit`, il est donc possible de deviner au fur et à mesure les différents caractères du flag en essayant tous les caractères ascii possibles. Voici le script permettant de retrouver le flag, en supposant que `script` correspond au résultat du `new(require("vm").Script)` extrait de l'exécutable :

```js
let flag = ""
for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 127; j++) {
        const newflag = flag + String.fromCharCode(j);

        let context = require("vm").createContext();

        let exitCount = 0;
        let handler = {
            get(target, name) {
                if (name == "argv") {
                    return [
                        "a",
                        "b",
                        newflag
                    ]
                }
                if (name == "exit") {
                    exitCount++;
                    return () => {};
                }
            }
        }

        let x = new Proxy({}, handler);
        context.process = x;
        context.TextEncoder = TextEncoder;

        script.runInContext(context);

        if (exitCount <= 2) {
            flag = newflag;
            console.log(flag);
            break
        }
    }
}
```

Résultat : `flag-javascriptbytecodeisfu`. On peut deviner avec la phrase qu'il manque un dernier caractère, `n`. Même avec des caractères aléatoires, on aurait pu modifier le programme pour trouver le dernier caractère mais cette fois en exigeant un exitCount égal à 1.

Le script au complet, avec des fonctions et modifié pour trouver le dernier caractère du flag est disponible ici : [exploit.js](pomme-d-amour/exploit.js).
