$(document).ready(function () {




    //Slider

    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    if (window.location.href.indexOf('index') > -1) {
        //Posts
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el: ' + moment().format('LL'),
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium facereveritatis ex aspernatur ullam error, atque assumenda nobis, nulla impedit obcaecati asperiores repellendus deserunt, laboriosam alias fugit"
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el: ' + moment().format('LL'),
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium facereveritatis ex aspernatur ullam error, atque assumenda nobis, nulla impedit obcaecati asperiores repellendus deserunt, laboriosam alias fugit"
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el: ' + moment().format('LL'),
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium facereveritatis ex aspernatur ullam error, atque assumenda nobis, nulla impedit obcaecati asperiores repellendus deserunt, laboriosam alias fugit"
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el: ' + moment().format('LL'),
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium facereveritatis ex aspernatur ullam error, atque assumenda nobis, nulla impedit obcaecati asperiores repellendus deserunt, laboriosam alias fugit"
            },
            {

                title: 'Prueba de título 5',
                date: 'Publicado el: ' + moment().format('LL'),
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium facereveritatis ex aspernatur ullam error, atque assumenda nobis, nulla impedit obcaecati asperiores repellendus deserunt, laboriosam alias fugit"
            }];

        posts.forEach((item, index) => {
            console.log(index);
            var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
            $('#posts').append(post);
        });
    }
    var themeSelected = localStorage.getItem('Color');
    //Selector de temas
    var theme = $('#theme');
    if (localStorage.getItem('Color') != null) {
        theme.attr('href', localStorage.getItem('Color'));
    }
    $('#to-green').click(function (e) {
        e.preventDefault();
        //attr para editar un atributo
        localStorage.setItem('Color', 'css/green.css');
        theme.attr('href', 'css/green.css');
    });
    $('#to-blue').click(function (e) {
        e.preventDefault();

        localStorage.setItem('Color', 'css/blue.css');
        //attr para editar un atributo
        theme.attr('href', 'css/blue.css');
    });
    $('#to-red').click(function (e) {
        e.preventDefault();
        localStorage.setItem('Color', 'css/red.css');
        //attr para editar un atributo
        theme.attr('href', 'css/red.css');
    });


    //Scroll arriba
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    //Login false

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });


    var form_name = localStorage.getItem("form_name");


    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            //Para recargar la pagina
            location.reload();
        })
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }


    //reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(() => {
            var reloj = moment().format('h:mm:ss a');
            $('#reloj').html(reloj); //Para poner un valor dentro de la etiqueta
        }, 1000); //Que se ejecute cada segundo

    }

    //Validation
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: "top",
            scrollToTopOnError: true
        });
    }
});
