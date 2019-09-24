import React from "react";
// import { Link } from 'react-router-dom';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
// @material-ui/icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// @material-ui/core
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// contexts

function CustomizedExpansionPanels({ ...props }) {
  const { title, description } = props;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>0 - Prérequis :</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Avant d’utiliser votre Flamme Connect, assurez-vous que :</Typography>
          <ul>
            <li>Votre Flamme Connect soit branché sur le secteur</li>
            <li>Votre Smartphone ou tablette soit connecté(e) en Wifi à votre box internet</li>
            <li>Votre Smarthphone ou tablette possède l’application AppStore (iOS) ou Google Play (Android)</li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>1 - Appairer votre Flamme Connect :</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
            {/*<li>Téléchargez l’application <Link to={"/"} onClick={() => scrollToSection("download")}>Ewelink</Link> et créez votre compte</li>*/}
            <li>Appuyez sur le bouton blanc de votre Flamme Connect jusqu’à ce que la led Wifi bleue clignote rapidement</li>
            <li>Sur l’application Ewelink, cliquez sur le bouton +</li>
            <li>Rester dans l’environnement de la box</li>
            <li>Sélectionnez votre Wifi et entrez le mot de passe de votre Box Internet</li>
            <li>Attendre l’appairage (cela peut prendre quelques minutes)</li>
            <li> Cliquez sur « ajouter avec succès »</li>
            <li>Vous pouvez renommer l’appareil appairé en cliquant en haut à droite sur « … » puis « réglages »</li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>2 - Comment utiliser votre Flamme Connect :</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
            <li>En cliquant directement sur le bouton ON/OFF de l’application</li>
            <li>En utilisant les fonctions « timing » et « compte à rebours » pour programmer le moment de l’allumage du poêle</li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>3 - A savoir :</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
            <li>La sonde TH Sensor fournie avec votre Flamme Connect vous pernet de connaitre la température de votre habitation en temps réel</li>
            <li>La température apparait au dessus du bouton ON/OFF sur votre application Ewelink</li>
            <li>Restez en mode « manuel »</li>
          </ul>
          <Typography>Si ce message s’affiche :</Typography>
          <i>« Erreur de couplage : Incapable de trouver l’appareil, vérifier la configuration ci-dessous »</i>
          <ul>
            <li>Cliquez sur « essayer le mode d’appairage »</li>
            <li>Débranchez votre Flamme Connect</li>
            <li>Appuyez sur le bouton blanc 7 secondes, relâchez et recommencez l’opération 7 secondes jusqu’à ce que la led bleue clignote rapidement 1 fois par seconde  </li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& ul": {
      textAlign: "left"
    }
  },
}))(MuiExpansionPanelDetails);

export default CustomizedExpansionPanels;

// Steppers.propTypes = {
//   classes: PropTypes.object.isRequired,
//   icon: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   iconColor: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   vertical: PropTypes.bool
// };

// export default withStyles(steppersStyle)(Steppers);
