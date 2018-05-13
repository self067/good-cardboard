var myMap;
ymaps.ready(function () {
	myMap = new ymaps.Map('map', {
		// center: [54.752262, 55.999019],
		center: [54.752575, 55.994976],
		controls: [],
		zoom: 15
	},
		{
			yandexMapDisablePoiInteractivity: true
		}
		//, {			searchControlProvider: 'yandex#search'		}
	),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark([54.752656, 56.002053], {
			hintContent: 'Добрый картон',
			balloonContent: 'Здесь делают лучший картон'
		}, {
				iconLayout: 'default#image',
				iconImageHref: 'sign.png',
				iconImageSize: [64, 64],
				iconImageOffset: [-32, -64]
			});
	myMap.geoObjects.add(myPlacemark);

//	myMap.behaviors.disable('drag');
	myMap.behaviors.disable('dblClickZoom');
	myMap.behaviors.disable('scrollZoom');
	myMap.behaviors.disable('multiTouch');
	myMap.behaviors.disable('rightMouseButtonMagnifier');
	myMap.behaviors.disable('leftMouseButtonMagnifier');
	myMap.behaviors.disable('routeEditor');
	myMap.behaviors.disable('ruler');

	if (matchMedia) {
		// alert("matchMedia");
		var screen = window.matchMedia("(max-width: 576px)");
		screen.addListener(changes);
		// screen.addEventListener(changes, changes(screen, myMap));

		changes(screen);
	}

});

function changes(screen) {
	// alert("matchMedia");

	if (screen.matches) {
		// alert("yes");
		myMap.setCenter([54.752656, 56.002053], 16);
		// myMap.behaviors.disable('drag');
	}
	else {
		// alert("no");
		myMap.setCenter([54.752575, 55.994976], 15);
		// myMap.behaviors.enable('drag');
	}
}





