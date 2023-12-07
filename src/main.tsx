import register from 'preact-custom-element'
import { App } from './app.tsx'
import './index.css'

register(App, 'x-greeting', ['name'], { shadow: true })
