//Метки
const regionsLayer = document.getElementById('regions');

regionsLayer.addEventListener('mouseover', (e) => {
  const target = e.target.closest('[data-target]'); // Найти элемент с data-target
  if (target) {
    const pointIds = target.dataset.target.split(',');
    pointIds.forEach(id => {
      const point = document.getElementById(id.trim());
      if (point) point.style.display = 'block';
    });
  }
});

regionsLayer.addEventListener('mouseout', (e) => {
  const target = e.target.closest('[data-target]');
  if (target) {
    const pointIds = target.dataset.target.split(',');
    pointIds.forEach(id => {
      const point = document.getElementById(id.trim());
      if (point) point.style.display = 'none';
    });
  }
});

const tooltip = document.getElementById('tooltip');

// Обработчик событий для слоя регионов
regionsLayer.addEventListener('mouseover', (e) => {
    const region = e.target.closest('.region'); // Найти элемент с классом region
    if (region) {
        const regionId = region.id; // Получаем идентификатор региона (например, "kamchatka")
        const regionInfo = regionData[regionId]; // Берем данные из массива
        if (regionInfo && regionInfo.title) {
            tooltip.textContent = regionInfo.title; // Используем title из массива
            tooltip.style.display = 'block';
        }
    }
});

regionsLayer.addEventListener('mousemove', (e) => {
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
});

regionsLayer.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});

