// Функция, которая отдает нам динамически, в зависимости от текущего месяца, следующие 24 месяца (+год)
export const getNext24Month = () => {

  // Получаем текущую дату
  const currentDate = new Date();
  const months = [];

  // Добавляем 24 месяца
  for (let i = 0; i < 24; i++) {
    // Переход на след. месяц
    currentDate.setMonth(currentDate.getMonth() + 1);
    // Получаем месяц и год
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();

    // Добавляем в массив форматированный месяц + год (Март 2025)
    months.push(`${month} ${year}`);
  }
  return months;
}