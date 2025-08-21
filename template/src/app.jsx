import { createFalconElement, render, Show, For, Fragment } from '@olsigjeci/falconjs';
import { createSignal, createMemo, createEffect } from '@olsigjeci/falconjs';
import { createStore } from '@olsigjeci/falconjs';
import { createResource } from '@olsigjeci/falconjs';
import { Route, Link } from '@olsigjeci/falconjs';

// --- Global Store ---
const [store, setStore] = createStore({ theme: 'light' });

// --- Page Components (with JSX) ---

function HomePage() {
  return (
    <Fragment>
      <h2>Welcome to your new FalconJS App!</h2>
      <p>This is the default starting page. Feel free to edit it.</p>
    </Fragment>
  );
}

// --- Main App Layout ---
function App() {
  createEffect(() => {
    document.body.className = store.theme;
  });

  return (
    <div id="app-container">
      <header>
        <h1>🦅 FalconJS</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Route path="/" component={HomePage} />
      </main>
    </div>
  );
}

// --- Render ---
render(<App />, document.getElementById('root'));
