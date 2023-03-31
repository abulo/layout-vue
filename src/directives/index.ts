import { App } from "vue";
import copy from "@/directives/modules/copy";
import waterMarker from "@/directives/modules/waterMarker";
import draggable from "@/directives/modules/draggable";
import debounce from "@/directives/modules/debounce";
import throttle from "@/directives/modules/throttle";
import longpress from "@/directives/modules/longpress";

const directivesList: any = {
	// Custom directives
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress
};

const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach(key => {
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
