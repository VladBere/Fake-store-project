import { createRoot } from 'react-dom/client'

import { App } from './app'
import './index.css'
import { Providers } from './provider'
import  i18n  from './config/loacalization'

createRoot(document.getElementById('root')!).render(
    <Providers>
        <App />
    </Providers>
)