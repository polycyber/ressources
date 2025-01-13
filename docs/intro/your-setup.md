---
sidebar_position: 4
---

# Ton environnement

# Configuration d'un environnement pour les CTF

La mise en place d'un environnement dédié aux CTF est une étape cruciale pour participer efficacement aux compétitions. L'utilisation de machines virtuelles permet d'avoir un environnement isolé, sécurisé et facilement réinitialisable. Elle offre également la possibilité de tester différentes configurations sans risquer d'endommager votre système principal. Cette approche est particulièrement importante car certains challenges peuvent nécessiter des configurations spécifiques ou l'installation d'outils qui pourraient entrer en conflit avec votre système principal.

## Choix de l'hyperviseur

L'hyperviseur est le logiciel qui permet de créer et gérer vos machines virtuelles. Le choix de l'hyperviseur dépendra de vos besoins et de votre système d'exploitation hôte.

### VirtualBox
Oracle VirtualBox est l'option la plus accessible pour débuter. C'est un hyperviseur de type 2 gratuit et open source qui fonctionne sur la plupart des systèmes d'exploitation. Il offre toutes les fonctionnalités essentielles comme la gestion de snapshots, les dossiers partagés et la configuration réseau avancée. Son interface graphique intuitive en fait un excellent choix pour les débutants.

### VMware
VMware propose plusieurs solutions d'hyperviseur. VMware Workstation Player est gratuit pour un usage personnel et offre les fonctionnalités de base. VMware Workstation Pro, bien que payant, ajoute des fonctionnalités avancées comme la gestion de snapshots multiples, la création de clones et un support réseau plus sophistiqué. VMware est généralement considéré comme plus performant que VirtualBox, particulièrement pour les charges de travail intensives.

## Machine virtuelle principale

Le choix de votre système d'exploitation principal pour les CTF est crucial. Les distributions Linux orientées sécurité sont privilégiées car elles incluent la plupart des outils nécessaires.

### Kali Linux
Kali Linux est la référence des distributions de sécurité. Basée sur Debian, elle inclut plus de 600 outils pré-installés couvrant tous les aspects de la sécurité informatique. La distribution est maintenue par Offensive Security et bénéficie de mises à jour régulières. Kali propose plusieurs environnements de bureau (XFCE, GNOME, KDE) et peut être personnalisée selon vos besoins.

### ParrotOS Security
ParrotOS est une alternative intéressante à Kali. Elle est réputée pour être plus légère et plus rapide, tout en offrant la plupart des outils essentiels. Son interface utilisateur est plus moderne et son système de gestion des paquets inclut des fonctionnalités de sandboxing. ParrotOS propose également une version "Home" plus légère pour ceux qui n'ont pas besoin de tous les outils de sécurité.

## Configuration recommandée

La configuration de votre machine virtuelle dépendra de vos besoins et des ressources disponibles sur votre machine hôte.

### Ressources matérielles
- Minimum 4 GB de RAM (8 GB recommandés)
- 50 GB d'espace disque (SSD de préférence)
- 2 cœurs CPU minimum (4 recommandés)
- Accélération matérielle activée
- Mémoire vidéo suffisante pour l'interface graphique

### Configuration réseau
- Mode pont pour l'accès direct au réseau
- NAT pour l'accès Internet sécurisé
- Réseau hôte uniquement pour l'isolation
- VPN configurable pour certains CTF

## Outils essentiels

:::tip

Des listes d'[outils](/docs/ctf/tools.md) proposés sont disponibles.

:::

### Éditeurs de texte et IDE
- Visual Studio Code avec les extensions de sécurité
- Sublime Text pour sa légèreté
- Vim/Neovim pour l'édition rapide
- PyCharm pour le développement Python

### Navigateurs
- Firefox Developer Edition
- Chrome/Chromium
- Burp Suite pour l'interception web

### Outils système
- Git pour le versioning
- Python avec pip et virtualenv
- Docker pour l'isolation des challenges
- Terminator ou `tmux` pour le multifenêtrage terminal

## Bonnes pratiques

- Créez des snapshots avant chaque modification majeure
- Documentez vos configurations dans un wiki personnel
- Maintenez une liste à jour de vos outils préférés
- Automatisez l'installation de votre environnement avec des scripts
- Synchronisez vos notes et scripts importants
