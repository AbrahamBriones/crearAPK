//Funcion que detecta cuando se inicia y carga el hmtl "actividades"
$$(document).on('page:init', '.page[data-name="actividades"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("Evento calendario");
    //Evento Calendario
    var $$ = Dom7;
    // script de Framework7 para cargar un calendario dentro de la vista
    var calendarDateFormat = app.calendar.create({
    inputEl: '#demo-calendar-date-format',
    dateFormat: 'DD, MM dd, yyyy'
    });

    var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' , 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'];
    var dayNames = ['lun', '', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'];
    var calendarInline = app.calendar.create({
    containerEl: '#demo-calendar-inline-container',
    value: [new Date()],
    weekHeader: false,
    renderToolbar: function () {
        return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
        '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link icon-only"><i class="icon icon-back ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
            '</div>' +
            '<div class="center"></div>' +
            '<div class="right">' +
            '<a href="#" class="link icon-only"><i class="icon icon-forward ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
            '</div>' +
        '</div>' +
        '</div>';
    },
    on: {
        init: function (c) {
        $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
        $$('.calendar-custom-toolbar .left .link').on('click', function () {
            calendarInline.prevMonth();
        });
        $$('.calendar-custom-toolbar .right .link').on('click', function () {
            calendarInline.nextMonth();
        });
        },
        monthYearChangeStart: function (c) {
        $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
        }
    }
    });
})
