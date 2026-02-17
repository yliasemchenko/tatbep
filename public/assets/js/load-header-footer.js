/**
 * Скрипт для загрузки единого header и footer на всех страницах
 * Автоматически определяет базовый путь и корректирует все ссылки
 */

(function() {
    'use strict';

    // Функция для определения базового пути относительно корня сайта
    function getBasePath() {
        var path = window.location.pathname;
        
        // Убираем имя файла (index.html или другой)
        // Но оставляем слэш в конце, если это не корень
        path = path.replace(/\/[^\/]*\.html?$/, '');
        path = path.replace(/\/[^\/]*$/, '');
        
        // Если мы в корне, возвращаем пустую строку
        if (path === '' || path === '/') {
            return '';
        }
        
        // Подсчитываем уровень вложенности (количество слэшей минус начальный)
        var depth = (path.match(/\//g) || []).length;
        if (path.startsWith('/')) {
            depth = depth - 1; // Учитываем начальный слэш
        }
        
        // Создаем путь с ../ для возврата к корню
        var basePath = '';
        for (var i = 0; i < depth; i++) {
            basePath += '../';
        }
        return basePath;
    }

    // Функция для замены BASE_PATH на реальный путь
    function replaceBasePath(html, basePath) {
        return html.replace(/BASE_PATH/g, basePath);
    }

    // Функция для загрузки и вставки header
    function loadHeader() {
        var basePath = getBasePath();
        var headerPath = basePath + 'includes/header.html';
        
        fetch(headerPath)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Не удалось загрузить header');
                }
                return response.text();
            })
            .then(function(html) {
                // Заменяем BASE_PATH на реальный путь
                html = replaceBasePath(html, basePath);
                
                // Находим место для вставки header (после <body>)
                var body = document.body;
                if (body) {
                    // Удаляем старый header если есть
                    var oldHeader = document.querySelector('header');
                    var oldMobileHeader = document.querySelector('.mobile_header');
                    var oldMobileHeaderSecret = document.querySelector('.mobile_header_secret');
                    var placeholder = document.getElementById('header-placeholder');
                    
                    if (oldHeader) oldHeader.remove();
                    if (oldMobileHeader) oldMobileHeader.remove();
                    if (oldMobileHeaderSecret) oldMobileHeaderSecret.remove();
                    if (placeholder) placeholder.remove();
                    
                    // Вставляем новый header
                    body.insertAdjacentHTML('afterbegin', html);
                }
            })
            .catch(function(error) {
                console.error('Ошибка загрузки header:', error);
            });
    }

    // Функция для загрузки и вставки footer
    function loadFooter() {
        var basePath = getBasePath();
        var footerPath = basePath + 'includes/footer.html';
        
        fetch(footerPath)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Не удалось загрузить footer');
                }
                return response.text();
            })
            .then(function(html) {
                // Заменяем BASE_PATH на реальный путь
                html = replaceBasePath(html, basePath);
                
                // Находим место для вставки footer (перед закрывающим </body>)
                var body = document.body;
                if (body) {
                    // Удаляем старый footer если есть
                    var oldFooter = document.querySelector('footer');
                    var oldModal = document.querySelector('#exampleModal_search');
                    var placeholder = document.getElementById('footer-placeholder');
                    
                    if (oldFooter) oldFooter.remove();
                    if (oldModal && oldModal.parentElement) {
                        oldModal.parentElement.removeChild(oldModal);
                    }
                    if (placeholder) placeholder.remove();
                    
                    // Вставляем новый footer перед закрывающим тегом body
                    body.insertAdjacentHTML('beforeend', html);
                }
            })
            .catch(function(error) {
                console.error('Ошибка загрузки footer:', error);
            });
    }

    // Загружаем header и footer когда DOM готов
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadHeader();
            loadFooter();
        });
    } else {
        // DOM уже загружен
        loadHeader();
        loadFooter();
    }
})();
