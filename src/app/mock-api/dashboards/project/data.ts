/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const project = {
    githubIssues      : {
        overview: {
            'this-week': {
                'new-issues'   : 214,
                'closed-issues': 75,
                'fixed'        : 3,
                'wont-fix'     : 4,
                're-opened'    : 8,
                'needs-triage' : 6,
            },
            'last-week': {
                'new-issues'   : 197,
                'closed-issues': 72,
                'fixed'        : 6,
                'wont-fix'     : 11,
                're-opened'    : 6,
                'needs-triage' : 5,
            },
        },
        labels  : ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        series  : {
            'this-week': [
                {
                    name: 'Total de tareas',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22],
                },
                {
                    name: 'Tareas entregadas',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17],
                },
            ],
            'last-week': [
                {
                    name: 'Total de tareas',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20],
                },
                {
                    name: 'Tareas entregadas',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15],
                },
            ],
        },
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287,
            },
            'last-week': {
                'new'      : 526,
                'completed': 260,
            },
        },
        labels  : ['API', 'Backend', 'Frontend', 'Issues'],
        series  : {
            'this-week': [15, 20, 38, 27],
            'last-week': [19, 16, 42, 23],
        },
    },
    schedule          : {
        today   : [
            {
                title   : 'Group Meeting',
                time    : 'in 32 minutes',
                location: 'Conference room 1B',
            },
            {
                title: 'Coffee Break',
                time : '10:30 AM',
            },
            {
                title: 'Public Beta Release',
                time : '11:00 AM',
            },
            {
                title: 'Lunch',
                time : '12:10 PM',
            },
            {
                title   : 'Dinner with David',
                time    : '05:30 PM',
                location: 'Magnolia',
            },
            {
                title   : 'Jane\'s Birthday Party',
                time    : '07:30 PM',
                location: 'Home',
            },
            {
                title   : 'Overseer\'s Retirement Party',
                time    : '09:30 PM',
                location: 'Overseer\'s room',
            },
        ],
        tomorrow: [
            {
                title   : 'Marketing Meeting',
                time    : '09:00 AM',
                location: 'Conference room 1A',
            },
            {
                title: 'Public Announcement',
                time : '11:00 AM',
            },
            {
                title: 'Lunch',
                time : '12:10 PM',
            },
            {
                title   : 'Meeting with Beta Testers',
                time    : '03:00 PM',
                location: 'Conference room 2C',
            },
            {
                title: 'Live Stream',
                time : '05:30 PM',
            },
            {
                title   : 'Release Party',
                time    : '07:30 PM',
                location: 'CEO\'s house',
            },
            {
                title   : 'CEO\'s Private Party',
                time    : '09:30 PM',
                location: 'CEO\'s Penthouse',
            },
        ],
    },
    budgetDistribution: {
        categories: ['Concept', 'Design', 'Development', 'Extras', 'Marketing'],
        series    : [
            {
                name: 'Budget',
                data: [12, 20, 28, 15, 25],
            },
        ],
    },
    weeklyExpenses    : {
        amount: 17663,
        labels: [
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [4412, 4345, 4541, 4677, 4322, 4123],
            },
        ],
    },
    monthlyExpenses   : {
        amount: 54663,
        labels: [
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [15521, 15519, 15522, 15521],
            },
        ],
    },
    yearlyExpenses    : {
        amount: 648813,
        labels: [
            now.minus({days: 79}).toFormat('dd MMM') + ' - ' + now.minus({days: 72}).toFormat('dd MMM'),
            now.minus({days: 71}).toFormat('dd MMM') + ' - ' + now.minus({days: 64}).toFormat('dd MMM'),
            now.minus({days: 63}).toFormat('dd MMM') + ' - ' + now.minus({days: 56}).toFormat('dd MMM'),
            now.minus({days: 55}).toFormat('dd MMM') + ' - ' + now.minus({days: 48}).toFormat('dd MMM'),
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [45891, 45801, 45834, 45843, 45800, 45900, 45814, 45856, 45910, 45849],
            },
        ],
    },
    budgetDetails     : {
        columns: ['type', 'total', 'expensesAmount', 'expensesPercentage', 'remainingAmount', 'remainingPercentage'],
        rows   : [
            {
                id                 : 1,
                type               : 'Concept',
                total              : 14880,
                expensesAmount     : 14000,
                expensesPercentage : 94.08,
                remainingAmount    : 880,
                remainingPercentage: 5.92,
            },
            {
                id                 : 2,
                type               : 'Design',
                total              : 21080,
                expensesAmount     : 17240.34,
                expensesPercentage : 81.78,
                remainingAmount    : 3839.66,
                remainingPercentage: 18.22,
            },
            {
                id                 : 3,
                type               : 'Development',
                total              : 34720,
                expensesAmount     : 3518,
                expensesPercentage : 10.13,
                remainingAmount    : 31202,
                remainingPercentage: 89.87,
            },
            {
                id                 : 4,
                type               : 'Extras',
                total              : 18600,
                expensesAmount     : 0,
                expensesPercentage : 0,
                remainingAmount    : 18600,
                remainingPercentage: 100,
            },
            {
                id                 : 5,
                type               : 'Marketing',
                total              : 34720,
                expensesAmount     : 19859.84,
                expensesPercentage : 57.2,
                remainingAmount    : 14860.16,
                remainingPercentage: 42.8,
            },
        ],
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-06.jpg',
            name  : 'Lorena Sanchéz',
            email : 'lsanchez@school.edu',
            phone : '+52-000-000-0000',
            title : '1er Semestre',
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Juan Pérez',
            email : 'jperez@school.edu',
            phone : '+52-000-000-0000',
            title : '3er semestre',
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Duncan Carver',
            email : 'dcarver@school.edu',
            phone : '+1-000-000-0000',
            title : '3er Semestre',
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Martin Ricardo',
            email : 'mricardo@school.edu',
            phone : '+1-000-000-0000',
            title : '1er semestre',
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Paola Muñoz',
            email : 'pmunoz@school.edu',
            phone : '+1-000-000-0000',
            title : '5to Semestre',
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Victoria Mosley',
            email : 'vmosley@school.edu',
            phone : '+1-000-000-0000',
            title : '7mo Semestre',
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Tatiana Harris',
            email : 'tharris@school.edu',
            phone : '+1-000-000-0000',
            title : '7mo Semestre',
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Jorge Marquez',
            email : 'jmarquez@school.edu',
            phone : '+1-000-000-0000',
            title : '3er Semestre',
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Mayra Moreno',
            email : 'mmoreno@school.edu',
            phone : '+1-000-000-0000',
            title : '7mo Semestre',
        },
    ],
};
