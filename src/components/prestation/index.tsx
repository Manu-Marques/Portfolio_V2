import "./styles.css";


export default function Prestation() {
  return (
    <div className="prestation-main">
      <h1 className="prestation-title">Prestations</h1>
      <div className="prestation-table">

        <div className="prestation-container">
          <div className="prestation-web">
            <h2 className="prestation-subtitle">Pourquoi faire un site internet ?</h2>
            <p className="prestation-web-text">Avoir un site internet aujourd'hui est crucial pour une entreprise, car il permet d'être présent en ligne en permanence, d'atteindre un public large et de promouvoir efficacement les produits ou services. De plus, un site web offre la possibilité d'interagir directement avec les clients, favorisant ainsi la croissance de l'entreprise.</p>
          </div>
            <div className="prestation-whyme">
              <h2 className="prestation-whyme-title">Pourquoi me choisir ?</h2>
              <p className="prestation-whyme-text">Je suis un développeur web à l'écoute de vos besoins et je vous accompagne tout au long de votre projet. Je m'engage à établir une relation de confiance avec les clients, en offrant un service transparent</p>
            </div>
          <div className="prestation-services">
            <div className="prestation-design">
              <h2 className="prestation-design-title">Design</h2>
              <p className="prestation-design-text">Je m'adapte à vos besoins pour créer un site web qui vous ressemble. Je vous propose un design moderne et épuré, qui s'adapte à tous les supports (ordinateur, tablette, mobile).</p>
            </div>
            <div className="prestation-performances">
              <h2 className="prestation-performances-title">Performance</h2>
              <p className="prestation-performances-text">Je m'engage à vous fournir un site web performant et optimisé, afin d'offrir une expérience utilisateur de qualité. Je vous propose également un référencement naturel (SEO) pour améliorer la visibilité de votre site web.</p>
            </div>
            <div className="prestation-follow">
              <h2 className="prestation-follow-title">Accompagnement</h2>
              <p className="prestation-follow-text">Je vous accompagne tout au long de votre projet, de la conception à la mise en ligne de votre site internet. Je vous propose également un accompagnement une fois votre site web en ligne afin de le mettre régulierement à jour.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
