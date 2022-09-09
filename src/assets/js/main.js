// Polyfill
import "intersection-observer";
import objectFitImages from "object-fit-images";
import closetPolyfill from "./lib/closet.polyfill";
objectFitImages();
closetPolyfill();

// Libraly
import Loading from "./lib/Loading";
import Toggle from "./lib/Toggle";
import { inview } from "./lib/inview";
import ScrollObserver from "./lib/ScrollObserver";

new Loading();
new Toggle(".js-button-hamburger");
new ScrollObserver(".c-inview", inview);
