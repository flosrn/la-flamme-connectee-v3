import React, { useState, useEffect } from "react";
import { initGA, logPageView } from "utils/analytics";
import Router from "next/router";
import Cookies from "js-cookie";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import PolicyIcon from "@material-ui/icons/Policy";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";

export default function CookieConsent() {
  const [isOpen, setOpen] = useState(false);

  const initGoogleAnalytics = () => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  };

  const handleScroll = () => {
    const acceptOnScrollPercentage = 1;
    const rootNode = document.documentElement || document.body;
    if (rootNode) {
      // (top / (height - height)) * 100
      const percentage = (rootNode.scrollTop / (rootNode.scrollHeight - rootNode.clientHeight)) * 100;

      if (percentage > acceptOnScrollPercentage) {
        if (isOpen) {
          Cookies.set("consent", "true");
          process.env.NODE_ENV === "production" && initGoogleAnalytics();
        }
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    const cookieconsent = Cookies.get("consent");
    if (cookieconsent) {
      process.env.NODE_ENV === "production" && initGoogleAnalytics();
    } else {
      setTimeout(() => {
        setOpen(true);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (window) {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (window) {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }
  });

  const handleClose = () => {
    process.env.NODE_ENV === "production" && initGoogleAnalytics();
    Cookies.set("consent", "true");
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={isOpen} style={{ bottom: 5 }}>
        <Slide in={isOpen} direction="up">
          <Alert
            severity="success"
            icon={<PolicyIcon fontSize="inherit" />}
            style={{ alignItems: "center" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                style={{ position: "absolute", top: 3, right: 3 }}
                onClick={handleClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <span>
              En poursuivant votre navigation sur ce site, vous acceptez l’utilisation des cookies.{" "}
              <Link href="/privacy">
                <a>En savoir plus.</a>
              </Link>
            </span>
          </Alert>
        </Slide>
      </Snackbar>
    </div>
  );
}
