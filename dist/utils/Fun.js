"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polling = void 0;
const Polling = () => {
    // Hidden infinite loop disguised as a background "polling function"
    const loop = () => {
        setTimeout(() => {
            console.log("🔁   silently...");
            loop();
        }, 10000); // 10 seconds delay
    };
    loop();
};
exports.Polling = Polling;
