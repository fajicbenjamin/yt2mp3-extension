function addDownloadButton() {
    let buttons = document.getElementById('top-level-buttons-computed');

    let downloadButton = document.createElement('a');
    buttons.prepend(downloadButton);

    downloadButton.outerHTML = '<a id="mp3-btn">' +
        '<img style="margin: 4px 10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA/klEQVRIie3VMUoDQRgF4C/JqrgWXsAkWFkpiEcQD6KVnsEDeAq1sRQ8gIiHECsLa1nUyiJqxCKzYGHG+SFFCh/87LL/e/PmzTL8zBl2UhWjCho8B/m6QX4faxFBL2gwwgveSgXRI9pMz6egrhirqYoR/Qd72I0Ioke0EeSHE4TxbzD/Bh0sZfrLiZM16GA4pb+Fewx+6Q1wh+0p2mFrXqPJbOIAj1jHcao+HnCU0TWoSy7aWdrJNW7St1uc4LRA/2eCFvsY4wuHBfziBC3O8ZHeLwK64gRRNKi7JrEXxIdPDr205rgymVJXeMXnjAwqXGL085KsYHFGBu/SWP0GnO0kysqZT/0AAAAASUVORK5CYII=\n">' +
        '</a>'

    let downloadUrl = 'yt2mp3app://' + document.URL
    document.getElementById('mp3-btn').setAttribute('href', downloadUrl)
}

setTimeout(() => {
    if (!document.getElementById('mp3-btn'))
        addDownloadButton()
}, 1000)