import { useEffect, useRef } from "react";

const SVGComponent = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg) return;

    const pointsArray = { one: [] };
    const pathArr = [];
    let x1 = 20;
    let x2 = 210;
    let y1 = 50;
    let y2 = 150;
    const p = [];

    for (let i = 0; i < 6; i++) { 
      if (i === 0) {
        p.push(`Q${-x1 * 15},${y1} ${x2 - 220},${y2 + 10}`);
        y1 += 300;
        y2 += 400;
      } else if (i % 2 === 0) {
        p.push(`Q${-x1 * 30},${y1} ${x2 - 70},${y2 + 60}`);
        y1 += 500;
        y2 += 500;
      } else if (i % 2 === 1) {
        p.push(`Q${x1 * 30},${y1} ${-x2 + 120},${y2 + 30}`);
        y1 += 500;
        y2 += 500;
      }

      pointsArray.one.push(p[i]);
    }

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("fill", "none");
    path2.setAttribute("stroke", "#ba6b3f"); 
    path2.setAttribute("stroke-width", "20px"); 
    path2.setAttribute("id", "path2");
    path2.setAttribute(
      "d",
      `M10,-150 ${pointsArray.one.map((p) => p).join(" ")}`
    );

    pathArr.push(path2);

    pathArr.forEach((path) => svg.appendChild(path));

    console.log(pointsArray);
  }, []);

  return (
    <svg
      id="svg"
      ref={svgRef}
      viewBox="-400 100 900 800"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "rotate(0deg)",
        position: "relative",
        overflow: "auto",
      }}
    />
  );
};

export default SVGComponent;

