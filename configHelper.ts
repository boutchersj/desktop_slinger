require('dotenv').config()
import { ViewportSize } from './types'

const minResolution: ViewportSize = { width: 800, height: 600 }
const maxResolution: ViewportSize = { width: 1920, height: 1080 }

function determineViewportSize(): ViewportSize {
    if (!process.env.VIEWPORT_SIZE) return minResolution

    let resolution: ViewportSize;

    switch (process.env.VIEWPORT_SIZE) {
        case 'min':
            resolution = minResolution
            break;
        case 'max':
            resolution = maxResolution
            break;
        default:
            resolution = minResolution
    }

    return resolution
}

export const viewportSize: ViewportSize = determineViewportSize()