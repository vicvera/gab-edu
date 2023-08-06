/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const notifications = [
    {
        id         : '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon       : 'heroicons_mini:star',
        title      : 'Control Escolar',
        description: 'Nueva materia asignada',
        time       : now.minus({minute: 25}).toISO(), // 25 minutes ago
        read       : false,
    },
    {
        id         : '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image      : 'assets/images/avatars/male-04.jpg',
        description: '<strong>Leo Gill</strong> Nuevo mensaje en <em>Chat 1er semestre</em>',
        time       : now.minus({minute: 50}).toISO(), // 50 minutes ago
        read       : true,
        link       : '/apps/chat',
        useRouter  : true,
    },
    {
        id         : 'b91ccb58-b06c-413b-b389-87010e03a120',
        icon       : 'heroicons_mini:envelope',
        title      : 'Correo',
        description: 'Tienes 3 correos sin leer',
        time       : now.minus({hour: 3}).toISO(), // 3 hours ago
        read       : false,
    },
    {
        id         : '541416c9-84a7-408a-8d74-27a43c38d797',
        icon       : 'heroicons_mini:arrow-path',
        title      : 'Plataforma',
        description: 'Tiene <em>5 actualizaciones</em> pendientes de instalar',
        time       : now.minus({hour: 5}).toISO(), // 5 hours ago
        read       : false,
    },
    {
        id         : 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image      : 'assets/images/avatars/male-06.jpg',
        description: '<strong>Rogelio Marquez</strong> se registró como alumno',
        time       : now.minus({hour: 7}).toISO(), // 7 hours ago
        read       : true,
    },
    {
        id         : 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
        image      : 'assets/images/avatars/female-04.jpg',
        description: '<strong>Sofia Duran</strong> te envió un mensaje',
        time       : now.minus({hour: 9}).toISO(), // 9 hours ago
        read       : true,
        link       : '/apps/chat',
        useRouter  : true,
    },
    {
        id         : 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon       : 'heroicons_mini:envelope',
        title      : 'Correo',
        description: 'Tienes 3 nuevos correos',
        time       : now.minus({day: 1}).toISO(), // 1 day ago
        read       : true,
    },
];
