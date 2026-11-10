import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';

document.getElementById('btnCompare').onclick = (e) => {
    e.preventDefault();
    const pattern = document.getElementById('regexInput').value;
    const text = document.getElementById('textInput').value;

    if (!pattern || !text) {
        return Swal.fire('Campos incompletos', 'Completa ambos campos.', 'warning');
    }

    try {
        const matches = new RegExp(pattern).test(text);
        Swal.fire(
            matches ? '¡Coincidencia!' : 'Sin coincidencia',
            matches ? 'El texto cumple con la ER.' : 'El texto NO cumple con la ER.',
            matches ? 'success' : 'error'
        );
    } catch {
        Swal.fire('Error', 'Expresión Regular inválida.', 'error');
    }
};

document.getElementById('btnClear').onclick = (e) => {
    e.preventDefault();
    document.getElementById('regexInput').value = '';
    document.getElementById('textInput').value = '';
    Swal.fire({ icon: 'info', title: 'Pantalla limpia', timer: 1000, showConfirmButton: false });
};