import { Component, OnInit } from '@angular/core';
import '../../../assets/js/template.js';
import { HealthInsuranceService } from 'src/app/services/health-insurance.service.js';
import { GetHealthRequestModel } from 'src/app/models/request/get-health-request.model.js';
import { ActivatedRoute } from '@angular/router';
import { DetailsTab } from 'src/app/models/cruise-list.model.js';

declare var $;
@Component({
  selector: 'app-cruise-list',
  templateUrl: './cruise-list.component.html',
  styleUrls: ['./cruise-list.component.css']
})
export class CruiseListComponent implements OnInit {

  insuranceList: any[] = [];
  insuranceDetailsList: any[] = [];
  searchEnquiryId: string;
  insuranceDetails: DetailsTab = new DetailsTab();

  policyFor: string;
  planType: string;
  pincode: number;

  slideConfig = {
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
  };

  constructor(private healthService: HealthInsuranceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchEnquiryId = params.enquiryId;
    })
    let request: GetHealthRequestModel = {
      enquiryID: this.searchEnquiryId
    }
    this.healthService.getHealthInsuranceById(request).subscribe(res => {
      this.insuranceList = this.groupBy(JSON.parse(res).Table, function (item) { return [item.InsuranceCompanyName]; });
      this.insuranceDetailsList = JSON.parse(res).Table1;
    });
    this.pincode = this.healthService.contactObject.pincode;

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

  openDetailsModal(insuranceCmpyName: string, planname: string) {
    let details = this.insuranceDetailsList
      .filter(f => f.companyname.toLowerCase() == insuranceCmpyName.toLowerCase() &&
        f.planname.toLowerCase() == planname.toLowerCase());
    this.extractTabData(details);
    $('.best-price-container').each(function () {
      $(this).find('.best-price-content').children(".inner-box-tab").hide();
      $(this).find('.best-price-content').children(".inner-box-tab:first").show();
      $(this).find("ul.menu-tab").children('li').on('click', function () {
        $('.best-price-container ul.menu-tab li').removeClass("choose");
        $(this).addClass("choose");
        $(this).closest('.best-price-container').children('.best-price-content').children(".inner-box-tab").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn("300");
      });
    });
  }
  groupBy(array, f) {
    var groups = {};
    array.forEach(function (o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    })
  }

  extractTabData(details) {
    let detailsTab: DetailsTab = {
      productFeatures: {
        basicFeatures: details.filter(f => f.type == 'Basic Features'),
        specialFeatures: details.filter(f => f.type == 'Special Features')
      },
      additionalBenefits: {
        additionalFeatures: details.filter(f => f.type == 'Additional Features'),
        usp: details.filter(f => f.type == 'USP')
      },
      productLimitations: {
        coPay: details.filter(f => f.type == 'CO-Pay'),
        subLimits: details.filter(f => f.type == 'Sub-Limits')
      },
      aboutCompany: {
        factsFigures: details.filter(f => f.type == 'Facts & Figure'),
        downloads: details.filter(f => f.type == 'Downloads')
      },
      waitingPeriods: {
        exclusions: details.filter(f => f.type == 'Exclusions'),
        waitingPeriods: details.filter(f => f.type == 'Waiting Periods')
      }
    }
    this.insuranceDetails = detailsTab;
    console.log(this.insuranceDetails);
  }
}
