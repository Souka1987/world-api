import { TranslationMessages } from "react-admin";
import frenchMessages from "ra-language-french";

const customFrenchMessages: TranslationMessages = {
  ...frenchMessages,
  pos: {
    search: "Rechercher",
    configuration: "Configuration",
    language: "Langue",
    theme: {
      name: "Theme",
      light: "Clair",
      dark: "Obscur",
    },
    dashboard: {
      monthly_revenue: "CA à 30 jours",
      month_history: "Chiffre d'affaire sur 30 jours",
      new_orders: "Nouvelles commandes",
      pending_reviews: "Commentaires à modérer",
      all_reviews: "Voir tous les commentaires",
      new_customers: "Nouveaux clients",
      all_customers: "Voir tous les clients",
      pending_orders: "Commandes à traiter",
      order: {
        items:
          "par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters",
      },
      welcome: {
        title: "Bienvenue sur la démo e-commerce de react-admin",
        subtitle:
          "Ceci est le back-office d'un magasin de posters imaginaire. N'hésitez pas à explorer et à modifier les données. La démo s'exécute en local dans votre navigateur, et se remet à zéro chaque fois que vous rechargez la page.",
        ra_button: "Site web de react-admin",
        demo_button: "Code source de cette démo",
      },
    },
    menu: {
      //   sales: "Ventes",
      catalog: "Catalogue",
      countries: "Pays",
      planets: "Planètes",
    },
  },
  resources: {
    form: {
      summary: "Résumé",
      body: "Corps de texte",
      infos: "Infos",
      comments: "Commentaires",
    },
    // edit: {
    //   title: 'Country "%{title}"',
    // },
    action: {
      save_and_edit: "Enregristrer et Modifier",
      save_and_add: "Enregristrer et Ajouter",
      save_and_show: "Enregristrer et Voir",
      save_with_average_note: "Enregristrer avec Noter",
    },
    countries: {
      name: "Pays |||| Pays",
      fields: {
        //   commands: "Orders",
        first_seen: "Première vue",
        groups: "Segments",
        last_seen: "Dernière vue",
        //   last_seen_gte: "Visited Since",
        name: "Nom",
        //   total_spent: "Total spent",
        //   password: "Password",
        //   confirm_password: "Confirm password",
        //   stateAbbr: "State",
        title: "Titre",
        tags: "Tags",
      },
      filters: {
        last_visited: "Dernière visite",
        today: "Aujourd'hui",
        this_week: "Cette semaine",
        last_week: "La semaine dernière",
        this_month: "Ce mois-ci",
        last_month: "Le mois dernier",
        earlier: "Plus tôt",
        has_ordered: "A déjà commandé",
        has_newsletter: "Abonné newsletter",
        group: "Segment",
      },
      fieldGroups: {
        informations: "Informations",
        address: "Adresse",
        affiliation: "Affiliation",
        tags: "Tags",
        key_dates: "Dates clées",
        history: "Historique",
        password: "Mot de passe",
        change_password: "Changer le mot de passe",
      },
      page: {
        delete: "Supprimer le client",
      },
      errors: {
        password_mismatch:
          "La confirmation du mot de passe est différent du mot de passe.",
      },
      comment: {
        list: {
          about: "A propos",
        },
      },
    },
    commands: {
      name: "Commande |||| Commandes",
      amount: "1 commande |||| %{smart_count} commandes",
      title: "Commande n°%{reference}",
      fields: {
        basket: {
          delivery: "Frais de livraison",
          reference: "Référence",
          quantity: "Quantité",
          sum: "Sous-total",
          tax_rate: "TVA",
          taxes: "TVA",
          total: "Total",
          unit_price: "P.U.",
        },
        address: "Adresse",
        customer_id: "Client",
        date_gte: "Emises depuis",
        date_lte: "Emises avant",
        nb_items: "Nb articles",
        reference: "Référence",
        returned: "Annulée",
        status: "Etat",
        total_gte: "Montant minimum",
      },
      section: {
        order: "Commande",
        customer: "Client",
        shipping_address: "Adresse de livraison",
        items: "Articles",
        total: "Total",
      },
    },
    invoices: {
      name: "Facture |||| Factures",
      fields: {
        id: "Numéro",
        date: "Date de facture",
        customer_id: "Client",
        command_id: "Commande",
        date_gte: "Emises depuis",
        date_lte: "Emises avant",
        address: "Adresse",
        total_ex_taxes: "Montant HT",
        delivery_fees: "Frais de livraison",
        taxes: "TVA",
      },
    },
    planets: {
      name: "Planète |||| Planètes",
      fields: {
        tag_id: "Tag",
        height_gte: "Hauteur minimum",
        height_lte: "Hauteur maximum",
        height: "Hauteur",
        image: "Image",
        // price: "Price",
        reference: "Référence",
        // sales: "Sales",
        // stock_lte: "Low Stock",
        // stock: "Stock",
        thumbnail: "Thumbnail",
        width_gte: "Largeur minimum",
        width_lte: "Largeur maximum",
        width: "Largeur",
      },
      tabs: {
        image: "Image",
        details: "Détails",
        description: "Description",
        reviews: "Commentaires",
      },
      filters: {
        categories: "Catégories",
        stock: "Stock",
        no_stock: "En rupture",
        low_stock: "1 - 9 unités",
        average_stock: "10 - 49 unités",
        enough_stock: "50 unités et plus",
        sales: "Ventes",
        best_sellers: "Meilleures ventes",
        average_sellers: "Moyennes",
        low_sellers: "Peu vendu",
        never_sold: "Jamais vendu",
      },
    },
    categories: {
      name: "Catégorie |||| Catégories",
      fields: {
        name: "Nom",
        planets: "Planètes",
      },
    },
    reviews: {
      name: "Commentaire |||| Commentaires",
      amount: "1 commentaire |||| %{smart_count} commentaires",
      relative_to_poster: "Commentaire sur",
      detail: "Détail du commentaire",
      fields: {
        customer_id: "Client",
        command_id: "Commande",
        product_id: "Produit",
        date_gte: "Publié depuis",
        date_lte: "Publié avant",
        date: "Date",
        comment: "Texte",
        status: "Statut",
        rating: "Classement",
      },
      action: {
        accept: "Accepter",
        reject: "Rejeter",
      },
      notification: {
        approved_success: "Commentaire approuvé",
        approved_error: "Erreur: Commentaire non approuvé",
        rejected_success: "Commentaire rejeté",
        rejected_error: "Erreur: Commentaire non rejeté",
      },
    },
    segments: {
      name: "Segment |||| Segments",
      fields: {
        countries: "Pays",
        planets: "Planètes",
        name: "Name",
      },
      data: {
        // Continents
        america: "Amerique 🌎",
        oceania: "Oceanie 🌏",
        europe: "Europe 🌍",
        africa: "Afrique 🌍",
        asia: "Asie 🌏",
        // Affiliation
        United_Nations: " Nations Unis 🇺🇳",
        European_Union: "Union Européenne 🇪🇺",
        NATO: "OTAN",
        G7: "G7",
        G20: "G20",
      },
    },
  },
};

export default customFrenchMessages;
