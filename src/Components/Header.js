import React from 'react';
import { useLanguage } from '../LanguageContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/header.css';

function Header() {
  const { t } = useLanguage();

  return (
    <div className="header">
      <div className="app-container">
        <div className="header-body">
          <div className="left-side">
            <div className="left-side-container">
              <h1><span>Garry</span><span>Hasintsilavina</span></h1>
              <div className="underlining"></div>
              <p>{t('hpHeroParag')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
