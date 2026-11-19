# Souffle

Réapprendre à respirer **bas, lent et léger** : deux séances guidées de 5 minutes par jour (matin et soir), des micro-pauses dans la journée, et un programme progressif de 4 semaines.

L'appli tient en quelques fichiers statiques. Pas de serveur, pas de compte, pas d'IA : elle fonctionne hors ligne une fois installée.

## Adresse

https://theooussalem1999-cyber.github.io/souffle/

## Installer sur Android

1. Ouvre l'adresse dans **Chrome**.
2. Appuie sur **Installer** dans l'appli, ou menu **⋮** puis **Installer l'application**.
3. Souffle apparaît avec les autres applis, en plein écran, et marche sans réseau.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'appli : programme, interface, polices. |
| `manifest.webmanifest` | Permet l'installation sur l'écran d'accueil. |
| `sw.js` | Fait fonctionner l'appli sans connexion et gère les mises à jour. |
| `icon-192.png`, `icon-512.png`, `maskable-512.png`, `apple-touch-icon.png` | Icônes. |

## Le programme

- **Semaine 1, retrouver le ventre** (allongé) : inspire 4 s, expire 6 s, seule la main sur le ventre bouge.
- **Semaine 2, ralentir** (assis) : on ajoute une courte pause après l'expiration.
- **Semaine 3, alléger** (debout) : respirer un peu moins que ce qu'on voudrait, légère envie d'air tolérée.
- **Semaine 4 et plus, en mouvement** : respiration basse en marchant, bouche fermée, puis entretien.

L'étape avance seule chaque semaine ; on peut la changer à la main. Suivi : ressenti du souffle (1 à 10), pause de contrôle chronométrée, calendrier des séances, série de jours.

## Rappels

Une appli web ne peut pas sonner seule à heure fixe. Dans **Progrès > Rappels**, les boutons créent des événements Google Agenda quotidiens (matin et soir), ou un fichier d'agenda `.ics`.

## Sauvegarder

Les données restent sur le téléphone. Elles ne sont effacées que si tu désinstalles l'appli ou vides les données de Chrome pour ce site. **Progrès > Mes données > Télécharger** de temps en temps ; **Restaurer un fichier** sur un nouveau téléphone.

## Mettre à jour

Modifie `index.html`, puis change le numéro dans `sw.js` (par exemple `souffle-1.0.0` → `souffle-1.0.1`). Les téléphones prennent la nouvelle version à l'ouverture suivante.

## Crédits

Polices sous licence SIL Open Font License 1.1 : Fraunces (Undercase Type) et Inter (Rasmus Andersson).

Souffle ne remplace pas un avis médical. Vertiges ou inconfort : arrête l'exercice et respire normalement. Essoufflement soudain, douleur thoracique, sifflements ou gêne qui s'aggrave : consulte.
