---
sidebar_position: 4
---

# Protéger sa vie numérique

La protection de sa vie privée en ligne commence par quelques gestes essentiels. Sans être un expert en cybersécurité, chacun peut prendre des mesures simples mais efficaces pour mieux contrôler ses données personnelles et réduire les risques. 

## Les bases essentielles

### 🎯 Évaluer ses risques personnels

Le *threat modeling* consiste à identifier vos risques spécifiques pour mieux vous protéger. Posez-vous ces questions :

- **Quelles sont mes données sensibles ?** - Informations personnelles, financières, professionnelles, historique de navigation et communications privées.
- **Qui pourrait vouloir y accéder et pourquoi ?** - Cybercriminels, entreprises de tracking, gouvernements ou personnes malveillantes de votre entourage, chacun avec des motivations différentes.
- **Quel serait l'impact d'une compromission ?** - Pertes financières, vol d'identité, atteinte à la réputation, chantage ou compromission professionnelle.

Cette réflexion vous permet d'adopter des mesures de protection adaptées à votre situation, sans tomber dans la paranoïa ou la négligence.

### 🔑 Protéger ses comptes

#### Gestionnaire de mots de passe

Un gestionnaire de mots de passe est indispensable aujourd'hui. Au lieu de réutiliser le même mot de passe ou de les noter dans un fichier texte, un gestionnaire génère et stocke des mots de passe uniques et complexes pour chaque service. C'est comme avoir un coffre-fort numérique dont vous ne devez retenir que la clé principale.

:::warning

**Gestionnaire de mots de passe intégré au navigateur** 

