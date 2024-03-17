import { Dashboard } from './Dashboard'
import Profiles from './Profiles'
import { Family } from './Family'
import { FaithPromise } from './FaithPromise'
import { Ministries } from './Ministries'
import { TithesOffering } from './TithesOffering'
import { Properties } from './Properties'
import { Accounts } from './Accounts'
import { Archiving } from './Archiving'

const pages = [
    {
        path: '/dashboard',
        element: Dashboard
    },
    {
        path: '/profiles',
        element: Profiles
    },
    {
        path: '/family',
        element: Family
    },
    {
        path: '/faith-promise',
        element: FaithPromise
    },
    {
        path: '/ministries',
        element: Ministries
    },
    {
        path: '/tithes-&-offering',
        element: TithesOffering
    },
    {
        path: '/properties',
        element: Properties
    },
    {
        path: '/accounts',
        element: Accounts
    },
    {
        path: '/archiving',
        element: Archiving
    }
]

export default pages