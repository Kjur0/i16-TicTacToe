var v0, v1, v2, v3, v4, v5, v6, v7, v8, rnd, end,
    rndInfo = document.getElementById(`rndInfo`)

function start() {
    $('h2').remove()
    $('h3').remove()

    for (i = 0; i < 9; i++) {
        $(`#but${i}`).val(null)
    }

    v0 = undefined
    v1 = undefined
    v2 = undefined
    v3 = undefined
    v4 = undefined
    v5 = undefined
    v6 = undefined
    v7 = undefined
    v8 = undefined

    rnd = '⭕'
    end = false


    $('#start').fadeOut("fast", () => {
        $('#game').fadeIn("slow")
        $('p').fadeIn("fast")
    })
    update()
}

function update() {
    $('#rndInfo').text(rnd)
    if (v0 != undefined && v0 == v1 && v1 == v2) win()
    else if (v3 != undefined && v3 == v4 && v4 == v5) win()
    else if (v6 != undefined && v6 == v7 && v7 == v8) win()
    else if (v0 != undefined && v0 == v3 && v3 == v6) win()
    else if (v1 != undefined && v1 == v4 && v4 == v7) win()
    else if (v2 != undefined && v2 == v5 && v5 == v8) win()
    else if (v0 != undefined && v0 == v4 && v4 == v8) win()
    else if (v2 != undefined && v2 == v4 && v4 == v6) win()

    else if (v0 != undefined && v1 != undefined && v2 != undefined && v3 != undefined && v4 != undefined && v5 != undefined && v6 != undefined && v7 != undefined && v8 != undefined) draw()
}

function play(but) {
    if (end) { return rnd }

    switch (but) {
        case 0:
            if (v0 != undefined) { return v0 }
            v0 = rnd;
            document.getElementById(`but0`).value = rnd;
            break;
        case 1:
            if (v1 != undefined) { return v1 }
            v1 = rnd;
            document.getElementById(`but1`).value = rnd;
            break;
        case 2:
            if (v2 != undefined) { return v2 }
            v2 = rnd;
            document.getElementById(`but2`).value = rnd;
            break;
        case 3:
            if (v3 != undefined) { return v3 }
            v3 = rnd;
            document.getElementById(`but3`).value = rnd;
            break;
        case 4:
            if (v4 != undefined) { return v4 }
            v4 = rnd;
            document.getElementById(`but4`).value = rnd;
            break;
        case 5:
            if (v5 != undefined) { return v5 }
            v5 = rnd;
            document.getElementById(`but5`).value = rnd;
            break;
        case 6:
            if (v6 != undefined) { return v6 }
            v6 = rnd;
            document.getElementById(`but6`).value = rnd;
            break;
        case 7:
            if (v7 != undefined) { return v7 }
            v7 = rnd;
            document.getElementById(`but7`).value = rnd;
            break;
        case 8:
            if (v8 != undefined) { return v8 }
            v8 = rnd;
            document.getElementById(`but8`).value = rnd;
            break;
        default:
            break;
    }

    if (rnd == '❌') {
        rnd = '⭕'
        update()
        return '❌'
    } else {
        rnd = '❌'
        update()
        return '⭕'
    }

}

function win() {
    end = true

    if (rnd == '❌') {
        rnd = '⭕'
    } else {
        rnd = '❌'
    }

    $('#game').fadeOut('fast')
    $('p').hide()
    $('h1').after(`<h2 class='win'>${rnd} wygrał!!!</h2>`)

    $('#start').before('<h3>Chcesz zagrać jeszcze raz?</h3>')
        .fadeIn("slow")
}

function draw() {
    end = true

    $('#game').fadeOut('fast')
    $('p').hide()
    $('h1').after('<h2 class="tie">Remis!</h2>')

    $('#start').before('<h3>Chcesz zagrać jeszcze raz?</h3>')
        .fadeIn("slow")

}