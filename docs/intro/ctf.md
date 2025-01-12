---
sidebar_position: 2
---

# Les CTF

## Qu'est-ce qu'un CTF en cybersécurité ?

Un **CTF (Capture The Flag)** en cybersécurité est un **exercice pratique basé sur des défis** où les participants doivent résoudre des problèmes de sécurité pour "capturer" des "drapeaux" virtuels. Ces drapeaux sont généralement des morceaux de texte cachés que l'on découvre en exploitant des vulnérabilités, en effectuant de l'ingénierie inverse ou en analysant le trafic réseau.

![Interface web d'une plateforme de CTF](/img/ctfd.png)

## Qu'est-ce qu'un flag ?

Un flag est une chaîne de caractères spécifique qui sert de preuve pour valider la résolution d'un défi. Il suit généralement un format précis défini par les organisateurs du CTF, souvent sous forme : `CTF{texte_ou_hash}` ou `flag{texte_ou_hash}`. Par exemple, après avoir exploité une faille SQL dans une application web, vous pourriez trouver un flag comme : `CTF{SQL_1nj3ct10n_M4st3r_2024}`. La soumission de ce flag exact prouve que vous avez réussi le défi.

## Types de CTF
1. **Style Jeopardy** : Les participants résolvent des défis individuels classés par catégories (cryptographie, ingénierie inverse, forensic, exploitation web, exploitation binaire, etc.). Chaque défi contient un drapeau à capturer.  
2. **Attaque-Défense (Rouge vs Bleu)** : Les équipes doivent attaquer les systèmes des autres tout en défendant les leurs. Ce type de CTF simule des scénarios de cyberattaque du monde réel.  
3. **Mixte** : Une combinaison des deux types ci-dessus, avec des défis de style Jeopardy et des éléments d'attaque-défense.

## Objectifs des CTFs
- **Développement de compétences** : Pratiquer et améliorer des compétences techniques (hacking éthique, forensic, ingénierie inverse, etc.).  
- **Expérience d'apprentissage** : Acquérir une expérience pratique des concepts de cybersécurité.  
- **Collaboration en équipe** : Encourager le travail d'équipe et la résolution de problèmes dans des délais serrés.  
- **Compétitions** : Souvent organisés lors de conférences (comme DEFCON) ou lors d'événements autonomes où les participants concourent pour des prix, de la reconnaissance ou des opportunités professionnelles.  

## Qui devrait essayer les CTFs ?
- **Débutants** : Excellente manière d'apprendre et de mettre en pratique les concepts de sécurité.  
- **Passionnés et étudiants en cybersécurité** : Pour affiner leurs compétences en hacking.  
- **Professionnels** : Pour tester et améliorer leur expertise technique.  

## Comment trouver des CTF auxquels participer ?

:::tip

[CTF Time](https://ctftime.org) est la plateforme de référence dans le monde des CTF, servant à la fois de calendrier global des compétitions et de système de classement des équipes.

:::

- **PicoCTF:** PicoCTF est un CTF éducatif créé par Carnegie Mellon University, spécialement conçu pour les débutants et les étudiants.
- **Hackfest (Québec):** L'un des plus grands événements de sécurité informatique au Canada, se déroulant annuellement à Québec.
- **NorthSec (Montréal):** Plus grand CTF technique au Canada, organisé à Montréal, combinant conférence et compétition intensive.

## Que fait-on après un CTF ?

Les *write-ups* sont des documents détaillés qui expliquent la résolution d'un challenge ou d'une machine de CTF étape par étape. Ils décrivent la méthodologie utilisée, les outils employés, les vulnérabilités découvertes et la manière de les exploiter pour obtenir le flag. Ces ressources sont précieuses pour apprendre de nouvelles techniques, comprendre les erreurs commises et découvrir des approches différentes. 

Il est courant que les participants partagent leurs write-ups après la fin d'un CTF, contribuant ainsi à l'apprentissage collectif de la communauté. Les plateformes comme CTFTime et Medium regorgent de write-ups qui constituent une véritable base de connaissances en cybersécurité. Cependant, il est recommandé d'essayer de résoudre les challenges par soi-même avant de consulter les write-ups, afin de maximiser l'apprentissage.

## À lire également

* [CTF Field Guide par Trail of Bits](https://trailofbits.github.io/ctf/index.html)