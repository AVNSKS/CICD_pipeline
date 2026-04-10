import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Playground</p>
          <h1>Build interfaces that feel alive.</h1>
          <p className="lead">
            A refreshed starter with bold visual rhythm, fast interactions, and a
            responsive layout ready for real features.
          </p>
          <div className="hero-actions">
            <button className="counter" onClick={() => setCount((value) => value + 1)}>
              Tap count {count}
            </button>
            <a className="ghost-button" href="https://react.dev" target="_blank">
              React docs
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
          <div className="status-chip">Hot reload enabled</div>
        </div>
      </section>

      <section className="panel-grid">
        <article className="panel">
          <h2>Fast local flow</h2>
          <p>
            Edit <code>src/App.tsx</code>, save, and see updates instantly with
            zero page reload.
          </p>
        </article>
        <article className="panel">
          <h2>Modern stack</h2>
          <p>
            Powered by <strong>Vite</strong> for speed and <strong>React</strong>{' '}
            for composable UI patterns.
          </p>
        </article>
        <article className="panel">
          <h2>Ready to scale</h2>
          <p>
            Start simple, then add routes, API calls, state, and tests without a
            redesign.
          </p>
        </article>
      </section>

      <section className="resource-strip" id="next-steps">
        <div>
          <h2>Explore next</h2>
          <ul>
            <li>
              <a href="https://vite.dev/guide/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Vite guide
              </a>
            </li>
            <li>
              <a href="https://react.dev/learn" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                React learn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Community</h2>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
