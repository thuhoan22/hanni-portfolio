import { Link } from "react-router-dom";
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-light.min.css';

export default function BlogDetail() {

  return (
    <section className="main-content blog-page-detail">
      <div className="section">
        <div className="inner">
          <div className="section-head">
            <div className="title-box">
              <ul className="breadcrumb">
                <li className="breadcrumb-item prev-page">
                  <Link to={"/blog"} className="link">
                    <span className="text">Blog</span>
                  </Link>
                </li>
                <li className="breadcrumb-item current-page">
                  <span>Blog detail</span>
                </li>
              </ul>
              <h3 className="title-main">
                How to use Swiper and Slick on the responsive web
              </h3>
            </div>
          </div>
          <div className="section-content">
            <div className="inner">
              <div className="time">
                <span className="icon-calendar"></span>
                <span className="value">April 12, 2023</span>
              </div>
              <div className="blog-content highlight-text">
                <p>Hello, I'm <em>Hanni Nguyen</em>,</p>
                <p>Today, I want to share with everybody about the topic <em>“How to use Swiper and Slick on the responsive web”</em>. These are the knowledge that I know as I do related projects about it. Maybe you have known about this technique, but I hope it can help something.</p>
                <p><strong>I. Introduction</strong></p>
                <p> As we all know, Swiper and Slick are jQuery plugins for creating a completely customizable, responsive, and easy to use PC/MO carousel/slider.</p>
                <p>In fact, when we work, there is a frequent requirement is to create a website that can run well on different browsers and operating systems as well as screen sizes...And also with <em>Swiper/Slick</em>, there are also requirements that when working we have to deal with it from simple to complex to meet the request that we receive.</p>
                <p><strong>II. Content</strong></p>
                <p><span>1. Swiper</span></p>
                <p><b>* Setup:</b></p>
                <p>- Load the necessary JavaScript and CSS files, you can import or use the CDN link:</p>
                <Highlight className="language-html">
                  {`<!-- Import -->
<link rel="stylesheet" href="css/swiper.min.css"/>
<script src="js/swiper.min.js"></script>

<!-- Link CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>`}
                </Highlight>
                <p>- Add slides to the swiper:</p>
                <Highlight className="language-html">
                  {`<!-- Swiper -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide</div>
    <div class="swiper-slide">Slide</div>
    <div class="swiper-slide">Slide</div>
    <div class="swiper-slide">Slide</div>
    ...
    <div></div>
  </div>
</div>`}
                </Highlight>
                <p>- Add pagination & navigation controls to the swiper if needed:</p>
                <Highlight className="language-html">
                  {`<!-- Add Pagination -->
<div class="swiper-pagination"></div>

<!-- Add Arrows -->
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>`}
                </Highlight>
                <p>- Initialize the swiper:</p>
                <Highlight className="language-javascript">
                  {`// Initialize Swiper
<script>
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    ...

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4
      }
    }
  });
</script>`}
                </Highlight>
                <p><b>* Example:</b></p>
                <p>- Basic (breakpoints):</p>
                <Highlight className="language-html">
                  {`Note

Not all parameters can be changed in the breakpoints parameters, only those which are not required different layout and logic, like 
"slidesPerView", "slidesPerGroup", "slidesPerColumn", "spaceBetween". Such parameters like "loop" and "effect" won't work.`}
                </Highlight>
                <p>- Responsive slider vertically or horizontally using the Change direction function (Changes slider direction from <em>"horizontal"</em> to <em>"vertical"</em> and back).</p>
                <Highlight className="language-javascript">
                  {`// Initialize Swiper
<script>
  var swiper = new Swiper('.swiper-container', {
    direction: getDirection(),
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var direction = window.innerWidth &lt;= 760 ? 'vertical' : 'horizontal';
    return direction;
  }
</script>`}
                </Highlight>
                <p>- Sometimes there are features that only apply to mobile devices and PC don't, so what should we do to prevent swiper from working?</p>
                <p>&nbsp;&nbsp;+&#41; I'll use method destroy in the swiper to prevent the swiper work.</p>
                <Highlight className="language-html">
                  {`mySwiper.destroy(deleteInstance, cleanStyles);

Destroy slider instance and detach all events listeners, where:
+ deleteInstance - boolean - Set it to false (by default it is true) to not to delete Swiper instance
+ cleanStyles - boolean - Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container. 
   Useful if you need to destroy Swiper and to init again with new options or in different direction`}
                </Highlight>
                <Highlight className="language-javascript">
                  {`<script>
  // Get element
  var swiperTab,
  swiperTarget = '.swiper-container';

  // Slider settings
  var settings = {
    slidesPerView: 'auto',
    ...
  }

  // Initialize swiper
  swiperTab = new Swiper(swiperTarget, settings);

  // Set condition in resize() function
  $(win).on('resize', function() {
    if (window.innerWidth &lt; 1024) {
      clearTimeout($.data(this, 'resizeTimer'));

      $.data(this, 'resizeTimer', setTimeout(function() {
        if(swiperTab.destroyed) {
          swiperTab = new Swiper(swiperTarget, settings);
        }
      }, 50));
    } else {
      clearTimeout($.data(this, 'resizeTimer'));

      $.data(this, 'resizeTimer', setTimeout(function() {
        if(!swiperTab.destroyed){
          swiperTab.destroy(true,true);
        }
      }, 50));
    }
  });
</script>`}
                </Highlight>
                <p>- Because of setting the condition and running in the <em>resize() </em>function, when dragging the screen, swiper slide will be generated continuously, so I used <em>"clearTimeout"</em> to prevent that...Then, I will then use <em>"setTimeout"</em> to reset it.</p>
                <p>- Link document detail: <Link to={"https://swiperjs.com/api/"} className="link-text">https://swiperjs.com/api/</Link></p>
                <p><span>2. Slick</span></p>
                <p><b>* Setup:</b></p>
                <p>- Load the necessary JavaScript and CSS files, you can import or use the CDN link:</p>
                <Highlight className="language-html">
                  {`<!-- Import -->
<link rel="stylesheet" href="css/slick.css"/>
<script src="js/slick.js"></script>

<!-- Link CDN -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>

<!-- Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>`}
                </Highlight>
                <p>- Add slides to the Slick:</p>
                <Highlight className="language-html">
                  {`<!-- Slick -->
<div class="your-class">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</div>`}
                </Highlight>
                <p>- Add pagination & navigation controls to the Slick if needed:</p>
                <Highlight className="language-html">
                  {`<!-- Add Pagination or Arrows -->
<button type="button" data-role="none" class="slick-prev">Previous</button>
<button type="button" data-role="none" class="slick-next">Next</button>`}
                </Highlight>
                <p>- Initialize the Slick:</p>
                <Highlight className="language-javascript">
                  {`// Initialize Slick
<script>
  $('.your-class').slick({
    responsive: [
    {
      breakpoint: 700,
      settings: {
        setWrapperSize: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  })
<script>`}
                </Highlight>
                <p>- Example:</p>
                <p>- Basic (breakpoints):</p>
                <p>- Similar to Swiper, I can also handle blocking the slick operation on PC and only let it work on mobile. I will use <em>"unslick"</em> to destroy the slick.</p>
                <p>- mobileFirst: In slick, there is a mobileFirst parameter to control responsive between the MO and the PC.</p>
                <Highlight className="language-html">
                  {`mobileFirst
Type: boolean
Default: false

Responsive settings use mobile first calculation`}
                </Highlight>
                <Highlight className="language-javascript">
                  {`
<script>
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
      $('.slider').slick('resize');
  });
<script>`}
                </Highlight>
                <p>- And for more optimal, I also treat it like Swiper by leaving it in the resize function and setting the condition to test.</p>
                <Highlight className="language-javascript">
                  {`
<script>
  // Get element
  var slider = $('.slider');

  // Slider settings
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  };
      
  // Set condition in resize() function
  $(win).on('resize', function() {
    if (window.innerWidth > 768) {
      clearTimeout($.data(this, 'resizeTimer'));
      
      $.data(this, 'resizeTimer', setTimeout(function() {
        if (slider.hasClass('slick-initialized')){
          $('.slider').slick('unslick');
          $('.slider').find('div').removeAttr('tabindex role id aria-describedby style');
          
          return false;
        }
      }, 50));
    } else {
      clearTimeout($.data(this, 'resizeTimer'));
      
      $.data(this, 'resizeTimer', setTimeout(function() {
        if (!slider.hasClass('slick-initialized')){    
          $('.slider').slick(settings);
          
          return true;
        }
      }, 50));
    }
  });
<script>`}
                </Highlight>
                <p>- I also used <em>"clearTimeout"</em> and <em>"setTimeout"</em> to prevent the slick from spawning continuously while resizing the window.</p>
                <p>- Link document detail: <Link to={"https://kenwheeler.github.io/slick/"} className="link-text">https://kenwheeler.github.io/slick/</Link></p>
                <p></p>
                <p></p>
                <p>==&gt;This is the knowledge that I know, hoping to help everyone. Thank you for watching my sharing!</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
