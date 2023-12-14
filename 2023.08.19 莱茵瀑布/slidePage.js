// File slidePage.js made with jAlbum 31.0.1 with LightGallery 1.2.3, album creation date 2023/12/14 11:27 
const osMap = false; 
const maxNrofButtons = 3; 
const usePlaceholder= false;
const removeIndexPageCode= false;
var thumbnailHasCaption= false;
var emailBodyTextI = "Click on the link above to see the photo album I like to share with you!";
var emailSubjectI = "I like to share a photo album";
var emailBodyTextSlide = "Click on the link above to see the photo I like to share with you!";
var emailSubjectSlide = "I like to share a photo";
var emailAddresseeI= '';
var emailAddresseeSlide= '';
var descriptionInSidePanel= false;
const strCenter= "Center";
const strInClipboard = "The clipboard contains links to the image and web-page and it contains the image title";
const showCurLoc=  true;
var moreInfoURL = "";
var showPhotoLink= false;
var showFsButton=  false;
var showTitleInImage= true;
var useFallback=false;
const preventCaptionOverlap= true;
var hideTitleMinWidth = 500;
var hideTitleInTheme = false;

var apiKeyExists = false;

var showLocationNewTab= false;

var titleVPosPercent=4;
var topButtonLeft = 6;
var topButtonTop = 20;
var topButtonWidth = 100;
var topButtonPx = false;
var topButtonIcon = false;
var useThemeAsBackground = false;
var alignmentTitleInTheme = 0;
var fixedThemeImage = false;

var menuBar = false;
var menuBootstrap = false;
var relThumbHeight = 0;
const whSlideThumbPerc = 150;
const relSlideThumbHeight = 15;
var slideThumbHeight = 80;
var slideThumbWidth =100;
var slideThumbHeightStr = "80px";
var enableVericalSwipesOnIndexPage = true;
var hideArrowsOnMobile = true;
var masonryGallery = false;
var masonryGap =8;
var masonryColsAsked =0;

var openWithInfoWindow = false;
var hamburgerBtn = true;
const use_jg = true;
const autoPlay = false;  // "Start the music automatically"
const autoPlaySlideShow = true;  // "Start slide show automatically"
var ExifButton = false;

var hideCloseButton = false;
var rowHeight_jg = 80;
var margins_jg =  2;
var border_jg =  -1;
var lastRow_jg = 'center';
var captionTransparency_jg = 0.40;
var maxRowHeight_jg= '133%';
var level = 1;

var viewtime = 5000;
var transtime = 800;
var transeffect = "lg-fade";

var enableSlideShow = true;
var albumImage= 'folderimage.jpg';
var useSecureLinks= true;
var standardFontFamily= 'Verdana, Geneva, Tahoma, sans-serif';
var standardFontSize='18px';
var orgFontsize= 18;
var h1Fontsize= 24;
var orgbuttonFontsize= 20;
var orgthumbsFontSize= 14;
var appid = '283785241788194';  // FB app key
var buttonOpacity= '1.00';
var resourcePath = "../res";
var mapType = 'hybrid';
var initialZoom = 16;
var buttonsVisible=true;
var toggleButtonsAllowed=true;
var topButtonsVisible = true; 
var homePage = '';
var strMoreInfo= '...';
var strLessInfo= '<<';
var links_under_thumbs = false;
var enableTaps = true;
var stopAfterLastSlide = true;	
var swipesArea = 1;
var disableViewerSettings =  false;

var useGeocodingAPI = false;
//var Chrome = (navigator.appVersion.indexOf("Chrome") != -1)



var albumImageIndex = 0;

var srcImg = [
'slides/IMG_6821.JPG', 
'slides/IMG_6831.JPG', 
'slides/IMG_6849.JPG', 
'slides/IMG_6859.JPG', 
'slides/IMG_6862.JPG', 
'slides/IMG_6864.JPG', 
'slides/IMG_6973.JPG', 
'slides/IMG_6985.JPG', 
];
const nrofImages = '8';
const skipIndexPage = false;
var maxThumbHeight = 80;
var maxThumbWidth = 120; 

const downloadLink= false;



 // -- Start properties block --


const counterFieldUsed= false;

var fileCategory = [
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
];
var wImg = [
1620,
1620,
1620,
1620,
1620,
1620,
1620,
1620,
];
var hImg = [
1080,
1080,
1080,
1080,
1080,
1080,
1080,
1080,
];
// -- End properties block --



var GalleryIsOpen = false;

var slideType = '';  // 'image' 'iframe' 'video' 
var slideshowWasOn= false;
var startedFromIndexPage = false;
var mp4Video= false;
var widthSidePanel = 0;
var widhImageStage =  0;
var widhImageStagepx = '';
var widthSidePanelpx = '';
var specSidePanelWidth = 20;
var widthSidePanelInPercent = true;
const useSidePanel = false;
var emptyCaption = false;

const lg = document.getElementById("thumbsgallery");
let plugin = null;

