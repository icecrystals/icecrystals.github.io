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
'slides/DCCE8424-0D81-47A3-A770-332589C4F811_1_105_c.jpeg', 
'slides/49392B9D-5A1F-44F2-B976-CD80EA362DA4_1_105_c.jpeg', 
'slides/39DBDA56-7BB9-4FDD-AE86-23531D34689E_1_105_c.jpeg', 
'slides/89156A34-88E3-4FF7-BF60-7AAF9A61FC48_1_105_c.jpeg', 
'slides/34B02C26-1CB8-4AD2-9192-DDEDD9800370_1_105_c.jpeg', 
'slides/128DA926-021E-4AC4-8994-29F959B00264_1_105_c.jpeg', 
'slides/3A1DA863-3474-46B7-BA99-6960FB942395_1_105_c.jpeg', 
'slides/C4D7A335-CB68-432A-ACFF-F1A8B7DE8C4D_1_105_c.jpeg', 
'slides/37B4E1AB-D7CA-4505-A65D-C8E966516C4D_1_105_c.jpeg', 
'slides/FC4B5593-96E6-492E-B2E3-61A58A766F92_1_105_c.jpeg', 
'slides/93AE0E0D-CAAD-4CBA-8416-CE914842691D_1_105_c.jpeg', 
'slides/81E65699-E6A3-461B-AD13-066856FB8192_1_105_c.jpeg', 
'slides/D5621143-3CBF-4699-BF34-803A568FE928_1_105_c.jpeg', 
'slides/8E439C90-C3CD-4759-B93F-F743FD76A5AB_1_105_c.jpeg', 
'slides/4A9CF63E-7594-4114-AC7B-183FB9FBCB8E_1_105_c.jpeg', 
'slides/56E3A5C0-7674-4075-A2CB-11FFE2E8DEEE_1_105_c.jpeg', 
'slides/95B01DFF-A781-4430-A41E-CD1C79D7400D_1_105_c.jpeg', 
'slides/33EE9491-FA3A-44FD-8A39-04F3F8BFCE17_1_105_c.jpeg', 
'slides/5AA40F1A-8B3D-439A-A103-AAF8A56E9F1B_1_105_c.jpeg', 
'slides/61BD09BD-9963-49B2-94AF-D84F1F8221EA_1_105_c.jpeg', 
'slides/DC74B3DD-2121-4072-B16E-E56C98BA824C_1_105_c.jpeg', 
'slides/9BAD5CBA-BA17-405E-ABDB-282C511E3A98_1_105_c.jpeg', 
'slides/FB20DCC9-1F43-4A98-93DC-6215F33BCD96_1_105_c.jpeg', 
'slides/1894679F-8EB5-4E1B-8635-FE6376E10B64_1_105_c.jpeg', 
'slides/0B5799B7-F8CB-4671-AC82-7ACF2F6ECBE8_1_105_c.jpeg', 
'slides/9FDDEAA2-889D-448D-B608-0DD9AA538890_1_105_c.jpeg', 
'slides/525E1B6D-F861-466E-A00B-6D4548A7F1B1_1_105_c.jpeg', 
'slides/9A43EB62-9FB0-4614-BD16-AC78934AF105_1_105_c.jpeg', 
'slides/45C58A90-7F4A-4EE6-BAE4-C0FD7BD85B43_1_105_c.jpeg', 
'slides/8A5B55D9-C5A9-41F8-830D-87588E510D9D_1_105_c.jpeg', 
'slides/F8780612-17FE-42D4-B0CC-757002DD6E3E_1_105_c.jpeg', 
];
const nrofImages = '31';
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
  'image',
];
var wImg = [
1086,
1086,
1086,
1086,
1086,
1086,
998,
1086,
1086,
1086,
1029,
1086,
1067,
1086,
1068,
1086,
1154,
1224,
1086,
1128,
1086,
1086,
1086,
1004,
1080,
1086,
1131,
1200,
1104,
1081,
1143,
];
var hImg = [
724,
724,
724,
724,
724,
724,
787,
724,
724,
724,
763,
724,
736,
724,
735,
724,
680,
642,
724,
696,
724,
724,
724,
782,
727,
724,
695,
654,
711,
727,
688,
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
