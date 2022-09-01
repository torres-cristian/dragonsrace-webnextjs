import { useEffect } from "react";
import { getMultiPathSVGCode } from "lindsvg"

export default function Thunders() {
    useEffect(()=>{
        render();
    }, [])
    return <div id="thunders">
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <filter id="glow">
                <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="skyblue"/>
            </filter>
            </defs>
        </svg>
    </div>
}

function render() {
    var header = document.getElementById("thunders")
    // L-system parameters
    let lsParams = {
        axiom: "FYX",
        rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F+F+F]"
        },
        alpha: 170 * Math.PI / 180,
        theta: 22 * Math.PI / 180,
        iterations: 4,
        step: 1
    };

    // Output SVG parameters
    let svgParams = {
        width: 615,
        height: 755,
        pathAttributes: {
        stroke: "#dedeff",
        "stroke-width": ["4", "2", "1"],
        opacity: ["1", "0.6", "0.5", "0.2"],
        style: "filter: url(#glow)"
        }
    };
    // Get ready-to-render L-system’s SVG code as a string...
    let svgCode = getMultiPathSVGCode(lsParams, svgParams);
    header.insertAdjacentHTML("beforeend", `<div id="sky">${svgCode}</div>`);
}