function initGallery() {
   //console.log("screenHeight: " + screenHeight + " relSlideThumbHeight: " + relSlideThumbHeight + " slideTumbHeightStr: " + slideThumbHeightStr + " slideThumbWidth: " + slideThumbWidth);
   // console.log("initGallery transeffect: " + transeffect + " viewtime: " + viewtime + " transtime: " + transtime);
    plugin = lightGallery(lg, {  
            showCloseIcon: true, 
            hideBarsDelay: 3*1000,
            showBarsAfter: 3*1000,
            autoplayFirstVideo: true,
            autoplayVideoOnSlide: true,
            slideShowInterval: viewtime,
            loop: false,
            hideControlOnEnd: true,
            speed: transtime,
            startAnimationDuration: transtime,
            backdropDuration: transtime,
            pager: false,// No Pager plugin
            hideScrollbar: true,
            getCaptionFromTitleOrAlt: false,
            appendSubHtmlTo: ".lg-sub-html", // caption onder image
            mode: transeffect,
            counter: false,

            allowMediaOverlap:  false,  // should be true if a toggleThumb button should be displayed
            defaultCaptionHeight: 54,

            download: true,  // show link always for weblocations, so also if showDownloadLink=false         
            actualSize: true,
            thumbnail: false, 
            plugins: [
            lgZoom,  
            lgAutoplay,
            lgHash,
            lgVideo
            ],
            mobileSettings: {
            controls: false, // Hide arrow buttons
            },
            licenseKey: "Required for commercial sites",  
        }
    )
};

function updateGallery() {
    plugin.destroy();
    setTimeout(function() {
        initGallery()
    }, 200);  
};

if (typeof(absolutePath) != "undefined") {
// Start of main page code, not exucuted in template file
lg.addEventListener('lgInit', (event) => {
    // pluginInstance = event.detail.instance;
    //console.log('onInit');
let x = null;
    x = document.querySelector('.lg-maximize');
    if (x) x.title = 'Maximize / Reduce';
    x= document.querySelector('.lg-zoom-in');
    if (x) x.title = 'Zoom in / out';
    x= document.querySelector('.lg-autoplay-button');
    if (x) x.title = 'Start / Stop slideshow'; 
    x= document.querySelector('.lg-close');
    if (x) x.title = 'Close';
    x = document.querySelector('.lg-prev');
    if (x) x.title = 'Previous';
    x =  document.querySelector('.lg-next');
    if (x) x.title = 'Next';
    if (downloadLink) {
        if (downloadOrgImages) {
            document.querySelector('.lg-download').title = 'Download original image';
        } else {
            document.querySelector('.lg-download').title = 'Download scaled image';
        }
    } else {
        document.querySelector('.lg-download').title ='Open website in a new window';
    }    
    initTooltips('.lg-container'); 
});

lg.addEventListener('lgBeforeOpen', (event) => {
    //console.log('onBeforeOpen');
    if (typeof(sAudio) != 'undefined') {
      if (sAudio && iAudio) document.querySelectorAll('audio').forEach(el => el.pause()); // stop possible audio in index file
    }
});

lg.addEventListener('lgHasVideo ', (event) => {
    //console.log('lgHasVideo ');
});

lg.addEventListener('lgPosterClick  ', (event) => {
    //console.log('lgPosterClick  ');
});

lg.addEventListener('lgAfterOpen', (event) => {
    GalleryIsOpen = true;
    //console.log('onAfterOpen');
    if (startedFromIndexPage) {
      $('.lg-autoplay-button').trigger("click");
      //console.log("startedFromIndexPage: " + startedFromIndexPage);
      startedFromIndexPage = false;
    }
});

lg.addEventListener('lgBeforeSlide', (event) => {
    const { index, prevIndex } = event.detail;
    slide_index = index;
    //console.log('onBeforeSlide: slide_index, prevIndex=' + slide_index, prevIndex);
    if (!PC) {  // see issue #1398
      $("#lg-prev-1").hide();
      $("#lg-next-1").hide();
    }
    if (iOS) {
        if (plugin.galleryItems[index].subHtml.length > 0) {
            $('.lg-sub-html').css({ 'padding-bottom': '20px' });
        } else {
            $('.lg-sub-html').css({ 'padding-bottom': '0px' });
        }
    }
    $("#gmaps").hide();
    if (typeof(gMap) != 'undefined') {
        if (gMap[slide_index].length > 0) $("#gmaps").show()
    }
    $(".lg-download").show();  // show always downloadlink for weblocations incl.vimea and youtube videos
    if ((fileCategory[slide_index] == 'image') && (!downloadLink) || (fileCategory[slide_index] == 'video')) {
        $(".lg-download").hide();
    }
 
        const counterElement = document.querySelector('.lg-counter');
        if (counterElement) {
          counterElement.innerHTML = "";
          counterElement.innerHTML += '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;';
          if (typeof(audioClip) != 'undefined') {
             if (audioClip[slide_index].length > 0) {
                counterElement.innerHTML += audioClip[slide_index];
                counterElement.innerHTML += '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;';
                initTooltips('.lg-counter');  // for audio hint
             }
          }
        }
});

lg.addEventListener('lgAfterSlide', (event) => {
    const { index, prevIndex } = event.detail;
    slide_index = index;
    //console.log('onAfterSlide, slide_index: ' + slide_index);
    //if (typeof(pano) !== 'undefined') {
    //   if (pano[slide_index]===1) $('#lg-actual-size-1').trigger("click");
    //}
});

lg.addEventListener('lgBeforeClose', () => {
    //console.log('onBeforeClose');
});

lg.addEventListener('lgAfterClose', () => {
    if (sAudio) document.querySelectorAll('audio').forEach(el => el.pause()); // stop possible audio in lightbox  
    GalleryIsOpen = false;
    //console.log('onAfterClose');
    if (fromMap || fromBridge) {closeAlbum(); }	
    else if (skipIndexPage && !hideCloseButton ) {
       (level==0) ? closeAlbum() : document.location.href = '..\\';
    }
});
// End of main page code, not exucuted in template file
}

function initExtra() {
   $('body').bind('contextmenu', function(e) { 
    return false;
  });

}
