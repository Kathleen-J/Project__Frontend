const state = {

    forms: [
        {id: 1, form_name: 'Профессия'},
        {id: 2, form_name: 'Курс'}    
    ],
    
    areas: [
        {id: 1, area_name: 'Программирование'},
        {id: 2, area_name: 'Дизайн'},
        {id: 3, area_name: 'Иностранные языки'}
    ],
    
    programs: [
        {id: 1, form_name: 'Профессия', area_name: 'Программирование', discipline_name: 'Python', profile_name: 'Full stack разработчик', price: 200000},
        {id: 2, form_name: 'Профессия', area_name: 'Программирование', discipline_name: 'JavaScript', profile_name: 'Frontend разработчик', price: 90000},
        {id: 3, form_name: 'Профессия', area_name: 'Программирование', discipline_name: 'JavaScript', profile_name: 'Backend разработчик', price: 120000},
        {id: 4, form_name: 'Курс', area_name: 'Программирование', discipline_name: 'JavaScript', profile_name: 'Основы JavaScript', price: 30000},
        {id: 5, form_name: 'Курс', area_name: 'Программирование', discipline_name: 'SQL', profile_name: 'Основы SQL', price: 50000},
        {id: 6, form_name: 'Профессия', area_name: 'Дизайн', discipline_name: '2D', profile_name: 'Графический дизайнер', price: 80000},
        {id: 7, form_name: 'Профессия', area_name: 'Дизайн', discipline_name: '3D', profile_name: 'Дизайнер интерьера', price: 80000},
        {id: 8, form_name: 'Профессия', area_name: 'Дизайн', discipline_name: '3D', profile_name: '3D художник', price: 115000},
        {id: 9, form_name: 'Курс', area_name: 'Иностранные языки', discipline_name: 'Английский язык', profile_name: 'Разговорный английский', price: 20000},
    ],
}
 export default state;