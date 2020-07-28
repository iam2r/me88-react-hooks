export default class Utils {
    static initMobileData() {
        let ua = navigator.userAgent;
        let andriod = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
        let ipadPro =
            !!/macintosh/.test(ua.toLowerCase()) && "ontouchend" in document;
        let ios = !!/iphone|ipad|ipod/.test(ua.toLowerCase()) || ipadPro;
        let tablet =
            /(?:iPad|PlayBook)/.test(ua) ||
            (andriod && !/(?:Mobile)/.test(ua)) ||
            (/(?:Firefox)/.test(ua) && /(?:Tablet)/.test(ua)) ||
            ipadPro;
        let device = andriod || ios || tablet;

        return {
            ios: ios,
            andriod: andriod,
            tablet: tablet,
            device: device,
        };
    };

    static force2Mobile() {
        const mobile = Utils.initMobileData();
        const isMobile = mobile.device && !mobile.tablet;
        if (isMobile && !sessionStorage.getItem('force2Desktop')) {
            window.location.href = "./wap";
            require('root/page/wap');
            return true
        }
        return false
    }

    static removeHoverSideEffect() {
        try {//prevent exception on browsers not supporting DOM styleSheets properlytyl


            for (let si in document.styleSheets) {


                const styleSheet = document.styleSheets[si] as any;


                if (!styleSheet.rules) continue;



                for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {

                    const cur = styleSheet.rules[ri];
                    if (!cur.selectorText) continue;

                    if (cur.selectorText.match(':hover')&&!cur.selectorText.match('force-hover')) {
     
                        cur.selectorText = cur.selectorText.replace(/:hover/g, ":active");
                        
                    }


                }


            }


        } catch (ex) { }
    }
}