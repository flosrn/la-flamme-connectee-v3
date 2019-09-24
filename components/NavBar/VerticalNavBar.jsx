import React, { useContext } from "react";

import { ScrollContext } from 'src/contexts/scroll.context';


function VerticalNavBar({ ...props }) {
  const { scrollToSection } = useContext(ScrollContext);
  return (
    <nav id="cd-vertical-nav">
      <ul>
        <li>
          <a
            href="#presentation"
            data-number="1"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("presentation");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Présentation</span>
          </a>
        </li>
        <li>
          <a
            href="#howWorks"
            data-number="2"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("howWorks");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Comment ça marche ?</span>
          </a>
        </li>
        <li>
          <a
            href="#connect"
            data-number="5"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("connect");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Appairer le Flamme Connect</span>
          </a>
        </li>
        <li>
          <a
            href="#topDown"
            data-number="4"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("topDown");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">L'allumage inversé</span>
          </a>
        </li>
        <li>
          <a
            href="#download"
            data-number="3"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("download");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Téléchargement</span>
          </a>
        </li>
        <li>
          <a
            href="#project"
            data-number="6"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("project");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Le projet</span>
          </a>
        </li>
        <li>
          <a
            href="#team"
            data-number="7"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("team");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">L'équipe</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            data-number="8"
            className=""
            onClick={e => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <span className="cd-dot" />
            <span className="cd-label">Nous contacter</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default VerticalNavBar;