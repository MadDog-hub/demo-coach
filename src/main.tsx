import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createCircularFavicon } from './utils/createCircularFavicon.ts'

// Create circular favicon when the app loads
createCircularFavicon();

createRoot(document.getElementById("root")!).render(<App />);
