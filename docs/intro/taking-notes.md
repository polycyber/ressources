---
sidebar_position: 5
---
# Prise de notes

La prise de notes est essentielle en CTF pour documenter vos découvertes, techniques et méthodologies. Une bonne organisation vous permettra de constituer votre propre base de connaissances réutilisable.

## Outils de prise de notes

### Obsidian
Parfait pour les CTF grâce à :
- Stockage local en markdown
- Système de liens bidirectionnels
- Support des graphes de relations
- Organisation en coffres (vaults)
- Plugins communautaires utiles
  - Diagrammes avec Mermaid
  - Code syntax highlighting 
  - Tableaux améliorés
  - Export PDF/HTML

### Notion
Excellent pour le travail d'équipe :
- Collaboration en temps réel
- Templates personnalisables
- Bases de données relationnelles
- Partage facile de pages
- Intégration multimédia fluide

### CherryTree
Spécialement conçu pour les pentests :
- Structure hiérarchique
- Support du code et des commandes
- Export en formats multiples
- Léger et rapide
- Chiffrement des notes

## Organisation suggérée

### Structure de base
```
CTF/
├── Techniques/
│   ├── Web/
│   ├── Pwn/
│   ├── Crypto/
│   └── Reverse/
├── Writeups/
│   ├── Par_événement/
│   └── Par_catégorie/
├── Outils/
│   ├── Scripts/
│   └── Configurations/
└── Ressources/
    ├── Cheatsheets/
    └── Documentation/
```

### Templates de notes

**Template de challenge**
```markdown
# Nom du challenge
- **Événement:** NorthSec 2024
- **Catégorie:** Web
- **Points:** 500
- **Description:** [Description originale]

## Reconnaissance
[Observations initiales]

## Approche
[Méthodologie suivie]

## Solution
[Détails de la solution]

## Outils utilisés
- Tool1
- Tool2

## Leçons apprises
[Points clés à retenir]

## Flag
`CTF{flag}`
```

## Bonnes pratiques

### Organisation
- Utilisez des tags cohérents
- Créez des liens entre notes connexes
- Maintenez un index à jour
- Documentez vos scripts

### Documentation
- Capturez les commandes exactes
- Incluez les erreurs rencontrées
- Ajoutez des captures d'écran
- Notez les ressources consultées

### Sauvegarde
- Git pour le versioning
- Sync cloud (Dropbox/Google Drive)
- Exports réguliers
- Backup local

:::tip

La clé est de trouver un système qui vous convient et de s'y tenir. L'important est moins l'outil choisi que la constance dans son utilisation et l'organisation de l'information.

:::