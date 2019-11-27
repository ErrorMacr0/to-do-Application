"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const task = [
        {
            id: '1',
            title: 'New task',
            body: 'Some text'
        },
        {
            id: '2',
            title: 'New task 2',
            body: 'Some text'
        },
        {
            id: '3',
            title: 'New task 3',
            body: 'Some text'
        },
        {
            id: '4',
            title: 'New task 4',
            body: 'Some text'
        }
    ]

    const form = document.forms['taskForm'];

    const inputTitle = form[0];
    const inputBody = form[1];

    form.addEventListener('submit', onFormSubmit);

    function onFormSubmit( e ) {
        e.preventDefault();
    }

});
