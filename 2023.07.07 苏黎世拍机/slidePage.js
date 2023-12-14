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
'slides/A4ED35B7-EB42-4DB5-9A50-EA8667D7C39B_1_105_c.jpeg', 
'slides/%E5%B8%A7-2023-07-08-12-13-45.jpg', 
'slides/9BE78225-BAE9-4983-B175-0F233686B5CA_1_105_c.jpeg', 
'slides/2D81C76A-62CC-4F7B-824E-58484E894577_1_105_c.jpeg', 
'slides/6E38E9FA-9EFA-44DB-AD04-2D36A6C91754_1_105_c.jpeg', 
'slides/D6580A7B-FBD2-4083-B4D3-B0FE527565E6_1_105_c.jpeg', 
'slides/02384F78-B67E-4844-8BB8-23035167E8FA_1_105_c.jpeg', 
'slides/CC6A69A5-FF48-4316-9C62-DEA07D0C15AE_1_105_c.jpeg', 
'slides/91F3E2D5-BF49-4A7F-932C-30D460FC5E1D_1_105_c.jpeg', 
'slides/348B241B-3F25-494E-B8B8-F2945C6D4EF1_1_105_c.jpeg', 
'slides/ED9B094A-B600-43D9-86BA-42A7BBF02B21_1_105_c.jpeg', 
'slides/A95D2518-71AE-4FFB-86C2-31459609D764_1_105_c.jpeg', 
'slides/ECB9CF9F-33BE-475D-848D-4554576C9B49_1_105_c.jpeg', 
'slides/AA94DC91-4CFD-47B3-91C9-89DB0A9CE3C1_1_105_c.jpeg', 
'slides/67A78323-D084-4BDF-B032-093032EFD6A9_1_105_c.jpeg', 
'slides/D3DF6CC8-A7C5-43A7-A1D1-2A4DE4395B1E_1_105_c.jpeg', 
'slides/2720076C-F4F8-4241-A470-1A2D70719AC9_1_105_c.jpeg', 
'slides/B5B478D3-09D4-4E48-9327-7AB3209626FF_1_105_c.jpeg', 
'slides/8A382061-7BD9-49EC-849B-BADB98B4638F_1_105_c.jpeg', 
'slides/0251260E-CB2E-4A37-BF93-861B00D487C3_1_105_c.jpeg', 
'slides/01A58207-FD11-4939-B276-8F1BF16F9024_1_105_c.jpeg', 
'slides/B00F96FF-6D28-4A98-98C6-7D437A72500C_1_105_c.jpeg', 
'slides/19A5448A-022F-4088-8829-BD6F089A420C_1_105_c.jpeg', 
'slides/360BDF5F-E824-4203-B77D-D91CD6C1DA76_1_105_c.jpeg', 
'slides/D56671CC-93E6-4E54-ABC5-9DB71311F6A2_1_105_c.jpeg', 
'slides/C66667D4-73CD-4BF1-ACAC-4FC97BD51B3F_1_105_c.jpeg', 
'slides/0FF677CC-F0BC-40D6-B8B5-EAC4DC37A39D_1_105_c.jpeg', 
'slides/189DA5CF-A5A9-4427-BF58-227F2AF2C473_1_105_c.jpeg', 
'slides/FABE508C-4BD1-4247-8C45-ABFA57056EC4_1_105_c.jpeg', 
'slides/C52A7B1D-5131-45D4-BCD7-B8858AB80447_1_105_c.jpeg', 
'slides/49CC8DAB-D9CC-4664-A9F7-9958374632F3_1_105_c.jpeg', 
'slides/7AC58AD2-9C74-4C87-9FAD-9C5F04587C39_1_105_c.jpeg', 
'slides/CA4F5208-59B3-497D-B2E8-83287F70B81F_1_105_c.jpeg', 
'slides/0CA0DF7B-4AA4-4134-B9A0-70AE1BCD0052_1_105_c.jpeg', 
'slides/B659EB42-69B0-45ED-9903-7D0B27C84514_1_105_c.jpeg', 
'slides/5E0071B0-1D21-4A6D-BE69-437EB92CB409_1_105_c.jpeg', 
'slides/A981EF7D-72E3-40D9-A54D-53494850D9E2_1_105_c.jpeg', 
'slides/96D44181-4348-49EC-B54B-FD79A0272B7E_1_105_c.jpeg', 
'slides/2D55F375-28A2-4DB3-9EA2-EC07FD9200E9_1_105_c.jpeg', 
'slides/B5C87317-CED3-4451-880B-7C5C4A93D159_1_105_c.jpeg', 
'slides/903E6562-3B25-41ED-AE93-21C44E715BC8_1_105_c.jpeg', 
'slides/DFB972B0-2341-4AAF-B0F9-B53EB13DEB04_1_105_c.jpeg', 
'slides/B89881E8-1D1B-4E2F-A60D-22032F57FF0D_1_105_c.jpeg', 
'slides/94311837-6D72-4090-8481-8C453B4025C0_1_105_c.jpeg', 
'slides/EDEB8799-7416-429D-B6C4-A4BE914292FF_1_105_c.jpeg', 
];
const nrofImages = '45';
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
1920,
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
1086,
1086,
1086,
];
var hImg = [
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
724,
724,
724,
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
