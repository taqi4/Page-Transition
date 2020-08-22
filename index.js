import Highway from '@dogstudio/highway';
import Fade from './transition';
import { splitColor } from 'gsap/gsap-core';
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});