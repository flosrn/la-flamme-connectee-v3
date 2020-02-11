import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// @material-ui/core
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "30px 0"
  }
}));

function FAQExpansionPanels({ ...props }) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Puis-je utiliser le Flam'connect avec mon foyer bois ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Le Flam'connect s'adapte à tout type de foyer bois <strong>fermé</strong> (poêles à bois, insert, fours à
            bois etc.)
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">L'allumage de mon poêle ou insert pendant mon absence est-il sécurisé ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Selon le <strong>code des assurances</strong>, votre foyer bois peut fonctionner en votre absence à
            condition qu'il soit fermé et ramoné une à deux fois par an (selon votre contrat d'assurance).
            <br />
            <br />
            Notre boitier <strong>Flam'connect</strong> envoie une courte impulsion électrique de{" "}
            <strong>12 Volts</strong> (qui est une tension de sécurité) pendant <strong>5 secondes</strong> à l'allume
            feu <strong>Volcano'connect</strong> qui sera placé au préalable dans votre foyer bois fermé.
            <br />
            <br />
            L'allume feu <strong>Volcano'connect</strong> est composé d'une petite amorce chimique qui est l'équivalent
            d'une allumette ménagère (donc aucun problème d'auto-inflammation ou de sécurité).
            <br />
            <br />
            Vous pouvez donc allumer votre poêle ou insert à distance sans aucun risque à partir du moment où vous avez
            vérifié que votre foyer bois est correctement fermé 😊
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Quel type de bûches puis-je utiliser avec le Flam'connect ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Vous pouvez utiliser n'importe quel type de combustible prévu pour les foyers bois (bûches, cagettes, bûches
            compressées etc).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
            Puis-je démarrer mon foyer bois à distance sans utiliser la technique de l'allumage inversé ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Oui, vous pouvez utiliser le Volcano'connect en allumant votre foyer de manière traditionnelle en remplaçant
            votre allume-feu classique par un Volcano'connect. Cependant, gardez à l'esprit que l'allumage (ou
            combustion) inversé(e) reste idéal(e) si le laps de temps entre l'allumage et votre retour à la maison est
            important.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">
            Combien de temps à l'avance dois-je allumer mon feu pour que mon habitation soit à bonne température ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Le Flam'connect est équipé d'une sonde de température qui vous indique la température de votre habitation
            sur votre application. Chaque poêle et chaque maison ayant ses caractéristiques propres il est difficile de
            répondre précisément à cette question. Mais nous pouvons tout de même vous dire qu'en général un poêle à
            bois ou insert qui a été correctement calculé par rapport à la surface de votre habitation est capable
            d'augmenter sa température de 1 à 2 degrés par heure environ. À vous de vous faire votre propre expérience
            🙂
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& ul": {
      textAlign: "left",
      "& li": {
        fontSize: "14px"
      },
      "& li:before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 5,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#13c4a1"
      }
    }
  }
}))(MuiExpansionPanelDetails);

export default FAQExpansionPanels;
