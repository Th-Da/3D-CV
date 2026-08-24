import './App.css'
import {SceneCanvas} from './components/shared/SceneCanvas'
import {CVScene} from './scenes/CVScene/CVScene'

function App() {
    return (
        <main className="app-shell">
            <SceneCanvas>
                <CVScene/>
            </SceneCanvas>
        </main>
    )
}

export default App
