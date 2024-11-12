var express = require('express');
var router = express.Router();

const cartelera = [
  "Harry Potter y la Piedra Filosofal - El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Deberá acudir entonces a una famosa escuela de magia y hechicería: Howards.",
  "Los Juegos del Hambre - Para demostrar su poder, el régimen del estado totalitario de Panem organiza cada año los juegos del hambre. En ellos, 24 jóvenes compiten el uno contra el otro en una batalla en la que solo puede haber un superviviente. La joven Katniss se ofrece voluntaria para participar en los juegos para salvar a su hermana. Junto a ella participará Peeta, un joven al que ha conocido desde la infancia y que está enamorado de ella. Sin embargo, el Capitolio quiere convertirlos en contrincantes.",
  "Maze Runner - Thomas es un adolescente cuya memoria fue borrada y que ha sido encerrado junto a otros chicos de su edad en un laberinto plagado de monstruos y misterios. Para sobrevivir, tendrá que adaptarse a las normas y a los demás habitantes del laberinto.", 
  "A la Mala - Después de que su mejor amiga la contrata para poner a prueba la fidelidad de su pareja, una joven encuentra una nueva carrera lucrativa. Pero los problemas se presentan cuando ella se enamora de la persona que vigila.",
  "Ciudades de Papel - El joven Quentin está convencido de que a todos nos corresponde un milagro, y el suyo fue terminar viviendo enfrente de Margo, la criatura más hermosa jamás creada, cuya vida, según Quentin, es una sucesión de aventuras épicas. Con Margo desaparecida, Quentin se ve obligado a digerir lo sucedido y empieza a buscar pistas sobre ella."
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cartelera de Películas Cinepolis', cartelera });
});

module.exports = router;
