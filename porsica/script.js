// Función para mostrar la opción seleccionada y ocultar las demás
function showOption(option) {
    // Ocultar todas las secciones
    document.getElementById('welcome-message').classList.add('hidden');
    document.getElementById('summary-content').classList.add('hidden');
    document.getElementById('appointments-content').classList.add('hidden');
    document.getElementById('medical-history-content').classList.add('hidden');
    document.getElementById('communication-content').classList.add('hidden');

    // Mostrar la sección correspondiente a la opción seleccionada
    document.getElementById(option + '-content').classList.remove('hidden');

    // Lógica específica para cada sección
    switch (option) {
        case 'welcome':
            showWelcomeMessage();
            break;
        case 'summary':
            showSummary();
            break;
        case 'appointments':
            showAppointments();
            break;
        case 'medical-history':
            showMedicalHistory();
            break;
        case 'communication':
            showCommunication();
            break;
    }
}

// Función para mostrar el mensaje de bienvenida
function showWelcomeMessage() {
    document.getElementById('welcome-message').innerText = '¡Bienvenido, Doctor!';
}

// Función para mostrar el resumen del paciente
function showSummary() {
    // Aquí deberías implementar la lógica para mostrar el resumen del paciente
    // Verificar si hay pacientes registrados y mostrar el mensaje correspondiente
    // Ejemplo: document.getElementById('summary-content').innerHTML = 'No hay información registrada de ningún paciente';
}

// Función para mostrar el calendario de citas
function showAppointments() {
    // Mostrar el contenido del calendario de citas
    document.getElementById('appointments-content').classList.remove('hidden');

    // Ocultar otros contenidos si están visibles
    document.getElementById('welcome-message').classList.add('hidden');
    document.getElementById('summary-content').classList.add('hidden');
    document.getElementById('medical-history-content').classList.add('hidden');
    document.getElementById('communication-content').classList.add('hidden');

    // Lógica específica para mostrar el calendario
    updateCalendar();  // Esta función se encarga de construir y mostrar el calendario
}

// Función para mostrar el historial clínico
function showMedicalHistory() {
    // Aquí deberías implementar la lógica para mostrar el historial clínico
    // Verificar si hay pacientes registrados y mostrar el listado o el mensaje correspondiente
    // Ejemplo: document.getElementById('medical-history-content').innerHTML = 'No tiene pacientes registrados';
}

// Función para mostrar la opción de comunicación con el paciente
function showCommunication() {
    // Aquí deberías implementar la lógica para la comunicación con el paciente
    // Verificar si hay pacientes registrados y mostrar la opción de comunicación o el mensaje correspondiente
    // Ejemplo: document.getElementById('communication-content').innerHTML = 'No tiene pacientes registrados';
}

// Lógica para cargar la próxima cita (deberías actualizar esto con datos reales)
function loadNextAppointment() {
    const nextAppointmentInfo = 'Se le recuerda que tiene cita el día tal a la hora tal con el (nombre y apellidos del paciente).';
    document.getElementById('next-appointment-info').innerText = nextAppointmentInfo;
}

// Inicializar la interfaz mostrando la bienvenida y cargando la próxima cita
showWelcomeMessage();
loadNextAppointment();

// Resto del código para el calendario que proporcionaste

document.addEventListener('DOMContentLoaded', function () {
    updateCalendar();
    showCurrentDay();
});

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function updateCalendar() {
    const monthYearElement = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');

    monthYearElement.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarBody.innerHTML = '';

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement('td');
                cell.textContent = date;
                cell.addEventListener('click', function () {
                    alert(Seleccionaste el ${date}/${currentMonth + 1}/${currentYear});
                });
                row.appendChild(cell);

                // Resaltar el día actual
                if (date === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
                    cell.classList.add('current-day');
                }

                date++;
            }
        }

        calendarBody.appendChild(row);
    }
}

function previousMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) {
        currentYear--;
    }
    updateCalendar();
    showCurrentDay();
}

function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) {
        currentYear++;
    }
    updateCalendar();
    showCurrentDay();
}

function showCurrentDay() {
    const currentDayElement = document.getElementById('current-day');
    currentDayElement.textContent = new Date().toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long' });
}