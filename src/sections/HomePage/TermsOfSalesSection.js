import React from "react";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: 40
  },
  textContainer: {
    textAlign: "justify"
  }
}));

export default function TermsOfSalesSection() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="terms-of-sales">
      <GridContainer justify="center" className={classes.mainContainer}>
        <GridItem xs={11} sm={11} md={8} lg={6} className={classes.textContainer}>
          <GridContainer justify="center">
            <GridItem center className={classes.gridItem}>
              <Title variant="h2">Conditions générales d'utilisation et conditions générales de ventes</Title>
            </GridItem>
          </GridContainer>
          <p>
            Les présentes conditions de vente sont conclues d’une part par la société
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            au capital social de 2000 € dont le siège social est situé à Lieu dit Nagut, 31370 Poucharramet,
            immatriculée au Registre du Commerce et des Sociétés de Toulouse sous le numéro 877 786 517 00012 ci-après
            dénommée La Flamme Connectée et gérant le site{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            et, d’autre part, par toute personne physique ou morale souhaitant procéder à un achat via le site internet{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            dénommée ci-après "l’acheteur".
          </p>
          <p>
            <strong>Article 1. Objet </strong>
          </p>
          <p>
            Les présentes conditions de vente visent à définir les relations contractuelles entre La Flamme Connectée et
            l’acheteur et les conditions applicables à tout achat effectué par le biais du site internet{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            . L’acquisition d’un produit à travers le présent site implique une acceptation sans réserve par l’acheteur
            des présentes conditions de vente dont l’acheteur reconnaît avoir pris connaissance préalablement à sa
            commande. Avant toute transaction, l’acheteur déclare d’une part que l’achat de produits sur le site{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            est sans rapport direct avec son activité professionnelle et est limité à une utilisation strictement
            personnelle et d’autre part avoir la pleine capacité juridique, lui permettant de s’engager au titre des
            présentes conditions générales de ventes.
          </p>
          <p>
            La société La Flamme Connectée conserve la possibilité de modifier à tout moment ces conditions de ventes,
            afin de respecter toute nouvelle réglementation ou dans le but d'améliorer l’utilisation de son site. De ce
            fait, les conditions applicables seront celles en vigueur à la date de la commande par l’acheteur.
          </p>
          <p>
            <strong>Article 2. Produits </strong>
          </p>
          <p>
            Les produits proposés sont ceux qui figurent sur le site{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            de la société La Flamme Connectée, dans la limite des stocks disponibles. La société La Flamme Connectée se
            réserve le droit de modifier à tout moment l’assortiment de produits. Chaque produit est présenté sur le
            site internet sous forme d’un descriptif reprenant ses principales caractéristiques techniques (contenance,
            utilisation, composition…). Les photographies sont les plus fidèles possibles mais n’engagent en rien le
            Vendeur. La vente des produits présentés dans le site
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            est destinée à tous les acheteurs résidants dans les pays qui autorisent pleinement l’entrée sur leur
            territoire de ces produits. (à modifier éventuellement)
          </p>
          <p>
            <strong>Article 3. Tarifs </strong>
          </p>
          <p>
            Les prix figurant sur les fiches produits du catalogue internet et sont des prix en Euros (€) toutes taxes
            comprises (TTC) tenant compte de la TVA applicable au jour de la commande. Tout changement du taux de la TVA
            pourra être répercuté sur le prix des produits. La société La Flamme Connectée se réserve le droit de
            modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour de la
            commande sera le seul applicable à l’acheteur. Les prix indiqués ne comprennent pas les frais de livraison,
            facturés en supplément du prix des produits achetés suivant le montant total de la commande. En France
            métropolitaine, pour toute commande supérieure ou égale à 45,00 euros TTC, les frais de port sont offerts ;
            pour toute commande inférieure à 45,00 euros TTC, un forfait de participation aux frais d’expédition sera
            facturé à l’acheteur d'un montant de 5,00 euros TTC.
          </p>
          <p>
            <strong>Article 4. Commande et modalités de paiement </strong>
          </p>
          <p>
            Avant toute commande, l’acheteur doit créer un compte sur le site{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>
            . La rubrique de création de compte est accessible directement depuis la barre de navigation. A chaque
            visite, l’acheteur, s’il souhaite commander ou consulter son compte (état des commandes, profil…), devra
            s’identifier à l’aide de ces informations. La société La Flamme Connectée propose à l’acheteur de commander
            et régler ses produits en plusieurs étapes, avec une option de paiement au choix :
          </p>
          {/* <p> */}
          {/*  <strong>- Paiement par virement bancaire :</strong> */}
          {/*  l’acheteur sélectionne les produits qu’il souhaite commander dans le « panier », modifie si besoin */}
          {/*  (quantités, références…), vérifie l’adresse de livraison ou en renseigne une nouvelle. Puis, les frais de */}
          {/*  port sont calculés et soumis à l’acheteur, ainsi que le nom du transporteur. Ensuite, l’acheteur choisit le */}
          {/*  mode de paiement de son choix : « Paiement par virement ». Enfin, la dernière étape lui propose de vérifier */}
          {/*  l’ensemble des informations, prendre connaissance et accepter les présentes conditions générales de vente en */}
          {/*  cochant la case correspondante, puis l’invite à valider sa commande en cliquant sur le bouton « Confirmer ma */}
          {/*  commande ». Ce dernier clic forme la conclusion définitive du contrat. Dès validation, l’acheteur reçoit un */}
          {/*  bon de commande confirmant l’enregistrement de sa commande. Afin de finaliser son paiement et déclencher le */}
          {/*  traitement de sa commande, l’acheteur doit contacter sa banque afin d'effectuer le virement correspondant au */}
          {/*  montant de sa commande vers le compte bancaire de La Flamme Connectée, dont les coordonnées sont */}
          {/*  communiquées à l'acheteur. Dès réception du virement, la commande sera traitée et l’acheteur en sera informé */}
          {/*  par e-mail. La société La Flamme Connectée expédiera les produits au plus tôt 2 jours ouvrés après réception */}
          {/*  du virement correspondant à la commande, sous réserve de provisions. */}
          {/* </p> */}
          <p>
            <strong>- Paiement sécurisé par carte bancaire : </strong>
            les paiements sont réalisés par le biais du système sécurisé STRIPE qui utilise le protocole SSL (Secure
            Socket Layer) de telle sorte que les informations transmises sont cryptées par un logiciel. L’acheteur
            reçoit alors un justificatif de paiement par messagerie électronique. L’acheteur sélectionne les produits
            qu’il souhaite commander dans le « panier », modifie si besoin (quantités, références…), vérifie l’adresse
            de livraison ou en renseigne une nouvelle. Puis, les frais de port sont calculés et soumis à l’acheteur,
            ainsi que le nom du transporteur. Ensuite, l’acheteur choisit le mode de paiement de son choix : « Paiement
            par carte banquaire ». L’étape suivante lui propose de vérifier l’ensemble des informations, prendre
            connaissance et accepter les présentes conditions générales de vente en cochant la case correspondante, puis
            l’invite à valider sa commande en cliquant sur le bouton « Confirmer ma commande ». Enfin, l’acheteur est
            redirigé sur l’interface sécurisée STRIPE afin de renseigner en toute sécurité ses références de carte bleue
            personnelle. Si le paiement est accepté, la commande est enregistrée et le contrat définitivement formé. Le
            paiement par carte bancaire est irrévocable. En cas d’utilisation frauduleuse de celle-ci, l’acheteur pourra
            exiger l’annulation du paiement par carte, les sommes versées seront alors recréditées ou restituées. La
            responsabilité du titulaire d’une carte bancaire n’est pas engagée si le paiement contesté a été prouvé
            effectué frauduleusement, à distance, sans utilisation physique de sa carte. Pour obtenir le remboursement
            du débit frauduleux et des éventuels frais bancaires que l’opération a pu engendrer, le porteur de la carte
            doit contester, par écrit, le prélèvement auprès de sa banque, dans les 70 jours suivant l’opération, voire
            120 jours si le contrat le liant à celle-ci le prévoit. Les montants prélevés sont remboursés par la banque
            dans un délai maximum d’un mois après réception de la contestation écrite formée par le porteur. Aucun frais
            de restitution des sommes ne pourra être mis à la charge du titulaire.
          </p>
          <p>
            La confirmation d’une commande entraîne acceptation des présentes conditions de vente, la reconnaissance
            d’en avoir parfaite connaissance et la renonciation à se prévaloir de ses propres conditions d’achat.
            L’ensemble des données fournies et la confirmation enregistrée vaudront preuve de la transaction. Si
            l’acheteur possède une adresse électronique et s’il l’a renseignée sur son bon de commande, la société La
            Flamme Connectée lui communiquera par courrier électronique la confirmation de l’enregistrement de sa
            commande.
          </p>
          <p>
            Si l’acheteur souhaite contacter la société La Flamme Connectée, il peut le faire soit par courrier à
            l’adresse suivante : Lieu dit Nagut, 31370 Poucharramet ; soit par email à l’adresse suivante :{" "}
            <a href="mailto:contact@laflammeconnectee.fr">contact@laflammeconnectee.fr</a>, soit par téléphone au 06 10
            44 03 73.
          </p>
          <p>
            <strong>Article 5. Réserve de propriété </strong>
          </p>
          <p>
            La société La Flamme Connectée conserve la propriété pleine et entière des produits vendus jusqu'au parfait
            encaissement du prix, en principal, frais et taxes compris.
          </p>
          <p>
            <strong>Article 6. Rétractation </strong>
          </p>
          <p>
            En vertu de l’article L121-20 du Code de la consommation, l’acheteur dispose d'un délai de trente jours
            ouvrables à compter de la livraison de leur commande pour exercer son droit de rétractation et ainsi faire
            retour du produit au vendeur pour échange ou remboursement sans pénalité, à l’exception des frais de retour.
          </p>
          <p>
            <strong>Article 7. Livraison </strong>
          </p>
          <p>
            Les livraisons sont faites à l’adresse indiquée sur le bon de commande qui ne peut être que dans la zone
            géographique convenue. Les commandes sont effectuées par La Poste via COLISSIMO, service de livraison avec
            suivi, remise sans signature. Les délais de livraison ne sont donnés qu’à titre indicatif ; si ceux-ci
            dépassent trente jours à compter de la commande, le contrat de vente pourra être résilié et l’acheteur
            remboursé. La société La Flamme Connectée pourra fournir par e-mail à l’acheteur le numéro de suivi de son
            colis. L’acheteur est livré à son domicile par son facteur. En cas d’absence de l’acheteur, il recevra un
            avis de passage de son facteur, ce qui lui permet de retirer les produits commandés au bureau de Poste le
            plus proche, pendant un délai indiqué par les services postaux. Les risques liés au transport sont à la
            charge de l'acquéreur à compter du moment où les articles quittent les locaux de la société La Flamme
            Connectée. L’acheteur est tenu de vérifier en présence du préposé de La Poste ou du livreur, l’état de
            l’emballage de la marchandise et son contenu à la livraison. En cas de dommage pendant le transport, toute
            protestation doit être effectuée auprès du transporteur dans un délai de trois jours à compter de la
            livraison.
          </p>
          <p>
            <strong>Article 8. Garantie </strong>
          </p>
          <p>
            Tous les produits fournis par la société La Flamme Connectée bénéficient de la garantie légale prévue par
            les articles 1641 et suivants du Code civil. En cas de non conformité d’un produit vendu, il pourra être
            retourné à la société La Flamme Connectée qui le reprendra, l’échangera ou le remboursera. Toutes les
            réclamations, demandes d’échange ou de remboursement doivent s’effectuer par voie postale à l’adresse
            suivante : Lieu dit Nagut 31370 Poucharramet, dans un délai de trente jours après livraison.
          </p>
          <p>
            <strong>Article 9. Responsabilité </strong>
          </p>
          <p>
            La société La Flamme Connectée, dans le processus de vente à distance, n’est tenue que par une obligation de
            moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l’utilisation du réseau
            Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires.
          </p>
          <p>
            <strong>Article 10. Propriété intellectuelle </strong>
          </p>
          <p>
            Tous les éléments du site{" "}
            <Link href="/">
              <a> laflammeconnectee.fr</a>
            </Link>{" "}
            sont et restent la propriété intellectuelle et exclusive de la société La Flamme Connectée. Personne n’est
            autorisé à reproduire, exploiter, ou utiliser à quelque titre que ce soit, même partiellement, des éléments
            du site qu’ils soient sous forme de photo, logo, visuel ou texte.
          </p>
          <p>
            <strong>Article 11. Données à caractère personnel</strong>
          </p>
          <p>
            La société La Flamme Connectée s'engage à préserver la confidentialité des informations fournies par
            l’acheteur, qu'il serait amené à transmettre pour l'utilisation de certains services. Toute information le
            concernant est soumise aux dispositions de la loi n° 78-17 du 6 janvier 1978. A ce titre, l'internaute
            dispose d'un droit d'accès, de modification et de suppression des informations le concernant. Il peut en
            faire la demande à tout moment par courrier à l’adresse suivante : Lieu dit Nagut, 31370 Poucharramet.
          </p>
          <p>
            <strong>Article 12. Loi applicable</strong>
          </p>
          <p>
            Les présentes CGU-CGV sont soumises à la loi française. Pour tous litiges ou contentieux, le Tribunal
            compétent sera celui de Toulouse.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
