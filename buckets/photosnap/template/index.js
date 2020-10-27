var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("routers", ["require", "exports", "@rex/h", "@rex/router", "@rex/reset"], function (require, exports, h_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_1 = __importStar(h_1);
    router_1 = __importDefault(router_1);
    router_1.default(/^\/$/, () => __awaiter(void 0, void 0, void 0, function* () {
        const { default: Home } = yield new Promise((resolve_1, reject_1) => { require(['@home' /* webpackPrefetch: true, webpackPreload: 1, webpackChunkName: "home" */], resolve_1, reject_1); }).then(__importStar);
        h_1.render(document.body, h_1.default(Home, null));
    }));
    router_1.default(/^\/features$/, () => __awaiter(void 0, void 0, void 0, function* () {
        const { default: Features } = yield new Promise((resolve_2, reject_2) => { require(['@features' /* webpackPrefetch: true, webpackPreload: 2, webpackChunkName: "features" */], resolve_2, reject_2); }).then(__importStar);
        h_1.render(document.body, h_1.default(Features, null));
    }));
    router_1.default(/^\/pricing$/, () => __awaiter(void 0, void 0, void 0, function* () {
        const { default: Pricing } = yield new Promise((resolve_3, reject_3) => { require(['@pricing' /* webpackPrefetch: true, webpackPreload: 3, webpackChunkName: "pricing" */], resolve_3, reject_3); }).then(__importStar);
        h_1.render(document.body, h_1.default(Pricing, null));
    }));
    router_1.default(/^\/stories$/, () => __awaiter(void 0, void 0, void 0, function* () {
        const { default: Stories } = yield new Promise((resolve_4, reject_4) => { require(['@stories' /* webpackPrefetch: true, webpackPreload: 4, webpackChunkName: "stories" */], resolve_4, reject_4); }).then(__importStar);
        h_1.render(document.body, h_1.default(Stories, null));
    }));
});
define("serviceWorker", ["require", "exports", "@rex/f", "@rex/bot"], function (require, exports, f, bot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    f = __importStar(f);
    bot_1 = __importDefault(bot_1);
    if (f.not(bot_1.default)) {
        if (process.env.NODE_ENV === 'production') {
            if ('serviceWorker' in navigator) {
                navigator
                    .serviceWorker
                    .register('/sw.js')
                    .then(registration => console.log('SW registered: ', registration))
                    .catch(registrationError => console.log('SW registration failed: ', registrationError));
            }
        }
    }
});
define("index", ["require", "exports", "routers", "serviceWorker", "@rex/ga", "@rex/gtag", "@rex/gtm", "@rex/hotjar", "@rex/trackjs"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("features/hero/schema", [], {
    "color": "inverse",
    "description": "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories",
    "direction": "reverse",
    "thumbnails": [
        "/assets/features.mobile.jpg",
        "/assets/features.tablet.jpg",
        "/assets/features.desktop.jpg"
    ],
    "title": "Features"
});
define("features/hero/component", ["require", "exports", "@rex/h", "@rex/kit", "features/hero/schema", "./style.css"], function (require, exports, h_2, ui, schema_json_1, style_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_2 = __importStar(h_2);
    ui = __importStar(ui);
    schema_json_1 = __importDefault(schema_json_1);
    style_css_1 = __importDefault(style_css_1);
    exports.default = () => h_2.default(ui.Hero, Object.assign({}, schema_json_1.default),
        h_2.default(ui.Sources, Object.assign({ slot: 'figure' }, schema_json_1.default)),
        h_2.default(h_2.Fragment, { slot: 'caption' },
            h_2.default(ui.Heading, Object.assign({ className: style_css_1.default.hero__heading }, schema_json_1.default), schema_json_1.default.title),
            h_2.default(ui.P, Object.assign({ className: style_css_1.default.hero__p }, schema_json_1.default), schema_json_1.default.description)));
});
define("features/hero/index", ["require", "exports", "features/hero/component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_1).default; } });
});
define("features/feature/component", ["require", "exports", "@rex/h", "@rex/kit", "./style.css"], function (require, exports, h_3, ui, style_css_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_3 = __importStar(h_3);
    ui = __importStar(ui);
    style_css_2 = __importDefault(style_css_2);
    exports.default = (props, i) => h_3.default(ui.Feature, { className: style_css_2.default[`p${i}`] },
        h_3.default(ui.Sources, Object.assign({ slot: 'picture' }, props)),
        h_3.default(h_3.Fragment, { slot: 'caption' },
            h_3.default(ui.Heading, { level: '2', size: 'large', className: style_css_2.default.feature__heading }, props.title),
            h_3.default(ui.P, { className: style_css_2.default.feature__p }, props.description)));
});
define("features/feature/index", ["require", "exports", "features/feature/component"], function (require, exports, component_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_2).default; } });
});
define("features/schema", [], [
    {
        "description": "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen",
        "thumbnails": ["/assets/responsive.png"],
        "title": "100% Responsive"
    },
    {
        "description": "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go",
        "thumbnails": ["/assets/forever.png"],
        "title": "No Photo Upload Limit"
    },
    {
        "description": "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more",
        "thumbnails": ["/assets/bullhorn.png"],
        "title": "Available to Embed"
    },
    {
        "description": "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
        "thumbnails": ["/assets/domain.png"],
        "title": "Custom Domain"
    },
    {
        "description": "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list",
        "thumbnails": ["/assets/exposure.png"],
        "title": "Boost Your Exposure"
    },
    {
        "description": "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories",
        "thumbnails": ["/assets/image.png"],
        "title": "Drag & Drop Image"
    }
]);
define("features/component", ["require", "exports", "@rex/h", "@rex/kit", "features/hero/index", "features/feature/index", "features/schema", "./style.css"], function (require, exports, h_4, ui, hero_1, feature_1, schema_json_2, style_css_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_4 = __importStar(h_4);
    ui = __importStar(ui);
    hero_1 = __importDefault(hero_1);
    feature_1 = __importDefault(feature_1);
    schema_json_2 = __importDefault(schema_json_2);
    style_css_3 = __importDefault(style_css_3);
    exports.default = () => h_4.default("main", { className: style_css_3.default.features },
        h_4.default(ui.Header, null),
        h_4.default(hero_1.default, null),
        h_4.default("ul", { className: style_css_3.default.features__ul },
            h_4.default(h_4.Repeat, { iterator: schema_json_2.default, component: feature_1.default })),
        h_4.default(ui.Tarja, null),
        h_4.default(ui.Footer, null));
});
define("features/features", ["require", "exports", "@rex/h", "@rex/markup", "features/component"], function (require, exports, h_5, markup_1, component_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    markup_1 = __importDefault(markup_1);
    component_3 = __importDefault(component_3);
    let Features = class Features {
        get description() {
            return 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories';
        }
        get title() {
            return 'Features • Create and share your photo stories';
        }
    };
    Features = __decorate([
        h_5.paint(component_3.default),
        markup_1.default
    ], Features);
    exports.default = Features;
});
define("features/index", ["require", "exports", "features/features"], function (require, exports, features_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(features_1).default; } });
});
define("home/heros/hero", ["require", "exports", "@rex/h", "@rex/kit", "./style.css"], function (require, exports, h_6, ui, style_css_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_6 = __importStar(h_6);
    ui = __importStar(ui);
    style_css_4 = __importDefault(style_css_4);
    exports.default = (props) => h_6.default(ui.Hero, Object.assign({}, props),
        h_6.default(ui.Sources, Object.assign({ slot: 'figure' }, props)),
        h_6.default(h_6.Fragment, { slot: 'caption' },
            h_6.default(ui.Heading, Object.assign({ className: style_css_4.default.hero__heading }, props), props.title),
            h_6.default(ui.P, Object.assign({ className: style_css_4.default.hero__p }, props), props.description),
            h_6.default(ui.Link, Object.assign({ className: style_css_4.default.hero__link }, props), props.link)));
});
define("home/heros/schema", [], [
    {
        "color": "inverse",
        "description": "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others",
        "direction": "reverse",
        "icon": "arrow",
        "link": "Get in Invite",
        "thumbnails": [
            "/assets/create-and-share.mobile.jpg",
            "/assets/create-and-share.tablet.jpg",
            "/assets/create-and-share.desktop.jpg"
        ],
        "title": "Create and share your photo stories",
        "url": "/"
    },
    {
        "description": "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone",
        "icon": "arrow",
        "link": "Read Story",
        "thumbnails": [
            "/assets/beautiful-stories.mobile.jpg",
            "/assets/beautiful-stories.tablet.jpg",
            "/assets/beautiful-stories.desktop.jpg"
        ],
        "title": "Beautiful stories every time",
        "url": "/"
    },
    {
        "description": "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it",
        "direction": "reverse",
        "icon": "arrow",
        "link": "Read Story",
        "thumbnails": [
            "/assets/designed-for-everyone.mobile.jpg",
            "/assets/designed-for-everyone.tablet.jpg",
            "/assets/designed-for-everyone.desktop.jpg"
        ],
        "title": "Designed for everyone",
        "url": "/"
    }
]);
define("home/heros/component", ["require", "exports", "@rex/h", "home/heros/hero", "home/heros/schema"], function (require, exports, h_7, hero_2, schema_json_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_7 = __importStar(h_7);
    hero_2 = __importDefault(hero_2);
    schema_json_3 = __importDefault(schema_json_3);
    exports.default = () => h_7.default(h_7.Repeat, { iterator: schema_json_3.default, component: hero_2.default });
});
define("home/heros/index", ["require", "exports", "home/heros/component"], function (require, exports, component_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_4).default; } });
});
define("home/stories/schema", [], [
    {
        "author": "John Appleseed",
        "color": "inverse",
        "thumbnails": [
            "/assets/mountains.mobile.jpg",
            "/assets/mountains.tablet.jpg",
            "/assets/mountains.desktop.jpg"
        ],
        "title": "The Mountains",
        "href": "/"
    },
    {
        "author": "Benjamin Cruz",
        "color": "inverse",
        "thumbnails": [
            "/assets/cityscapes.mobile.jpg",
            "/assets/cityscapes.tablet.jpg",
            "/assets/cityscapes.desktop.jpg"
        ],
        "title": "Sunset Cityscapes",
        "href": "/"
    },
    {
        "author": "Alexei Borodin",
        "color": "inverse",
        "thumbnails": [
            "/assets/18-days-voyage.mobile.jpg",
            "/assets/18-days-voyage.tablet.jpg",
            "/assets/18-days-voyage.desktop.jpg"
        ],
        "title": "18 Days Voyage",
        "href": "/"
    },
    {
        "author": "Samantha Brooke",
        "color": "inverse",
        "thumbnails": [
            "/assets/architecturals.mobile.jpg",
            "/assets/architecturals.tablet.jpg",
            "/assets/architecturals.desktop.jpg"
        ],
        "title": "Architecturals",
        "href": "/"
    }
]);
define("home/stories/story", ["require", "exports", "@rex/h", "@rex/kit", "./style.css"], function (require, exports, h_8, ui, style_css_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_8 = __importStar(h_8);
    ui = __importStar(ui);
    style_css_5 = __importDefault(style_css_5);
    exports.default = (props) => h_8.default(ui.Story, null,
        h_8.default(ui.Sources, Object.assign({ slot: 'picture' }, props)),
        h_8.default(h_8.Fragment, { slot: 'caption' },
            h_8.default(ui.Heading, Object.assign({ level: '2' }, props), props.title),
            h_8.default(ui.P, Object.assign({}, props),
                "by ",
                props.author),
            h_8.default(ui.Link, Object.assign({ className: style_css_5.default.story__link, icon: 'arrow' }, props), "Read story")));
});
define("home/stories/component", ["require", "exports", "@rex/h", "home/stories/schema", "home/stories/story"], function (require, exports, h_9, schema_json_4, story_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_9 = __importStar(h_9);
    schema_json_4 = __importDefault(schema_json_4);
    story_1 = __importDefault(story_1);
    exports.default = () => h_9.default(h_9.Repeat, { iterator: schema_json_4.default, component: story_1.default });
});
define("home/stories/index", ["require", "exports", "home/stories/component"], function (require, exports, component_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_5).default; } });
});
define("home/features/feature", ["require", "exports", "@rex/h", "@rex/kit", "./style.css"], function (require, exports, h_10, ui, style_css_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_10 = __importStar(h_10);
    ui = __importStar(ui);
    style_css_6 = __importDefault(style_css_6);
    exports.default = (props, i) => h_10.default(ui.Feature, { className: style_css_6.default[`p${i}`] },
        h_10.default(ui.Sources, Object.assign({ slot: 'picture' }, props)),
        h_10.default(h_10.Fragment, { slot: 'caption' },
            h_10.default(ui.Heading, { level: '3', className: style_css_6.default.features__heading }, props.title),
            h_10.default(ui.P, { className: style_css_6.default.features__p }, props.description)));
});
define("home/features/schema", [], [
    {
        "description": "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen",
        "thumbnails": ["/assets/responsive.png"],
        "title": "100% Responsive"
    },
    {
        "description": "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go",
        "thumbnails": ["/assets/forever.png"],
        "title": "No Photo Upload Limit"
    },
    {
        "description": "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more",
        "thumbnails": ["/assets/bullhorn.png"],
        "title": "Available to Embed"
    }
]);
define("home/features/component", ["require", "exports", "@rex/h", "home/features/feature", "home/features/schema", "./style.css"], function (require, exports, h_11, feature_2, schema_json_5, style_css_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_11 = __importStar(h_11);
    feature_2 = __importDefault(feature_2);
    schema_json_5 = __importDefault(schema_json_5);
    style_css_7 = __importDefault(style_css_7);
    exports.default = () => h_11.default("ul", { className: style_css_7.default.features },
        h_11.default(h_11.Repeat, { iterator: schema_json_5.default, component: feature_2.default }));
});
define("home/features/index", ["require", "exports", "home/features/component"], function (require, exports, component_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_6).default; } });
});
define("home/component", ["require", "exports", "@rex/h", "@rex/kit", "home/heros/index", "home/stories/index", "home/features/index", "./style.css"], function (require, exports, h_12, ui, heros_1, stories_1, features_2, style_css_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_12 = __importDefault(h_12);
    ui = __importStar(ui);
    heros_1 = __importDefault(heros_1);
    stories_1 = __importDefault(stories_1);
    features_2 = __importDefault(features_2);
    style_css_8 = __importDefault(style_css_8);
    exports.default = () => h_12.default("main", { className: style_css_8.default.home },
        h_12.default(ui.Header, null),
        h_12.default(heros_1.default, null),
        h_12.default(stories_1.default, null),
        h_12.default(features_2.default, null),
        h_12.default(ui.Footer, null));
});
define("home/home", ["require", "exports", "@rex/h", "@rex/markup", "home/component"], function (require, exports, h_13, markup_2, component_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    markup_2 = __importDefault(markup_2);
    component_7 = __importDefault(component_7);
    let Home = class Home {
    };
    Home = __decorate([
        h_13.paint(component_7.default),
        markup_2.default
    ], Home);
    exports.default = Home;
});
define("home/index", ["require", "exports", "home/home"], function (require, exports, home_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
});
define("pricing/hero/schema", [], {
    "color": "inverse",
    "description": "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos",
    "direction": "reverse",
    "thumbnails": [
        "/assets/pricing.mobile.jpg",
        "/assets/pricing.tablet.jpg",
        "/assets/pricing.desktop.jpg"
    ],
    "title": "Pricing"
});
define("pricing/hero/component", ["require", "exports", "@rex/h", "@rex/kit", "pricing/hero/schema", "./style.css"], function (require, exports, h_14, ui, schema_json_6, style_css_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_14 = __importStar(h_14);
    ui = __importStar(ui);
    schema_json_6 = __importDefault(schema_json_6);
    style_css_9 = __importDefault(style_css_9);
    exports.default = () => h_14.default(ui.Hero, Object.assign({}, schema_json_6.default),
        h_14.default(ui.Sources, Object.assign({ slot: 'figure' }, schema_json_6.default)),
        h_14.default(h_14.Fragment, { slot: 'caption' },
            h_14.default(ui.Heading, Object.assign({ className: style_css_9.default.hero__heading }, schema_json_6.default), schema_json_6.default.title),
            h_14.default(ui.P, Object.assign({ className: style_css_9.default.hero__p }, schema_json_6.default), schema_json_6.default.description)));
});
define("pricing/hero/index", ["require", "exports", "pricing/hero/component"], function (require, exports, component_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_8).default; } });
});
define("pricing/card/component", ["require", "exports", "@rex/h", "./style.css"], function (require, exports, h_15, style_css_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_15 = __importDefault(h_15);
    style_css_10 = __importDefault(style_css_10);
    exports.default = (props, children) => h_15.default("article", { className: [style_css_10.default.card, style_css_10.default[props.type]] },
        h_15.default("header", { className: style_css_10.default.card__header },
            h_15.default("h4", { className: style_css_10.default.card__title }, props.title),
            h_15.default("p", { className: style_css_10.default.card__text }, children)),
        h_15.default("p", { className: style_css_10.default.card__price },
            h_15.default("data", { className: style_css_10.default.card__value, value: props.price },
                "$ ",
                props.price),
            " per month"),
        h_15.default("button", { className: style_css_10.default.card__button }, "Pick Plan"));
});
define("pricing/card/index", ["require", "exports", "pricing/card/component"], function (require, exports, component_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_9).default; } });
});
define("pricing/table/component", ["require", "exports", "@rex/h", "./style.css"], function (require, exports, h_16, style_css_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_16 = __importStar(h_16);
    style_css_11 = __importDefault(style_css_11);
    exports.default = ({ features }) => h_16.default("table", { className: style_css_11.default.table },
        h_16.default("thead", { className: style_css_11.default.table__head },
            h_16.default("tr", null,
                h_16.default("th", { colSpan: '3' }, "The Features"))),
        h_16.default("tbody", { className: style_css_11.default.table__body }, features.map((item) => h_16.default(h_16.Fragment, null,
            h_16.default("tr", null,
                h_16.default("th", { colSpan: '3' }, item.name)),
            h_16.default("tr", null, item.plan.map((plan) => h_16.default("td", null,
                plan.name,
                h_16.default("span", { className: [style_css_11.default.checked, style_css_11.default[plan.status]] }, "checked"))))))));
});
define("pricing/table/index", ["require", "exports", "pricing/table/component"], function (require, exports, component_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_10).default; } });
});
define("pricing/switch/component", ["require", "exports", "@rex/h", "./style.css"], function (require, exports, h_17, style_css_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_17 = __importDefault(h_17);
    style_css_12 = __importDefault(style_css_12);
    exports.default = (props) => h_17.default("article", { className: style_css_12.default.switch },
        h_17.default("data", { value: 'Monthly', className: [style_css_12.default.switch__text, style_css_12.default.activated] }, "Monthly"),
        h_17.default("label", { className: [style_css_12.default.switch__label, props.className] },
            h_17.default("input", { className: style_css_12.default.switch__check, type: 'checkbox' }),
            h_17.default("span", { className: style_css_12.default.switch__slider })),
        h_17.default("data", { value: 'Yearly', className: style_css_12.default.switch__text }, "Yearly"));
});
define("pricing/switch/index", ["require", "exports", "pricing/switch/component"], function (require, exports, component_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_11).default; } });
});
define("pricing/schema", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        {
            name: 'Unlimited Story Posting',
            plan: [
                { name: 'Basic', status: 'active' },
                { name: 'Pro', status: 'active' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Unlimited Photo Upload',
            plan: [
                { name: 'Basic', status: 'active' },
                { name: 'Pro', status: 'active' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Embedding Custom Content',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: 'active' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Customize Metadata',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: 'active' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Advanced Metrics',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: '' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Photo Downloads',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: '' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Search Engine Indexing',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: '' },
                { name: 'Business', status: 'active' }
            ]
        },
        {
            name: 'Custom Analytics',
            plan: [
                { name: 'Basic', status: '' },
                { name: 'Pro', status: '' },
                { name: 'Business', status: 'active' }
            ]
        }
    ];
});
define("pricing/component", ["require", "exports", "@rex/h", "@rex/kit", "pricing/hero/index", "pricing/card/index", "pricing/table/index", "pricing/switch/index", "./style.css", "pricing/schema"], function (require, exports, h_18, ui, hero_3, card_1, table_1, switch_1, style_css_13, schema_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_18 = __importDefault(h_18);
    ui = __importStar(ui);
    hero_3 = __importDefault(hero_3);
    card_1 = __importDefault(card_1);
    table_1 = __importDefault(table_1);
    switch_1 = __importDefault(switch_1);
    style_css_13 = __importDefault(style_css_13);
    schema_1 = __importDefault(schema_1);
    exports.default = () => h_18.default("main", { className: style_css_13.default.pricing },
        h_18.default(ui.Header, null),
        h_18.default(hero_3.default, null),
        h_18.default("section", null,
            h_18.default(switch_1.default, null),
            h_18.default(card_1.default, { title: 'Basic', price: '19.00' }, "Includes basic usage of our platform. Recommended for new and aspiring photographers."),
            h_18.default(card_1.default, { title: 'Pro', price: '39.00', type: 'negative' }, "More advanced features available. Recommended for photography veterans and professionals."),
            h_18.default(card_1.default, { title: 'Business', price: '99.00' }, "Additional features available such as more detailed metrics. Recommended for business owners."),
            h_18.default(table_1.default, { features: schema_1.default })),
        h_18.default(ui.Tarja, null),
        h_18.default(ui.Footer, null));
});
define("pricing/pricing", ["require", "exports", "@rex/h", "@rex/markup", "pricing/component"], function (require, exports, h_19, markup_3, component_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    markup_3 = __importDefault(markup_3);
    component_12 = __importDefault(component_12);
    let Pricing = class Pricing {
        get description() {
            return 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos';
        }
        get title() {
            return 'Pricing • Create and share your photo stories';
        }
    };
    Pricing = __decorate([
        h_19.paint(component_12.default),
        markup_3.default
    ], Pricing);
    exports.default = Pricing;
});
define("pricing/index", ["require", "exports", "pricing/pricing"], function (require, exports, pricing_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(pricing_1).default; } });
});
define("stories/hero/schema", [], {
    "author": "John Appleseed",
    "color": "inverse",
    "date": "March 2nd 2020",
    "description": "The dissected plateau area, while not actually made up of geological mountains, is popularly called \"mountains\", especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged",
    "icon": "arrow",
    "link": "Read Story",
    "thumbnails": [
        "/assets/moon-of-appalacia.mobile.jpg",
        "/assets/moon-of-appalacia.tablet.jpg",
        "/assets/moon-of-appalacia.desktop.jpg"
    ],
    "subtitle": "Last month’s featured story",
    "title": "Hazy full moon of appalachia",
    "href": "/"
});
define("stories/hero/component", ["require", "exports", "@rex/h", "@rex/kit", "stories/hero/schema", "./style.css"], function (require, exports, h_20, ui, schema_json_7, style_css_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_20 = __importStar(h_20);
    ui = __importStar(ui);
    schema_json_7 = __importDefault(schema_json_7);
    style_css_14 = __importDefault(style_css_14);
    exports.default = () => h_20.default(ui.Hero, { color: 'inverse', direction: 'reverse' },
        h_20.default(ui.Sources, Object.assign({ slot: 'figure' }, schema_json_7.default)),
        h_20.default(h_20.Fragment, { slot: 'caption' },
            h_20.default("hgroup", null,
                h_20.default(ui.Heading, Object.assign({ level: '2', className: style_css_14.default.hero__h2, size: 'small' }, schema_json_7.default), schema_json_7.default.subtitle),
                h_20.default(ui.Heading, Object.assign({ level: '1', className: style_css_14.default.hero__h1 }, schema_json_7.default), schema_json_7.default.title)),
            h_20.default(ui.P, Object.assign({ className: style_css_14.default.hero__p }, schema_json_7.default),
                h_20.default("date", null, schema_json_7.default.date),
                " by ",
                schema_json_7.default.author),
            h_20.default(ui.P, Object.assign({ className: style_css_14.default.hero__p }, schema_json_7.default), schema_json_7.default.description),
            h_20.default(ui.Link, Object.assign({ className: style_css_14.default.hero__linkButton }, schema_json_7.default), schema_json_7.default.link)));
});
define("stories/hero/index", ["require", "exports", "stories/hero/component"], function (require, exports, component_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_13).default; } });
});
define("stories/schema", [], [
    {
        "author": "John Appleseed",
        "color": "inverse",
        "date": "April 16th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/mountains.mobile.jpg",
            "/assets/mountains.tablet.jpg",
            "/assets/mountains.desktop.jpg"
        ],
        "title": "The Mountains",
        "href": "/"
    },
    {
        "author": "Benjamin Cruz",
        "color": "inverse",
        "date": "April 14th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/cityscapes.mobile.jpg",
            "/assets/cityscapes.tablet.jpg",
            "/assets/cityscapes.desktop.jpg"
        ],
        "title": "Sunset Cityscapes",
        "href": "/"
    },
    {
        "author": "Alexei Borodin",
        "color": "inverse",
        "date": "April 11th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/18-days-voyage.mobile.jpg",
            "/assets/18-days-voyage.tablet.jpg",
            "/assets/18-days-voyage.desktop.jpg"
        ],
        "title": "18 Days Voyage",
        "href": "/"
    },
    {
        "author": "Samantha Brooke",
        "color": "inverse",
        "date": "April 9th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/architecturals.mobile.jpg",
            "/assets/architecturals.tablet.jpg",
            "/assets/architecturals.desktop.jpg"
        ],
        "title": "Architecturals",
        "href": "/"
    },
    {
        "author": "Timothy Wagner",
        "color": "inverse",
        "date": "April 7th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/world-tour.mobile.jpg",
            "/assets/world-tour.tablet.jpg",
            "/assets/world-tour.desktop.jpg"
        ],
        "title": "World Tour 2019",
        "href": "/"
    },
    {
        "author": "William Malcolm",
        "color": "inverse",
        "date": "April 6th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/unforeseen-corners.mobile.jpg",
            "/assets/unforeseen-corners.tablet.jpg",
            "/assets/unforeseen-corners.desktop.jpg"
        ],
        "title": "Unforeseen Corners",
        "href": "/"
    },
    {
        "author": "Tim Hillenburg",
        "color": "inverse",
        "date": "March 29th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/king-on-africa.mobile.jpg",
            "/assets/king-on-africa.tablet.jpg",
            "/assets/king-on-africa.desktop.jpg"
        ],
        "title": "King on Africa: Part II",
        "href": "/"
    },
    {
        "author": "Felicia Rourke",
        "color": "inverse",
        "date": "March 21th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/trip-to-nowhere.mobile.jpg",
            "/assets/trip-to-nowhere.tablet.jpg",
            "/assets/trip-to-nowhere.desktop.jpg"
        ],
        "title": "The Trip to Nowhere",
        "href": "/"
    },
    {
        "author": "Mohammed Abdul",
        "color": "inverse",
        "date": "March 19th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/rage-of-the-sea.mobile.jpg",
            "/assets/rage-of-the-sea.tablet.jpg",
            "/assets/rage-of-the-sea.desktop.jpg"
        ],
        "title": "Rage of The Sea",
        "href": "/"
    },
    {
        "author": "Michelle",
        "color": "inverse",
        "date": "March 16th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/running-free.mobile.jpg",
            "/assets/running-free.tablet.jpg",
            "/assets/running-free.desktop.jpg"
        ],
        "title": "Running Free",
        "href": "/"
    },
    {
        "author": "Lamarr Wilson",
        "color": "inverse",
        "date": "March 11th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/behind-the-waves.mobile.jpg",
            "/assets/behind-the-waves.tablet.jpg",
            "/assets/behind-the-waves.desktop.jpg"
        ],
        "title": "Behind the Waves",
        "href": "/"
    },
    {
        "author": "Samantha Brooke",
        "color": "inverse",
        "date": "March 9th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/calm-waters.mobile.jpg",
            "/assets/calm-waters.tablet.jpg",
            "/assets/calm-waters.desktop.jpg"
        ],
        "title": "Calm Waters",
        "href": "/"
    },
    {
        "author": "Benjamin Cruz",
        "color": "inverse",
        "date": "March 5th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/milky-way.mobile.jpg",
            "/assets/milky-way.tablet.jpg",
            "/assets/milky-way.desktop.jpg"
        ],
        "title": "The Milky Way",
        "href": "/"
    },
    {
        "author": "Mohammed Abdul",
        "color": "inverse",
        "date": "March 4th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/dark-forest.mobile.jpg",
            "/assets/dark-forest.tablet.jpg",
            "/assets/dark-forest.desktop.jpg"
        ],
        "title": "Night at The Dark Forest",
        "href": "/"
    },
    {
        "author": "Michelle",
        "color": "inverse",
        "date": "March 1th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/somwarpet.mobile.jpg",
            "/assets/somwarpet.tablet.jpg",
            "/assets/somwarpet.desktop.jpg"
        ],
        "title": "Somwarpet’s Beauty",
        "href": "/"
    },
    {
        "author": "William Malcolm",
        "color": "inverse",
        "date": "February 25th 2020",
        "icon": "arrow",
        "link": "Read story",
        "thumbnails": [
            "/assets/land-of-dreams.mobile.jpg",
            "/assets/land-of-dreams.tablet.jpg",
            "/assets/land-of-dreams.desktop.jpg"
        ],
        "title": "Land of Dreams",
        "href": "/"
    }
]);
define("stories/story/component", ["require", "exports", "@rex/h", "@rex/kit", "./style.css"], function (require, exports, h_21, ui, style_css_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_21 = __importStar(h_21);
    ui = __importStar(ui);
    style_css_15 = __importDefault(style_css_15);
    exports.default = (props) => h_21.default(ui.Story, null,
        h_21.default(ui.Sources, Object.assign({ slot: 'picture' }, props)),
        h_21.default(h_21.Fragment, { slot: 'caption' },
            h_21.default("data", { className: style_css_15.default.story__data, value: props.date }, props.date),
            h_21.default(ui.Heading, Object.assign({ level: '2' }, props), props.title),
            h_21.default(ui.P, Object.assign({}, props),
                "by ",
                props.author),
            h_21.default(ui.Link, Object.assign({ className: style_css_15.default.story__link }, props), props.link)));
});
define("stories/story/index", ["require", "exports", "stories/story/component"], function (require, exports, component_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_14).default; } });
});
define("stories/component", ["require", "exports", "@rex/h", "@rex/kit", "stories/hero/index", "stories/schema", "stories/story/index", "./style.css"], function (require, exports, h_22, ui, hero_4, schema_json_8, story_2, style_css_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    h_22 = __importStar(h_22);
    ui = __importStar(ui);
    hero_4 = __importDefault(hero_4);
    schema_json_8 = __importDefault(schema_json_8);
    story_2 = __importDefault(story_2);
    style_css_16 = __importDefault(style_css_16);
    exports.default = () => h_22.default("main", { className: style_css_16.default.stories },
        h_22.default(ui.Header, null),
        h_22.default(hero_4.default, null),
        h_22.default(h_22.Repeat, { iterator: schema_json_8.default, component: story_2.default }),
        h_22.default(ui.Footer, null));
});
define("stories/stories", ["require", "exports", "@rex/h", "@rex/markup", "stories/component"], function (require, exports, h_23, markup_4, component_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    markup_4 = __importDefault(markup_4);
    component_15 = __importDefault(component_15);
    let Stories = class Stories {
        get title() {
            return 'Stories • Create and share your photo stories';
        }
    };
    Stories = __decorate([
        h_23.paint(component_15.default),
        markup_4.default
    ], Stories);
    exports.default = Stories;
});
define("stories/index", ["require", "exports", "stories/stories"], function (require, exports, stories_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(stories_2).default; } });
});