//Тест меток сафари
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
if (isSafari()) {
  // Фоллбек для анимации пульсации в Safari
  function animatePulse(circle) {
      let startRadius = 5;
      let maxRadius = 25;
      let duration = 1500; // В миллисекундах
      let startTime;

      function frame(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = (timestamp - startTime) / duration;

          if (progress > 1) {
              startTime = timestamp;
              progress = 0;
          }

          let currentRadius = startRadius + (maxRadius - startRadius) * progress;
          let currentOpacity = 1 - progress;

          circle.setAttribute('r', currentRadius);
          circle.style.opacity = currentOpacity;

          requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
  }

  // Инициализация для всех точек
  document.querySelectorAll('.pulse-ring').forEach(circle => {
      animatePulse(circle);
  });
}


const regionData = {
  "kamchatka": {
    title: "Камчатский край",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Петропавловск-Камчатский",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "primorskiy": {
    title: "Приморский край",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Владивосток",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "yakutia": {
    title: "Якутия",
    content: [
      {
        date: "4-5 июля 2012",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Якутск",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region1", text: "Подробнее 1" }
      },
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Среднеколымск, Якутск",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region1", text: "Подробнее 1" }
      }
    ]
  },
  "irkutsk": {
    title: "Иркутск",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Иркутск",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "krasnoyarsk": {
    title: "Красноярский край",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Красноярск",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "2016",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "Красноярск",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "kemerovo": {
    title: "Кемеровская область",
    content: [
      {
        date: "28-30 сентября 2022",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Кемерово",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "13-15 сентября 2023",
        type: "Всероссийский форум",
        name: "Вера и спорт",
        place: "Кемерово",
        image: "/interact_map/img/vera.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "omskaya": {
    title: "Омская",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Омск",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "permskiy": {
    title: "Пермский край",
    content: [
      {
        date: "19-22 октября 2023",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Пермь",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "udmurtiya": {
    title: "Удмуртская республика",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Ижевск",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "bashkiriya": {
    title: "Республика Башкортостан",
    content: [
      {
        date: "2012",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "17-19 октября 2024",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Уфа",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "len-oblast": {
    title: "Ленинградская область",
    content: [
      {
        date: "2011",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "Санкт-Петербург",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "kaliningradskaya": {
    title: "Калининградская область",
    content: [
      {
        date: "3 октября 2015",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Калининград",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "msk": {
    title: "Москва и МО",
    content: [
      {
        date: "2005, 2008, 2009, 2017-2021 гг",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "Москва, Красногорск",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "29 июля - 1 августа 2010 г",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Москва",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "3 октября 2015 г",
        type: "",
        name: "Всероссийский день ходьбы",
        place: "Москва",
        image: "/interact_map/img/dh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "2016, 2017 гг",
        type: "",
        name: "Национальная премия в области физической культуры и спорта",
        place: "Москва",
        image: "/interact_map/img/premiya.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "29 апреля 2021 г",
        type: "Конгрессно-выставочное мероприятие",
        name: "SPORTFORUMLIVE. Современный спорт. Инновации и перспективы",
        place: "Москва",
        image: "/interact_map/img/sfl.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "30-31 марта 2022 г, 28 февраля - 1 марта 2023 г, 11-12 апреля 2024 г",
        type: "Конгрессно-выставочное мероприятие",
        name: "Мы вместе. Спорт",
        place: "Москва",
        image: "/interact_map/img/mvs.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "24-25 июля 2023 г",
        type: "Первый Российско-китайский форум",
        name: "Здоровье, образ, жизнь",
        place: "Москва",
        image: "/interact_map/img/zozh.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "4 ноября 2023 г, 8 июля 2024 г",
        type: "Экспозиция Минспорта России",
        name: "«Спорт для каждого»  в рамках Международной выставки-форума «Россия» на ВДНХ",
        place: "Москва",
        image: "/interact_map/img/sdk.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "vladimirskaya": {
    title: "Владимирская область",
    content: [
      {
        date: "10-13 октября 2016",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  }, 
  "nijegorodskaya": {
    title: "Нижегородская область",
    content: [
      {
        date: "10-11 октября 2019",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Нижний Новгород",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "11-13 сентября 2024",
        type: "II Всероссийский форум",
        name: "Вера и спорт",
        place: "Нижний Новгород",
        image: "/interact_map/img/vera.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "chuvashiya": {
    title: "Чувашская республика",
    content: [
      {
        date: "9-11 октября 2014",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Чебоксары",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "tatarstan": {
    title: "Республика Татарстан",
    content: [
      {
        date: "23-25 октября 2009",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Казань",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "2014",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "Казань",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "8-10 сентября 2021",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Казань",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }

      }
    ]
  },
  "ulyanovskaya": {
    title: "Ульяновская область",
    content: [
      {
        date: "1-3 февраля 2018",
        type: "Международная выставка",
        name: "Спортивная литература, пресса, мультимедиа",
        place: "Ульяновск",
        image: "/interact_map/img/sport_lit.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "10-12 октября 2018",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Ульяновск",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "mordoviya": {
    title: "Республика Мордовия",
    content: [
      {
        date: "8-11 сентября 2011",
        type: "Международный спортивный форум",
        name: "Россия – спортивная держава",
        place: "Саранск",
        image: "/interact_map/img/rsd.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  },
  "krasnodarskiy": {
    title: "Краснодарский край",
    content: [
      {
        date: "2010, 2013, 2015",
        type: "",
        name: "Международный Конгресс индустрии зимних видов спорта, туризма и активного отдыха",
        place: "Сочи",
        image: "/interact_map/img/winter.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "31 октября - 2 ноября 2012",
        type: "Форум",
        name: "Peace and sport",
        place: "Сочи",
        image: "/interact_map/img/pas.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      },
      {
        date: "20-22 апреля 2015",
        type: "Международная конвенция",
        name: "СпортАккорд",
        place: "Сочи",
        image: "/interact_map/img/accord.png",
        // link: { href: "https://example.com/region2", text: "Подробнее 1" }
      }
    ]
  }            
};
//Вызов окна
// Получаем элементы всплывающего окна
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupItems = document.getElementById("popup-items");
const popupClose = document.getElementById("popup-close");
const overlay = document.getElementById("overlay");
const navigation = document.getElementById("popup-navigation");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


function updatePopupContent() {
  popupItems.innerHTML = ""; // Очищаем старый контент

  // Определяем границы текущей "страницы"
  const startIndex = currentIndex * 3;
  const endIndex = Math.min(startIndex + 3, currentContent.length);

  // Добавляем мероприятия текущей страницы
  for (let i = startIndex; i < endIndex; i++) {
      const item = currentContent[i];

      const itemDiv = document.createElement("div");
      itemDiv.className = "popup-item";

      if (item.date) {
        const date = document.createElement("div");
        date.textContent = item.date;
        date.classList.add("event-date");
        itemDiv.appendChild(date);
      }
  
      const descDiv = document.createElement("div");
      descDiv.className = "event-description"
      itemDiv.appendChild(descDiv);
  
      if (item.type) {
        const type = document.createElement("p");
        type.textContent = item.type;
        descDiv.appendChild(type);
      }
  
      if (item.name) {
        const name = document.createElement("h3");
        name.textContent = item.name;
        descDiv.appendChild(name);
      }  
      if (item.place) {
        const place = document.createElement("p");
        place.textContent = item.place;
        place.classList.add("place");
        descDiv.appendChild(place);
      }
  
      if (item.link) {
        const link = document.createElement("a");
        link.href = item.link.href;
        link.textContent = item.link.text;
        link.target = "_blank";
        itemDiv.appendChild(link);
      }
  
      if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.text || "Изображение";
        itemDiv.appendChild(img);
      }

      popupItems.appendChild(itemDiv);
  }

  // Обновляем состояние кнопок
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = endIndex >= currentContent.length;
}
function showPopup(regionId) {
  const data = regionData[regionId];
  if (!data) return;

  popupTitle.textContent = data.title;
  currentContent = data.content;
  currentIndex = 0; // Начинаем с первой "страницы"

  // Показать кнопки навигации, если больше 3 мероприятий
  if (currentContent.length > 3) {
      navigation.classList.remove("hidden");
  } else {
      navigation.classList.add("hidden");
  }

  updatePopupContent();

  popup.classList.add("show");
  overlay.classList.add("show");
}
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
      currentIndex--;
      updatePopupContent();
  }
});

nextButton.addEventListener("click", () => {
  if ((currentIndex + 1) * 3 < currentContent.length) {
      currentIndex++;
      updatePopupContent();
  }
});


/////////////
// Функция скрытия всплывающего окна
function hidePopup() {
  popup.classList.remove("show");
  overlay.classList.remove("show");
}

// Обработчики событий для закрытия окна
popupClose.addEventListener("click", hidePopup);
overlay.addEventListener("click", hidePopup);

// Обработчик клика по регионам
document.getElementById("regions").addEventListener("click", (e) => {
  const regionElement = e.target.closest("g[id]"); // Ищем ближайший <g> с ID
  if (regionElement) {
    const regionId = regionElement.id;
    showPopup(regionId);
  }
});
