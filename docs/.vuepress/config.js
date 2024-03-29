module.exports = {
    title: 'hue-it',
    description: 'PHP wrapper for the Phillips Hue API',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting started', link: '/#getting-started' }
        ],
        sidebar: [
            '/',
            {
                title: 'Authentication',
                path: '/authentication/local',
                children: [
                    '/authentication/local/',
                    '/authentication/cloud/'
                ],
                collapsable: true
            },
            '/lights/',
            '/groups/',
            '/config/'
        ],
        lastUpdated: 'Last Updated',
        repo: 'jkniest/hue-it',
        docsRepo: 'jkniest/hue-it-documentation',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Help us improve this page!'
    }
}
