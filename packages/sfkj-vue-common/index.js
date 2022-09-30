import Button from './Button/index.vue'


const components = [Button]

const install = (app) => {
    components.forEach(i => {
        app.component(i.name, i)
    })
    return app;
}

export {
    Button
}

export default {
    install
}