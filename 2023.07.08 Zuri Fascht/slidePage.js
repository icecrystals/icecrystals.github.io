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
'slides/9C0CB479-8379-486D-9202-6BF0ACEDD43A_1_105_c.jpeg', 
'slides/CEE10D50-0F97-4FBC-91DD-43368DDB2C5B_1_105_c.jpeg', 
'slides/F121976D-914F-454A-A84D-8EEEFC827798_1_105_c.jpeg', 
'slides/5E93AA70-BC76-4F68-81EE-211DACCFFB14_1_105_c.jpeg', 
'slides/1CCEECA1-B59A-484E-AC05-5CC8FAB45CB5_1_105_c.jpeg', 
'slides/17CE1D59-6AB3-47C8-835F-2FAA020CDFF5_1_105_c.jpeg', 
'slides/ACB999BD-5BA7-4286-9594-A6A3E7C8386E_1_105_c.jpeg', 
'slides/43B497EC-BFC9-492A-A021-0B2548B50412_1_105_c.jpeg', 
'slides/88C95D7E-4308-460F-B200-883DEDBABC57_1_105_c.jpeg', 
'slides/A458BBD6-21CE-4DDC-AD07-5F37F2E3B686_1_105_c.jpeg', 
'slides/7262B463-C8DA-4C8A-B1C9-C575287855FF_1_105_c.jpeg', 
'slides/333FE9E8-9BF0-4A4C-B70B-55130C6C5780_1_105_c.jpeg', 
'slides/7A2E6ED6-FA9B-4278-9794-D2A6F3C29CE1_1_105_c.jpeg', 
'slides/761C437D-9DBE-4283-8565-BA1C4A7A8C5A_1_105_c.jpeg', 
'slides/FA72F99C-27A2-4B9C-AF45-35AB163814FE_1_105_c.jpeg', 
'slides/92470643-61CF-4621-9C52-E2DA14B5D076_1_105_c.jpeg', 
'slides/64F6EC43-461B-4F5C-8566-645E99F17118_1_105_c.jpeg', 
'slides/FDF0433E-9D9F-4689-98C1-0F18E4FF5EF2_1_105_c.jpeg', 
'slides/8B118606-63D9-425B-85DD-0DE30715D9AA_1_105_c.jpeg', 
'slides/7AC3A394-B6F3-45A6-95B4-3756E720BF4F_1_105_c.jpeg', 
'slides/4A15ED39-D024-4B83-8BAE-D26743CA5645_1_105_c.jpeg', 
'slides/E1CBC9B7-D04E-4CDF-BDFE-FE7FA000A101_1_105_c.jpeg', 
'slides/32C66F8F-A7CD-440F-97E1-F382BB9DBC3F_1_105_c.jpeg', 
'slides/F3C06381-268A-4D95-8926-77F0CD696648_1_105_c.jpeg', 
'slides/1F73CE97-5838-4C23-B0BA-F2F878347FA4_1_105_c.jpeg', 
'slides/97510738-E76D-420D-916F-477770B4E591_1_105_c.jpeg', 
'slides/8AF081D3-5983-46F3-B324-B04D0C19B6D5_1_105_c.jpeg', 
'slides/BDC20937-9B09-4906-BC6E-2441AD1265D5_1_201_a.jpeg', 
'slides/1B828BFE-A874-44CD-A5C2-546425521356_1_201_a.jpeg', 
'slides/803F4D38-F7C7-4887-BFF4-A5BC44C12563_1_201_a.jpeg', 
];
const nrofImages = '30';
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
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
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
1086,
1086,
720,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
720,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
1086,
720,
1086,
1086,
1620,
1620,
1472,
];
var hImg = [
724,
724,
1080,
724,
724,
724,
724,
724,
724,
724,
724,
724,
724,
1080,
724,
724,
724,
724,
724,
724,
724,
724,
724,
724,
1080,
724,
724,
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
