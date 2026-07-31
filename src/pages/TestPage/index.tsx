import { Header } from '../../containers/Header';
import { useState } from 'react';
import './style.css';

export function TestPage() {
  const [open, setOpen] = useState(false);

  const openLoginInNewTab = () => {
    window.open('/login', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />
      <main className="testpage">
        <div className="testpage__wrapper">
          <h2 className="testpage__title">Тестовая страница</h2>

          <div className="testpage__buttons">
            <button
              id="open-dialog"
              className="testpage__button"
              onClick={() => setOpen(true)}
            >
              Открыть диалог
            </button>
            <button
              id="open-login-new-tab"
              className="testpage__button testpage__button--secondary"
              onClick={openLoginInNewTab}
            >
              Открыть логин в новой вкладке
            </button>
          </div>

          {open && (
            <div className="dialog-overlay" role="presentation">
              <div className="dialog" role="dialog" aria-modal="true">
                <p className="dialog__text">Это диалоговое окно.</p>
                <button
                  className="testpage__button testpage__button--secondary"
                  onClick={() => setOpen(false)}
                >
                  закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default TestPage;
