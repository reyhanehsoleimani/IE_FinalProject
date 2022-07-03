import {defineConfig, loadEnv, UserConfigExport} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command, mode}) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), 'VITE_')
    console.log({env})


    let config: UserConfigExport = {
        define: {
            __APP_ENV__: env.APP_ENV
        },
        plugins: [react()],
        base: env.VITE_GH_PAGES_BASE_URL
    }


    return config
})
