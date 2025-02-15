## List
Универсальный список.

Позволяет фильтровать элементы; сортировать элементы; рендерить элементы разной высоты; выделять их с клавиатуры.

### PropTypes
| Property                                   | Type          | Required | Default   | Description |
|:---                                        |:---           |:---:     |:---       |:---         |
| [items](#items)                            |`Array`        |yes       |[]         | Список элементов. |
| itemHeight                                 |`Number/Function`|        |28         | Высота элемента в `px` (или функция, возвращающая значение высоты для элемента). `(item: any) => number` |
| itemsHeight                                |`Number/Function`|        |           | Высота списка элементов (или функция, возвращающая значение высоты для списка). Может быть полезно, чтобы задавать высоту списка динамически. `(items: []) => number` |
| renderItem                                 |`Function`     |          |           | Функция рендера, получающая на вход элемент и возвращающая React-ноду. `(item: any, isItemActive: bool, itemIndex: number) => React.ReactNode` |
| filterItem                                 |`Function`     |          |           | Функция фильтрации, которая принимает введенную строку в инпут поиска/фильтрации, и возвращает функцию, которая получает на вход элемент и возвращает boolean `(filter: string) => (item: any) => boolean` |
| filterable                                 |`Boolean`      |          |true       | Флаг, включающий поле фильтра. |
| filterPlaceholder                          |`String`       |          |           | Placeholder для поля фильтра. |
| filter                                     |`String`       |          |           | Значение фильтра (при использовании внешней сортировки). |
| filterClassName                            |`String`       |          |           | Класс для стилизации инпута фильтра |
| onChangeFilter                             |`Function`     |          |           | Обработчик изменения фильтра (при использовании внешней сортировки). `(filter: string) => void` |
| onFilterEnd                                |`Function`     |          |           | Функция, которая вызывается после отрабатывания внутренней фильтрации. `({items}: {items: T[]}) => void` |
| emptyPlaceholder                           |`String`       |          |           | Placeholder для пустого списка. |
| sortable                                   |`Boolean`      |          |           | Флаг, включающий сортировку списка. |
| sortHandleAlign                            |`left` `right` |          |           | Выравнивание индикатора сортировки (слева или справа). |
| onSortEnd                                  |`Function`     |          |           | Обработчик события сортировки. `({oldIndex: number, newIndex: number}) => void` |
| virtualized                                |`Boolean`      |          |true       | Флаг, включающий виртуализацию. При выключенном флаге будут отрисованы все элементы разом. |
| onItemClick                                |`Function`     |          |           | Обработчик клика по элементу. `(item: any, index: number, fromKeyboard?: bool) => void` |
| deactivateOnLeave                          |`Boolean`      |          |true       | При выставленном флаге выделение элемента пропадает при уходе курсора с элемента или потере списком фокуса, при снятом - последний выделенный элемент остается выделенным всегда. |
| activeItemIndex                            |`Number`       |          |           | При заданном значении элемент с этим индексом рендерится как активный ~~пока проклятие не будет снято~~. |
| selectedItemIndex                          |`Number`       |          |           | При заданном значении элемент с этим индексом рендерится как выбранный (цвет фона из `--yc-color-selection`). |
| itemClassName                              |`String`       |          |           | Кастомное имя класса которое будет добавлено к контейнеру элемента |
| itemsClassName                             |`String`       |          |           | Кастомное имя класса которое будет добавлено к списку элементов |


### Виртуализация
Чтобы виртуализация работала, нужно выполнить одно из двух условий:
1) Задать значение переменной `--yc-list-height`. В этом случае список будет фиксированной высоты, заданной в переменной.
2) Задать контейнеру-родителю списка, стиль `display: flex`. В этом случае список будет подстраиваться под ширину контейнера.

### Items
Элемент может быть скаляром или произвольным объектом (но обязательно быть `truly`).
Во втором случае необходимо указать функции фильтрации и рендеринга.
Рендер по умолчанию просто отдает элемент как текст.

Специальное поле `item.disabled` делает элемент неактивным.

Кастомизация рендера и высоты открывает широкое поле для творчества.
Например, код ниже позволяет эмулировать группы:
```jsx harmony
<List
    items={[
       {
           'title': 'на',
           'group': true,
           'disabled': true,
       },
       {
           'title': 'златом',
       },
       {
           'title': 'царь',
           'group': true,
           'disabled': true,
       },
       {
           'title': 'царевич',
       },
    ]}
    onItemClick={(value) => console.log(value)}
    renderItem={(item) => {
        if (item.group) {
            return (
                <div className={b('group')}>
                    <div className={b('select-text')}>
                        {item.title}
                    </div>
                </div>
            );
        }
        return (
            <div className={b('select')}>
                <div className={b('select-text')}>
                    {item.title}
                </div>
            </div>
        );
    }}
    itemHeight={(item) => (
        item.group ? 24 : 36
    )}
    filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

### Внешнее управление
Иногда хочется поуправлять активностью элементов с клавиатуры, но фокус при этом сохранять на внешнем элементе.
В этом поможет проброс события `onKeyDown` в список:
```jsx harmony
<TextInput
    view="default"
    tone="default"
    theme="normal"
    size="s"
    text="Привет!"
    onKeyDown={(...props) => this.firstListRef.current.onKeyDown(...props)}
/>
<List
    ref={this.firstListRef}
    ...
/>
```

Подобным же образом можно пробросить `onFocus` и `onBlur`, если нужно повторить поведение с потерей активного элемента.
