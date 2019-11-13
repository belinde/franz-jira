'use strict';

module.exports = Franz => {
    const getMessages = function getMessages() {
        const node = document.querySelectorAll('#notificationsGlobalItem div[data-test-selector="NotificationIndicator"] span').item(0);
        Franz.setBadge(node ? parseInt(node.innerText) : 0);
    };
    Franz.loop(getMessages);
};
