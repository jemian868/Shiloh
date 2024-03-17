function nav() {
    const items = [
        {
            route: 'dashboard',
            name: 'Dashboard',
            icon: 'dashboard',
            active: false,
            display: true
        },
        {
            route: 'profiles',
            name: 'Profiles',
            icon: 'user',
            active: false,
            display: true
        },
        {
            route: 'family',
            name: 'Family',
            icon: 'users',
            active: false,
            display: true
        },
        {
            route: 'faith-promise',
            name: 'Faith Promise',
            icon: 'handHoldingHeart',
            active: false,
            display: true
        },
        {
            route: 'ministries',
            name: 'Ministries',
            icon: 'bookMark',
            active: false,
            display: true
        },
        {
            route: 'tithes-&-offering',
            name: 'Tithes & Offering',
            icon: 'sackDollar',
            active: false,
            display: true
        },
        {
            route: 'properties',
            name: 'Properties',
            icon: 'boxesPacking',
            active: false,
            display: true
        },
        {
            route: 'accounts',
            name: 'Accounts',
            icon: 'userSecret',
            active: false,
            display: true
        },
        {
            route: 'archiving',
            name: 'Archiving',
            icon: 'folder',
            active: false,
            display: true
        }
    ]

    const list = items.filter(item => item.display)

    return {
        list
    }
}

export {
    nav
}