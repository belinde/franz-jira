'use strict';

module.exports = Franz => {
    const getMessages = function getMessages() {
        const numberString = document.querySelectorAll('#notificationsGlobalItem div[data-test-selector="NotificationIndicator"] span').item(0).innerText;
        Franz.setBadge(parseInt(numberString));
    };
    Franz.loop(getMessages);
};
