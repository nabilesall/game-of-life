# JEU DE LA VIE

Le Jeu de la Vie, créé par le mathématicien britannique John Conway en 1970, est un automate 
cellulaire fascinant qui évolue selon des règles simples mais génère une complexité surprenante. 
Basé sur un tableau bidimensionnel de cellules pouvant être vivantes ou mortes, le jeu évolue à 
chaque itération en suivant des règles basées sur le nombre de voisins vivants d'une cellule. Ces 
règles conduisent à l'émergence de motifs intrigants, de structures stables, et même de simulateurs universels. 
Conway, décédé en 2020, a laissé un héritage durable avec le Jeu de la Vie, devenu emblématique en informatique, 
en mathématiques récréatives et en explorations des systèmes dynamiques. Son œuvre a influencé divers domaines, 
illustrant la beauté et la complexité qui peuvent découler de règles simples dans un monde numérique.

## Règles du jeu

Le jeu de la vie est un automate cellulaire, c'est-à-dire un modèle mathématique pour un système dynamique 
qui évolue dans le temps en fonction d'un ensemble de règles simples. Il est constitué d'une grille à deux 
dimensions de cellules carrées, chacune pouvant être dans l'un des deux états possibles, vivante ou morte. 
Chaque cellule interagit avec ses huit voisines, qui sont les cellules directement adjacentes horizontalement, 
verticalement ou en diagonale. À chaque étape de temps, les transitions suivantes se produisent :
<ul>
  <li>Toute cellule vivante avec moins de deux voisins vivants meurt, comme si par sous-population.</li>
  <li>Toute cellule vivante avec deux ou trois voisins vivants vit jusqu'à la prochaine génération.</li>
  <li>Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.</li>
  <li>Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.</li>
</ul>

Dans notre contexte les cellules vivantes sont coloriée.

## Pourquoi ce projet ?

Ce projet a été réalisé dans le cadre d'un challenge de programmation organisé par [Elias W. Bâ](https://github.com/eliaswalyba) 
visant à motiver les jeunes de la [#TL221](https://twitter.com/search?q=tl221&src=typed_query) à améliorer leurs compétences en programmation.

## Comment jouer ?

Il faut lire la présentation du jeu de la vie pour comprendre les règles du jeu et les fonctions implémentées dans ce projet.
<img src="https://github.com/nabilesall/game-of-life/images/gros-plan.png" alt="Gros plan sur le jeu de la vie" width="100%" height="100%">

Par défaut, le jeu et en pause et se lance sur le cadre `INS` (Idrissa Nabile Sall). Pour démarer le jeu, il faut cliquer sur le switch `Run/Stop`. Ou cliquer sur `Espace`. Ce cadre affiche mes initiales avec une particularité sur la lettre N. La ligne oblique de la lettre N est une ligne de cellules vivantes de planneurs produites par un canon à planeurs. Vous pouvez interagir sur ce cadre pour générer d'autres motifs.
<img src="https://github.com/nabilesall/game-of-life/images/interaction-ins.gif">.  

Le cadre `Aléatoire` permet de générer un cadre aléatoire sans motif particulier.  
Pour avoir un cadre vide, il faut cliquer sur le bouton `Supprimer`.

## Fonctionnalités

1- Ajouter une cellule vivante en cliquant sur une cellule morte./ Supprimer une cellule vivante en cliquant sur une cellule vivante.
<img src="https://github.com/nabilesall/game-of-life/images/add-delete.gif">

2- Dessiner un motif avec la souris. / Effacer un motif avec la souris.
Pour dessiner un motif avec la souris, il faut sur mettre sur le canvas et enfoncer le bouton `Shift` de votre clavier. Même chose pour effacer un motif mais cette fois-ci avec le bouton `Ctrl` de votre clavier et en déplaçant la souris sur les cellules vivantes à effacer.
<img src="https://github.com/nabilesall/game-of-life/images/draw.gif">

3- Ajouter un motif prédéfini.
Pour ajouter un motif prédéfini, il faut faire un clic droit sur le canvas et choisir le motif à ajouter.
<img src="https://github.com/nabilesall/game-of-life/images/pattern.png">

A défaut de dessiner votre propre motif, vous pouvez choisir un motif prédéfini dans la liste ci-dessus.
Cliquer sur `suppr` pour sortir de cette fonctionnalité.

4- Changer la vitesse du jeu.
Pour changer la vitesse du jeu, vous pouver utiliser le slider `Speed` ou les boutons `+` et `-`.
<img src="https://github.com/nabilesall/game-of-life/images/slider-vitesse.png">

5- Zoomer et dézoomer sur le canvas.
Pour zoomer et dézoomer sur le canvas, vous pouvez utiliser la molette de votre souris.
<img src="https://github.com/nabilesall/game-of-life/images/zoom.gif">

Ou `ctrl` + `pavé tactile`(vers le haut ou vers le bas)

6- Déplacer le canvas.
Pour déplacer le canvas, vous pouvez faire double clic appuyé sur le canvas et déplacer la souris.
<img src="https://github.com/nabilesall/game-of-life/images/deplacer.gif">

## Raccourcis clavier

`Espace` : Lancer le jeu. Ou le mettre en pause.
`r` : Réinitialiser le jeu avec un cadre vide.
`i` : Afficher la fenêtre d'aide.
`clic gauche` : Ajouter une cellule vivante.
`clic droit` : Afficher la liste des motifs prédéfinis.
`suppr` : Sortir de la liste des motifs prédéfinis.
`+` ou `flèche du haut` : Augmenter la vitesse du jeu.
`-` ou `flèche du bas` : Diminuer la vitesse du jeu.
`Shift` + `deplacement souris sur le canvas` : Dessiner avec la souris sur le canvas.
`Ctrl` + `deplacement souris sur le canvas` : Effacer avec la souris sur le canvas.
`Ctrl` + `pavé tactile`(vers le haut ou vers le bas) : Zoomer et dézoomer sur le canvas.

## Sources

- [Wikipedia](https://fr.wikipedia.org/wiki/Jeu_de_la_vie)
- [Conway's Game of Life - YouTube](https://youtu.be/R9Plq-D1gEk?si=WQriXhQ668xCjSMs)
- [Let’s BUILD a COMPUTER in CONWAY's GAME of LIFE ⠠⠵ - YouTube](https://youtu.be/Kk2MH9O4pXY?si=SJT7npnUSH3Gqpgb)
- [El Jj - Deux (deux ?) minutes pour - YouTube](https://youtu.be/9Hpy6MKM-J8?si=o43eKPTvfbJLDUF4)
- [cypris.fr -PDF](https://cypris.fr/loisirs/le_jeu_de_la_vie.pdf)