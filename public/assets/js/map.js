// ymaps.ready(init);

// function init () {
//     var myMap = new ymaps.Map("map", {
//             center: [54.83, 37.11],
//             zoom: 5
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         myPlacemark = new ymaps.Placemark([55.907228, 31.260503], {
//             balloonContentHeader: "<div class=\"baloon_header\"><h2><span>Заказчик:</span> DOO «Sky TOPECO»</h2><h3><span>Период работ:</span> июнь 2021 — сентябрь 2025</h3></div>",
//             balloonContentBody: "<div class=\"baloon_text\"><p>Разработка проекта реконструкции 2-х котлов паропроизводительностью 700 т/час на ТЭС «Никола Тесла А», Сербия</p></div>",
//             balloonContentFooter: "<div class=\"baloon_footer\"><a href=\"/\" class=\"arrow\"><img src=\"https://cotes.ru/wp-content/themes/cotes/assets/img/icons/arrow_right.svg\"></a></div>",
//             hintContent: "Хинт метки"
//         },{
//             iconLayout: 'default#image',
//             iconImageHref: 'https://cotes.ru/wp-content/themes/cotes/assets/img/icons/map/object.svg',
//             icon_imagesize: [30, 42],
//             iconImageOffset: [-3, -42],
//         });

//     myMap.geoObjects.add(myPlacemark);
// }

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 4,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 64,
            // Макет метки кластера pieChart.
            clusterIconLayout: "default#pieChart",
			preset: 'islands#invertedGreenClusterIcons'
        });
    myMap.geoObjects.add(objectManager);

    // Создадим 3 пунктов выпадающего списка.
    var listBoxItems = ['Для большой энергетики', 'Для целлюлозно-бумажных предприятий', 'Для промышленности', 'Моделирование', 'Цифровой паспорт', 'CFD-модель', 'Киберфизическая модель', 'Современные энергетические котлы', 'Безмазутный розжиг', 'Сажеобдувочные аппараты', 'Фундаменты динамических машин', 'БСУ с пневмообрушением', 'Кольцевой котел', 'Содорегенерационные котлы', 'Снижение выбросов', 'Пыле/золоуловители', 'Снижение NOx / SOx', 'Мониторинг выбросов', 'Системы сухого золошлакоудаления', 'Автоматизация', 'ТЭО и предпроектные работы', 'Инжиниринг', 'Поставка оборудования', 'Пусконаладка']
            .map(function (title) {
                return new ymaps.control.ListBoxItem({
                    data: {
                        content: title
                    },
                    state: {
                        selected: false
                    }
                })
            }),
        reducer = function (filters, filter) {
            filters[filter.data.get('content')] = filter.isSelected();
            return filters;
        },
        // Теперь создадим список, содержащий 5 пунктов.
        listBoxControl = new ymaps.control.ListBox({
            data: {
                content: 'Фильтры',
                title: 'Фильтры'
            },
            items: listBoxItems,
            state: {
                // Признак, развернут ли список.
                expanded: false,
                filters: listBoxItems.reduce(reducer, {})
            }
        });
    myMap.controls.add(listBoxControl);

    // Добавим отслеживание изменения признака, выбран ли пункт списка.
    listBoxControl.events.add(['select', 'deselect'], function (e) {
        var listBoxItem = e.get('target');
        var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
        filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
        listBoxControl.state.set('filters', filters);
    });

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function (filters) {
        // Применим фильтр.
        objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories) {
        return function (obj) {
            var content = obj.properties.balloonContent;
            return categories[content]
        }
    }

    $.ajax({
        url: "https://cotes.ru/wp-content/themes/cotes/assets/js/data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

}