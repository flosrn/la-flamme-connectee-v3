import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";
import PolicyIcon from "@material-ui/icons/Policy";
import { initGA } from "utils/analytics";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [isOpen, setOpen] = useState(false);

  const handleScroll = () => {
    const acceptOnScrollPercentage = 1;
    if (document) {
      const rootNode = document.documentElement || document.body;
      if (rootNode) {
        // (top / (height - height)) * 100
        const percentage = (rootNode.scrollTop / (rootNode.scrollHeight - rootNode.clientHeight)) * 100;

        if (percentage > acceptOnScrollPercentage) {
          if (isOpen) {
            Cookies.set("consent", "true");
            initGA();
          }
          setOpen(false);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  });

  return (
    <div>
      <Snackbar open={isOpen}>
        <Slide in={isOpen} direction="up">
          <Alert severity="info" variant="filled" icon={<PolicyIcon fontSize="inherit" />}>
            Nous utilisons des cookies pour nous assurer que nous vous offrons la meilleure expérience sur notre site
            Web. Lisez notre politique de confidentialité.
          </Alert>
        </Slide>
      </Snackbar>
    </div>
  );
}