Les gestionnaires de mots de passe intégrés aux navigateurs présentent des risques significatifs face aux *infostealers* (logiciels voleurs d'informations) qui ciblent spécifiquement les données stockées dans les navigateurs. À la différence des solutions dédiées comme Bitwarden ou 1Password qui utilisent un chiffrement robuste et stockent les données de manière sécurisée, les mots de passe des navigateurs sont plus facilement extractibles par des malwares. 

:::

<details>

<summary>Guides détaillés sur les mots de passe</summary>

[Gérer ses mots de passe - Gouvernement du Québec](https://www.quebec.ca/securite-situations-urgence/cybersecurite/conseils-cybersecurite/mots-passe)

[Password Overview (PrivacyGuides.io)](https://www.privacyguides.org/en/basics/passwords-overview/)

[Password Managers (PrivacyGuides.io)](https://www.privacyguides.org/en/passwords/)

</details>

#### Authentification à multiples facteurs

L'authentification à deux facteurs (2FA) ajoute une couche de sécurité essentielle, mais tous les types de 2FA ne se valent pas. Les codes par SMS sont les plus vulnérables : ils peuvent être interceptés, et les pirates peuvent détourner votre numéro de téléphone via le «SIM swapping». Les codes envoyés par email ne sont pas beaucoup plus sûrs, car si votre email est compromis, tous vos comptes le sont aussi. 

Les applications d'authentification génèrent des codes qui ne transitent jamais sur le réseau, les rendant bien plus sécurisées. Le plus haut niveau de sécurité est offert par les clés de sécurité physiques : de petits appareils USB impossibles à pirater à distance, qui nécessitent une présence physique pour la connexion.

:::tip

La nouvelle génération d'authentification, les passkeys, va encore plus loin. Ces clés numériques, plus sûres que les mots de passe traditionnels, utilisent la biométrie de votre appareil (empreinte digitale ou reconnaissance faciale) pour vous connecter. Contrairement aux codes SMS qui peuvent être interceptés, les passkeys résistent aux attaques de phishing.

:::

### 📱 Auditer ses applications

#### Les permissions

Vos applications collectent plus d'informations que nécessaire. Prenez le temps de revoir leurs permissions : une application de lampe de poche a-t-elle vraiment besoin d'accéder à vos contacts ? Pour chaque permission demandée (localisation, appareil photo, micro), demandez-vous si elle est réellement nécessaire au fonctionnement de l'application.

#### Les réglages de confidentialité

Cette vigilance doit s'étendre aux services web que vous utilisez. Les réseaux sociaux, Google, les sites de commerce en ligne : tous ont des réglages de confidentialité souvent réglés par défaut pour partager le maximum d'informations. Prenez le temps de visiter les paramètres de confidentialité de chaque service que vous utilisez régulièrement. Vous serez surpris de découvrir tout ce que vous partagez sans le savoir et les options de contrôle à votre disposition.

### 🛡️ Se protéger des arnaques

#### Hammeçonnage

Les liens suspects sont la porte d'entrée de nombreuses attaques. Un courriel urgent d'une banque, un message d'un ami qui semble étrange, un texto vous informant d'un colis : prenez l'habitude de vérifier l'expéditeur et l'URL avant de cliquer. En cas de doute, accédez directement au site concerné sans passer par le lien.

**Attaques par QR Code (QR Phishing)**: Les codes QR sont devenus omniprésents, notamment depuis la pandémie. Les attaquants exploitent cette tendance en plaçant des codes QR malveillants dans des lieux publics ou en les envoyant par courriel. Ces codes peuvent rediriger vers des sites de phishing, déclencher des téléchargements malveillants ou initier des paiements frauduleux. Avant de scanner un QR code, vérifiez son contexte et son origine. Sur un restaurant ou un menu, il devrait correspondre à l'établissement. Méfiez-vous particulièrement des codes placés sur des affiches dans la rue ou les transports publics.

**Voice Phishing (Vishing)**: Le vishing utilise les appels téléphoniques pour manipuler les victimes. Les attaquants se font passer pour des banques, services gouvernementaux ou support technique, créant un sentiment d'urgence pour obtenir des informations sensibles ou de l'argent. Une règle d'or : aucune institution légitime ne demandera des informations sensibles par téléphone. En cas de doute, raccrochez et contactez l'organisation directement via son numéro officiel.

**SMS Phishing (Smishing)**: Le smishing combine SMS et phishing. Les attaquants envoient des messages se faisant passer pour des services de livraison, banques ou institutions gouvernementales. Ces SMS contiennent souvent des liens courts ou masqués pour contourner la méfiance. Ils exploitent des sujets d'actualité (Covid, impôts) ou des situations courantes (colis en attente, paiement refusé) pour créer l'urgence. Les messages peuvent sembler provenir de numéros légitimes grâce au spoofing. Ne cliquez jamais sur les liens dans les SMS inattendus, même s'ils semblent urgents. Contactez directement l'organisation concernée via ses canaux officiels.

:::info

Ces techniques s'appuient sur l'ingénierie sociale et exploitent souvent l'urgence ou la curiosité. La meilleure défense reste la vigilance et la vérification systématique des sources.

:::

#### Gel du dossier de crédit

Le gel de votre dossier de crédit offre une protection supplémentaire contre l'usurpation d'identité. En gelant l'accès à votre dossier, vous empêchez les fraudeurs d'ouvrir des comptes en votre nom, même s'ils ont vos informations personnelles.

[Geler son dossier de crédit pour contrer le vol d’identité - Magazine Protégez-Vous](https://www.protegez-vous.ca/nouvelles/affaires-et-societe/geler-son-dossier-de-credit-pour-contrer-le-vol-d-identite)

### 🦠 Dépasser les antivirus

Les antivirus traditionnels fonctionnent principalement sur un modèle de détection basé sur des signatures de logiciels malveillants connus, ce qui les rend inefficaces face aux nouvelles menaces et aux attaques sophistiquées. De plus, ils créent souvent un faux sentiment de sécurité qui peut conduire les utilisateurs à adopter des comportements plus risqués, pensant être totalement protégés. Les antivirus consomment également des ressources système importantes et peuvent parfois entrer en conflit avec d'autres applications légitimes, réduisant ainsi les performances globales de l'ordinateur.

Une approche plus efficace de la sécurité numérique repose sur une combinaison de bonnes pratiques : maintenir ses systèmes et logiciels à jour, utiliser des mots de passe forts et uniques avec un gestionnaire de mots de passe, activer l'authentification à deux facteurs, sauvegarder régulièrement ses données, et développer un esprit critique face aux courriels et aux téléchargements suspects. Cette approche proactive et holistique de la sécurité est plus adaptée au paysage actuel des menaces numériques, où les attaques par ingénierie sociale et les vulnérabilités *zero-day* sont devenues prédominantes.

:::tip

[VirusTotal](https://www.virustotal.com) est un service web gratuit qui analyse fichiers et URLs suspects en les soumettant simultanément à plus de 70 moteurs antivirus. Son principal avantage réside dans l'agrégation des résultats de multiples antivirus, offrant ainsi une vue d'ensemble plus fiable qu'un seul antivirus. Il propose également des analyses détaillées du comportement des fichiers et des métadonnées associées. Prenez garde simplement de ne pas y téléverser de fichiers personnels!

:::

#### L'accès physique à un ordinateur

La sécurisation d'un ordinateur Windows ou Linux passe par deux étapes fondamentales souvent négligées. Premièrement, il est crucial de définir un mot de passe BIOS/UEFI solide. Pour activer cette protection, il faut accéder aux paramètres du BIOS au démarrage (souvent via F2, F10 ou Suppr, selon votre matériel) et configurer un mot de passe superviseur.

:::info

Sans cette protection, un attaquant ayant un accès physique à votre machine pourrait facilement démarrer l'ordinateur depuis un support externe ou modifier des paramètres critiques du système.

:::

La deuxième étape essentielle consiste à chiffrer votre disque dur avec BitLocker (disponible sur Windows Pro) ou VeraCrypt (alternative gratuite et open source). Le chiffrement transforme toutes vos données en un format illisible sans la clé de déchiffrement, protégeant ainsi vos informations même si votre disque dur est physiquement volé. Sur Windows, BitLocker s'active facilement depuis les paramètres système et utilise idéalement une puce TPM pour stocker les clés de chiffrement de manière sécurisée.

Cette double protection, mot de passe BIOS et chiffrement du disque, forme un bouclier robuste contre les accès physiques non autorisés à vos données. Sur Mac, ces protections sont déjà intégrées par défaut via FileVault et la sécurité native du système.

### 👁️ Limiter le traçage en ligne

#### Malvertising

Les moteurs de recherche affichent souvent des liens sponsorisés trompeurs vers des sites de téléchargement malveillants. Ces sites imitent les pages officielles mais distribuent des versions modifiées contenant des logiciels malveillants, des barres d'outils indésirables ou des rançongiciels. 

Pour télécharger en toute sécurité, il faut se rendre directement sur le site officiel de l'éditeur, utiliser les magasins d'applications intégrés comme le Microsoft Store ou l'App Store, ou privilégier les gestionnaires de paquets comme Chocolatey (Windows), Homebrew (macOS) et apt/dnf (Linux) qui vérifient l'intégrité des logiciels.

#### Les navigateurs Web

Les trackers publicitaires vous suivent partout sur internet, construisant un profil détaillé de vos habitudes. Des extensions de navigateur comme uBlock Origin ou Privacy Badger bloquent efficacement ces trackers. Certains navigateurs, comme Firefox ou Brave, intègrent déjà des protections contre le traçage.

[Protection renforcée contre le pistage dans Firefox pour ordinateur - Mozilla](https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur)

#### Les moteurs de recherche

Votre moteur de recherche est aussi une source majeure de profilage. Contrairement à Google qui enregistre et analyse toutes vos recherches, des alternatives comme DuckDuckGo, Startpage ou Qwant ne conservent pas votre historique de recherche et ne créent pas de profil publicitaire. Ces moteurs de recherche offrent des résultats pertinents tout en respectant votre vie privée.

## 📉 Que faire si vos données ont fuité ou si on est victime de fraude ?

- Contacter le DPO (Délégué à la Protection des Données) en consultant la politique de confidentialité du service concerné
- Contacter l'agence gouvernementale de votre région qui s'occupe de la supervision de la protection des données personnelles pour l'organisme concerné
- [Fraude-Alerte.ca](https://fraude-alerte.ca) est le premier site communautaire au Canada qui permet de référencer les fraudes rencontrées sur Internet. Plus de 10000 y sont actuellement recensées ! Le site permet de s'informer ou de se faire aider si l'on est victime d'une fraude.
- [Aide-mémoire de la Clinique de cyber-criminologie](https://www.clinique-cybercriminologie.ca/aide-memoire) affiliée à l'Université de Montréal. Il est possible de les contacter pour recevoir du support.

:::tip

[HaveIBeenPwned](https://haveibeenpwned.com) est un service gratuit qui vous permet de vérifier si vos informations personnelles ont été compromises dans des fuites de données. Le site collecte et indexe les données de brèches de sécurité publiquement connues, permettant à chacun de vérifier si son email ou son mot de passe a été exposé.

:::

## Pour aller plus loin

<details>

<summary>
Cette page résume quelques conseils sans présenter explicitement de produits ou de services. Les ressources dans ce volet proposent des recommandations de logiciels et des conseils plus détaillés.
</summary>

- [Privacy Guides](https://www.privacyguides.org/fr/) est une ressource communautaire qui évalue et recommande des outils pour protéger votre vie privée en ligne. Le site se distingue par son approche factuelle et indépendante, proposant des alternatives privées aux services populaires, des guides de configuration détaillés et des analyses approfondies, le tout sans publicité ni monétisation.

![Capture d'écran de Personal Security Checklist](digital-security-website.png)

- [Digital Defense Initiative](https://digital-defense.io) est une ressource éducative gratuite et open source qui démystifie la sécurité numérique. Le site propose des tutoriels pratiques et accessibles pour sécuriser vos appareils et protéger votre vie privée au quotidien, avec des contenus régulièrement mis à jour et vérifiés par la communauté.

- Dans un monde de la sécurité numérique largement dominé par les ressources anglophones, le [Guide d'Autodéfense Numérique](https://guide.boum.org) est une pépite rare en français. Maintenu collectivement depuis plus de dix ans et régulièrement mis à jour, ce guide libre et gratuit se distingue par son approche pragmatique et son contenu de qualité. Structuré en trois tomes (Comprendre, Agir, Organiser), il accompagne les lecteurs des bases jusqu'aux techniques avancées, toujours avec des explications claires et sans jargon inutile. Contrairement aux guides commerciaux qui vendent des solutions miracles, il encourage une réflexion critique sur nos pratiques numériques et propose des solutions adaptées à différents niveaux de besoins.

</details>