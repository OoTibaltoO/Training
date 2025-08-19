import { mount } from 'svelte'
import '../app.css'
import '../responsive.css'
import App from '../App.svelte'

const target = document.getElementById('app');
if (!target) {
  throw new Error("Target element with id 'app' not found.");
}
const app = mount(App, {
  target,
})

export default app