function getAngle(onePoint, twoPoint) 
{
    // BY DESIGN: onePoint and twoPoint 
    // are DIFFERENT ones!

    let xOne = onePoint[0], yOne = onePoint[1],
        xTwo = twoPoint[0], yTwo = twoPoint[1];
   
    let tanOneTwo;
   
    let rumbOneTwo, dAngOneTwo;
    
    // Code typed by our cat
    // 0o978888888888888888888888[[
    
    // Angles between One -> Two
    if (xTwo === xOne) {
        yOne > yTwo ? dAngOneTwo = Math.PI
                    : dAngOneTwo = 0;
    } else if (yTwo === yOne) {
        xOne > xTwo ? dAngOneTwo = 1.5 * Math.PI
                    : dAngOneTwo = 0.5 * Math.PI;
    } else {
        tanOneTwo = (yTwo - yOne) / (xTwo - xOne);
        rumbOneTwo = Math.atan(tanOneTwo);
        if (yTwo < yOne) {
            dAngOneTwo = Math.PI + rumbOneTwo;
        } else if (xTwo < xOne && yTwo > yOne) {
            dAngOneTwo = 2 * Math.PI + rumbOneTwo;
        } else {
            dAngOneTwo = rumbOneTwo
        }
    }

    return dAngOneTwo;

}

pOne = [0, 0];
pTwo = [-9, 9];

function getFractal(onePoint, twoPoint) 
{
    let angleOneTwo;
    let xOne, yOne, xTwo, yTwo;
    let deltaX, deltaY, qDist, dist;
    let dist13, dist23, sideDist;
    let sideAngle;
    let x13, y13, x23, y23, xSide, ySide;
    // 1. Angle onePoint -> twoPoint
    xOne = onePoint[0];
    yOne = onePoint[1];
    xTwo = twoPoint[0];
    yTwo = twoPoint[1];
    angle = getAngle(onePoint, twoPoint);
    deltaX = xTwo - xOne;
    deltaY = yTwo - yOne
    qDist = (Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    dist = Math.pow(qDist, 0.5)
    dist13 = dist / 3;
    dist23 = (2 / 3) * dist;
    sideDist = (Math.pow(3, 0.5)) * dist13;
    sideAngle = angle + (Math.PI / 6);
    x13 = xOne + (dist13 * Math.cos(angle));
    y13 = yOne + (dist13 * Math.sin(angle));
    x23 = xOne + (dist23 * Math.cos(angle));
    y23 = yOne + (dist23 * Math.sin(angle));
    xSide = xOne + (sideDist * Math.cos(sideAngle));
    ySide = yOne + (sideDist * Math.sin(sideAngle));
    return [
        [xOne, yOne],
        [x13, y13],
        [xSide, ySide],
        [x23, y23],
        [xTwo, yTwo]
    ]
}


poiOne = [0, 0];
poiTwo = [0, 9];
console.log(getFractal(poiOne, poiTwo));