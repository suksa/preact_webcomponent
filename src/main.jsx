import register from 'preact-custom-element'
import { App } from './app'
import './styles/index.css'

register(App, 'shop-box', ['globalSvcPage'], { shadow: true })
