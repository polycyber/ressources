---
sidebar_position: 2
---

# Hack the Box

Méthodologie pour résoudre les boxes sur Hack the Box

## Reconnaissance initiale
* Scanner les ports avec nmap
* Utiliser telnet ou netcat pour récupérer les bannières des ports
* Énumérer les fichiers et dossiers (s'il y a un serveur web)
* Lire le code source des pages web
* Énumérer les sous-domaines (penser à ajouter le nom de domaine dans /etc/hosts sur votre machine)
* Utiliser Wappalyzer pour identifier les technologies utilisées par le site web
* Utiliser les outils appropriés pour se connecter aux ports ouverts de la box
* Noter chaque numéro de version rencontré et rechercher sur Internet s'il existe des exploits
* Noter les noms d'utilisateurs, adresses email et noms
* Accéder aux systèmes de partage de fichiers (SMB, FTP, RSYNC, ...)
* Tenter d'exploiter les vulnérabilités web les plus pertinentes selon le serveur (injection SQL, cross-site scripting, inclusion de fichiers locaux, ...)

## Élévation de privilèges
* Utilisateurs du système : fichiers personnels, privilèges et permissions, historique, ...
* Numéros de version (OS, logiciels, services, ...)
* Inspecter le dossier racine du serveur web (s'il y en a un sur la machine)
* Fichiers et dossiers communs : `/etc/passwd`, `C:\Program Files\`, `/var/log/.../`
* Ports ouverts liés à localhost (ex : localhost:3000)
* Programmes actifs, services, tâches cron, tâches planifiées, programmes non standard
* Clés SSH privées des utilisateurs (~/.ssh/authorized_keys) ou écrire sa propre clé SSH
* Configuration système : $PATH, binaires SUID, droits sudo (sudo -l)
* Fichiers modifiables, récemment modifiés et non standard
* Vecteurs d'attaque courants comme les dépassements de tampon, les mauvaises configurations, ...

## Astuces
* Avoir une machine virtuelle Windows si la box tourne sous Windows
* Tester le logiciel vulnérable (ex : GitLab, SharePoint, ...) sur votre machine locale pour comprendre son fonctionnement
* Compiler les binaires Windows avec `mingw32`
* Exécuter les binaires Windows avec Wine
* Si le serveur web utilise HTTPS, vérifier si le certificat TLS révèle des noms de sous-domaines

## Comment se débloquer
* Lire la page de manuel/documentation
* S'assurer d'avoir fait une reconnaissance exhaustive
* Vérifier que les commandes sont exécutées avec les bons paramètres et options
* Consulter [Ippsec](https://ippsec.rocks)
* Consulter les write-ups des machines retirées
* Être attentif aux nouvelles technologies
* Lire les articles de blog sur les nouvelles vulnérabilités

:::tip

[Ippsec Hack the box Walkthrough Videos](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA)

:::
