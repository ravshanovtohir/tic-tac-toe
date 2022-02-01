let cel = document.querySelectorAll('.cell');
let natija = document.querySelector('.game--status');
let sv_restart_1 = document.querySelector('.game--restart');
let template = ["", "", "", "", "", "", "", "", ""]
let bool = true


function senyutding() {
    natija.textContent = 'Siz yutdingiz'
    for (let i = 0; i < cel.length; i++) {
        cel[i].style.pointerEvents = 'none'
    }
    template = ["", "", "", "", "", "", "", "", ""]
    return
}

function botyutdi() {
    natija.innerHTML = 'Bot yutdi'
    for (let i = 0; i < cel.length; i++) {
        cel[i].style.pointerEvents = 'none'
    }
    template = ["", "", "", "", "", "", "", "", ""]
    return
}

function durrang() {
    natija.innerHTML = 'Durrang'
    for (let i = 0; i < cel.length; i++) {
        cel[i].style.pointerEvents = 'none'
    }
    template = ["", "", "", "", "", "", "", "", ""]
    return
}

function check(mol) {
    if (template[0] === '1' && template[1] === '1' && template[2] === '1' || template[3] === '1' && template[4] === '1' && template[5] === '1' || template[6] === '1' && template[7] === '1' && template[8] === '1' || template[0] === '1' && template[3] === '1' && template[6] === '1' || template[1] === '1' && template[4] === '1' && template[7] === '1' || template[2] === '1' && template[5] === '1' && template[8] === '1' || template[0] === '1' && template[4] === '1' && template[8] === '1' || template[2] === '1' && template[4] === '1' && template[6] === '1' || template[0] == '1' && template[4] == '1' && template[8] == '1') {
        senyutding()
        return
    }
    if (template[0] === '0' && template[1] === '0' && template[2] === '0' || template[3] === '0' && template[4] === '0' && template[5] === '0' || template[6] === '0' && template[7] === '0' && template[8] === '0' || template[0] === '0' && template[3] === '0' && template[6] === '0' || template[1] === '0' && template[4] === '0' && template[7] === '0' || template[2] === '0' && template[5] === '0' && template[8] === '0' || template[0] === '0' && template[4] === '0' && template[8] === '0' || template[2] === '0' && template[4] === '0' && template[6] === '0') {
        botyutdi()
        return
    }
    if (mol) {
        if (template[0] === '1' && template[1] === '1' && template[2] === '1' || template[3] === '1' && template[4] === '1' && template[5] === '1' || template[6] === '1' && template[7] === '1' && template[8] === '1' || template[0] === '1' && template[3] === '1' && template[6] === '1' || template[1] === '1' && template[4] === '1' && template[7] === '1' || template[2] === '1' && template[5] === '1' && template[8] === '1' || template[0] === '1' && template[4] === '1' && template[8] === '1' || template[2] === '1' && template[4] === '1' && template[6] === '1') {
            senyutding()
            return
        } else if (template[0] === '0' && template[1] === '0' && template[2] === '0' || template[3] === '0' && template[4] === '0' && template[5] === '0' || template[6] === '0' && template[7] === '0' && template[8] === '0' || template[0] === '0' && template[3] === '0' && template[6] === '0' || template[1] === '0' && template[4] === '0' && template[7] === '0' || template[2] === '0' && template[5] === '0' && template[8] === '0' || template[0] === '0' && template[4] === '0' && template[8] === '0' || template[2] === '0' && template[4] === '0' && template[6] === '0') {
            botyutdi()
            return
        } else {
            durrang()
            return
        }
    }
}


for (let cell of cel) {
    cell.onclick = () => {
        let olma = cell.getAttribute('data-cell-index')
        let temp = 0
        if (!template[olma]) {
            let random = Math.round(Math.random() * 9)
            for (let temp of template) {
                if (temp) {
                    temp++
                }
            }
            if (temp > 6) {
                template[olma] = '1'
                cell.textContent = 'x'
                check(bool)
                return
            }
            while (template[random] || olma == random || random <= 0 || template[random]) {
                random = Math.round(Math.random() * 9)
            }

            cell.textContent = 'x'
            template[olma] = '1'
            cel[random].textContent = 'o'
            template[random] = '0'
            check()
        }
    }
}



sv_restart_1.onclick = () => {
    for (let i = 0; i < cel.length; i++) {
        cel[i].innerHTML = ''
        cel[i].style.pointerEvents = 'auto'
    }
    template = ["", "", "", "", "", "", "", "", ""]
    natija.innerHTML = ''
}