/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
        // partagé par tous les projets du compte, et `pbs.twimg.com` ouvrait toutes
        // les images de Twitter à la transformation. Restent des avatars de 96 px,
        // des SVG et une capture de 55 Ko, servis tels quels. Next 14.0.2 n'a ni
        // `qualities` ni `localPatterns` pour borner le reste.
        unoptimized: true,
    },
}

module.exports = nextConfig
