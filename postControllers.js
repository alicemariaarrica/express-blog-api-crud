
const posts = [
    {
      title: "La Ricetta del Ciambellone Perfetto",
      slug: "ricetta-ciambellone",
      content: "Scopri come preparare un ciambellone soffice e gustoso, ideale per la colazione e la merenda.",
      image: "/imgs/ciambellone.jpg",
      tags: ["dolci", "colazione", "ciambellone"]
    },
    {
      title: "Cracker alla Barbabietola: Snack Salutare",
      slug: "cracker-barbabietola",
      content: "I cracker alla barbabietola sono un'alternativa sana e colorata per uno snack croccante e saporito.",
      image: "/imgs/cracker.barbabietola.jpg",
      tags: ["snack", "salutare", "barbabietola"]
    },
    {
      title: "Pane Fritto Dolce: Tradizione e Gusto",
      slug: "pane-fritto-dolce",
      content: "Il pane fritto dolce è una ricetta tradizionale che conquista grandi e piccoli, ideale per un dessert semplice.",
      image: "/imgs/pane_fritto_dolce.jpg",
      tags: ["dolci", "tradizionale", "dessert"]
    },
    {
      title: "Pasta alla Barbabietola: Un Piatto Colorato",
      slug: "pasta-barbabietola",
      content: "La pasta alla barbabietola è un primo piatto colorato e saporito, perfetto per stupire i commensali.",
      image: "/imgs/pasta_barbabietola.jpg",
      tags: ["primi piatti", "vegetariano", "barbabietola"]
    },
    {
      title: "Torta Paesana: Dolci Ricordi di Infanzia",
      slug: "torta-paesana",
      content: "La torta paesana è un dolce tradizionale, tipico delle feste, dal gusto intenso e avvolgente.",
      image: "/imgs/torta_paesana.jpg",
      tags: ["dolci", "tradizionale", "torta"]
    }
];

module.exports = posts;



exports.index = (req, res) => {
    const postList = posts.map(post => `<li>${post.title}</li>`).join("");
    res.send(`<ul>${postList}</ul>`);
  };
  

  exports.show = (req, res) => {
    const slug = req.params.slug;
    const post = posts.find(post => post.slug === slug);{
    if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: "Post non trovato" });
      }
    };