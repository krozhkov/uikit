import React from 'react';

import type {DropdownMenuItem, DropdownMenuItemMixed} from '../types';

export const options: DropdownMenuItem<unknown>[] = [
    {
        action: () => console.log('==> вызван экшен "Удалить"'),
        text: 'Удалить',
        theme: 'danger',
    },
    {
        action: () => console.log('==> вызван экшен "Переименовать"'),
        text: 'Переименовать',
    },
];

export const userOptions: DropdownMenuItem<unknown>[] = [
    {
        action: () => console.log('==> вызван экшен "Позвонить"'),
        text: 'Позвонить',
    },
    {
        action: () => console.log('==> вызван экшен "Отправить email"'),
        text: 'Отправить email',
    },
];

// export const optionsWithIcons: DropdownMenuItem<unknown>[] = [
//     {
//         action: () => console.log('==> вызван экшен "Удалить"'),
//         text: 'Удалить',
//         icon: <Icon data={iconTrash} />,
//         theme: 'danger',
//     },
//     {
//         action: () => console.log('==> вызван экшен "Переименовать"'),
//         text: 'Переименовать',
//         icon: <Icon data={iconRename} />,
//     },
// ];

export const optionsWithGroups: DropdownMenuItemMixed<unknown>[] = [
    [
        {
            action: () => console.log('==> вызван экшен "Удалить"'),
            text: 'Удалить',
            theme: 'danger',
        },
        {
            action: () => console.log('==> вызван экшен "Переименовать"'),
            text: 'Переименовать',
        },
    ],
    {
        action: () => console.log('==> вызван экшен "Позвонить"'),
        text: 'Позвонить',
    },
    {
        action: () => console.log('==> вызван экшен "Отправить email"'),
        text: 'Отправить email',
    },
    [
        {
            action: () => console.log('==> вызван экшен "Принять звонок"'),
            text: 'Принять звонок',
        },
        {
            action: () => console.log('==> вызван экшен "Принять email"'),
            text: 'Принять email',
        },
    ],
    [
        {
            action: () => console.log('==> вызван экшен "Отклонить звонок"'),
            text: 'Отклонить звонок',
        },
        {
            action: () => console.log('==> вызван экшен "Отклонить email"'),
            text: 'Отклонить email',
        },
    ],
];

export const optionsAssorted: DropdownMenuItem<unknown>[] = [
    {
        action: () => console.log('==> вызван обычный экшен'),
        text: 'Я обычный пункт',
    },
    {
        action: () => console.log('==> вызван недоступный экшен -_-'),
        text: 'Я недоступный пункт',
        disabled: true,
    },
    {
        action: () => console.log('==> вызван экшен-ссылка'),
        text: 'Я пункт-ссылка',
        title: '(открываюсь в новой вкладке)',
        href: 'https://yachan.dev.yandex.net/bbs',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
    {
        action: () => console.log('==> вызван вошлебный экшен'),
        text: (
            <>
                Я <span style={{color: 'deeppink'}}>волшебный</span> пункт с нодой
            </>
        ),
    },
];
