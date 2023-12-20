document.addEventListener("DOMContentLoaded", function() {
    // Массив доступных временных слотов для каждого дня (пример)
    const timeSlots = {
        "2023-09-20": ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
        "2023-09-21": ["9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
        // Добавьте другие дни и временные слоты по мере необходимости
    };

    // Элементы формы
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");

    // Обновление временных слотов при изменении даты
    dateInput.addEventListener("change", function() {
        const selectedDate = dateInput.value;
        const slots = timeSlots[selectedDate] || [];
        
        // Очищаем текущие опции
        timeSelect.innerHTML = "";
        
        // Добавляем новые опции
        slots.forEach(slot => {
            const option = document.createElement("option");
            option.textContent = slot;
            timeSelect.appendChild(option);
        });
    });
});
