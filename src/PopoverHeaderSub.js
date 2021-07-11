import React from 'react';
import './styles/PopoverHeaderSub.css'

function PopoverHeaderSub() {
    return (
      <div className="popover_header_sub">
        <h6>Inscrivez-vous sur Clone Prime et bénéficiez de :</h6>
        <div className="popover_header_sub_row">
          <span className="title_popover_row">
            Livraison en 1 jour ouvré gratuite
          </span>
          <p>Livraison gratuite à volonté pour des millions d'articles</p>
        </div>
        <div className="popover_header_sub_row">
          <span className="title_popover_row"></span>
          <p></p>
        </div>
        <div className="popover_header_sub_row">
          <span className="title_popover_row"></span>
          <p></p>
        </div>
      </div>
    );
}

export default PopoverHeaderSub

