import { Component, OnInit } from '@angular/core';
import '../../assets/js/template.js';

declare var $;
@Component({
  selector: 'app-cruise-list',
  templateUrl: './cruise-list.component.html',
  styleUrls: ['./cruise-list.component.css']
})
export class CruiseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.airlinepriceslider').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
    $('.inner-sidebar').each(function () {
      $('span.icon').on('click', function () {
        $(this).toggleClass('clicked');
        $(this).closest('.widget-sidebar').children('.widget-content').slideToggle();

      });
    });
    $('.inner-sidebar').each(function () {
      $('span.icon').toggleClass('clicked');
      $('span.icon').closest('.widget-sidebar').children('.widget-content').slideToggle();
    });
    $('.owl-carousel-ver1').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 0,
      smartSpeed: 700,
      autoplayHoverPause: true,
      dots: false,
      items: parseInt($('.owl-carousel-ver1').data('columns')),
      responsive: {
        0: {
          items: 1,
        },
        360: {
          items: 2,
        },
        480: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: parseInt($('.owl-carousel-ver1').data('columns')),
        }
      }
    });
    $('.car-list').each(function () {
      $(this).find('.car-content').children(".inner-box-tab").hide();
      $(this).find('.car-content').children(".inner-box-tab:first").show();
    });
    $("ul.menu-car-search").children('li').on('click', function () {
      $('ul.menu-car-search li').removeClass("choose");
      $(this).addClass("choose");
      $('.car-list').children('.car-content').children(".inner-box-tab").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn("300");
    });
  }

}
