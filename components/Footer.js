import React from 'react';
import $ from 'jquery';

export default class Footer extends React.Component {

  // componentDidMount() {
  //   $(document).ready(function() {
  //
  //     $(document).on("click", ".address", function(){
  //   		$(".map_block").addClass("show");
  //   	});
  //   	$(document).on("click", ".map_block_bg, .close_map", function(){
  //   		$(".map_block").removeClass("show");
  //   	});
  //
  //   	ymaps.ready(init);
  //       var myMap,
  //           myPlacemark;
  //       function init(){
  //
  //
  //           var MyZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
  //               "<div id='zoom-in'></div>" +
  //               "<div id='zoom-out'></div>" +
  //           "</div>", {
  //
  //           // Переопределяем методы макета, чтобы выполнять дополнительные действия
  //           // при построении и очистке макета.
  //           build: function () {
  //               // Вызываем родительский метод build.
  //               MyZoomLayout.superclass.build.call(this);
  //
  //               // Начинаем слушать клики на кнопках макета.
  //               $('#zoom-in').bind('click', ymaps.util.bind(this.zoomIn, this));
  //               $('#zoom-out').bind('click', ymaps.util.bind(this.zoomOut, this));
  //           },
  //
  //           clear: function () {
  //               // Снимаем обработчики кликов.
  //               $('#zoom-in').unbind('click');
  //               $('#zoom-out').unbind('click');
  //
  //               // Вызываем родительский метод clear.
  //               MyZoomLayout.superclass.clear.call(this);
  //           },
  //
  //           zoomIn: function () {
  //               var map = this.getData().control.getMap();
  //               // Генерируем событие, в ответ на которое
  //               // элемент управления изменит коэффициент масштабирования карты.
  //               this.events.fire('zoomchange', {
  //                   oldZoom: map.getZoom(),
  //                   newZoom: map.getZoom() + 1
  //               });
  //           },
  //
  //           zoomOut: function () {
  //               var map = this.getData().control.getMap();
  //               this.events.fire('zoomchange', {
  //                   oldZoom: map.getZoom(),
  //                   newZoom: map.getZoom() - 1
  //               });
  //           }
  //      });
  //
  //           myMap = new ymaps.Map ("YMapsID", {
  //
  //               center: [55.804884, 37.585409],
  //               zoom: 15
  //
  //           });
  //
  //           var customZoom = new ymaps.control.SmallZoomControl({layout: MyZoomLayout, position:{bottom: 60, left: 10}});
  //
  //           myMap.controls.add(customZoom);
  //
  //
  //
  //           /*var myButton = new ymaps.control.Button('<b>Я кнопка</b>');
  //           myButton.style.background = "#000000";
  //           myMap.controls.add(myButton, {
  //             float: "left"
  //           });*/
  //
  //           myPlacemark = new ymaps.Placemark([55.805, 37.585409],
  //               {},
  //               {iconLayout: 'default#image', iconImageHref: "img/ico-map.png", iconImageSize: [35, 56]});
  //           myMap.geoObjects.add(myPlacemark);
  //       }
  //
  //
  //   });
  // }

  render() {
    return(
      <div>
        <footer>
          <div className="left_block">
            <div className="znak_wr">
              <img src="static/img/blog/footer/znak.svg"
                   alt="Знак AIVI" />
            </div>
          </div>
          <div className="right_block">
            <div className="contact_wr">
              <div className="b_left">
                <div className="title">
                  Офис
                </div>
                <div className="descr address">
                  <span className="underline">Москва, ул. Большая</span><br />
                  <span className="underline">Новодмитровская, 36</span>
                </div>
              </div>
              <div className="b_right">
                <div className="title">
                  Связь
                </div>
                <div className="descr">
                  <a href="tel:+74951200834"
                     className="underline">+7 (495) 120-08-34</a>
                  <a href="mailto:info@aivi.ru"
                     className="underline">info@aivi.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_wr">
            <span>&copy;2018 ООО «АЙВИ».</span><br />
            <span>Все права защищены</span>
          </div>
        </footer>

        <div className="map_block">
      		<div className="map_block_bg"></div>
      		<div className="map_container">
      			<div className="close_map">
      			</div>

      			<div className="map" id="YMapsID">
      			</div>
      		</div>
      	</div>
        <script src="../static/js/yandeks_map.js"></script>
        <script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>
      </div>
    )
  }
}
