function solve(input) {


    function processChung(targetThickness, currentThickness) {

        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = 0;

        let lastOperation = '';

        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness !== targetThickness) {
            if (currentThickness / 4 >= targetThickness) {
                currentThickness /= 4;
                cut++;
                if (lastOperation !== "cut" && lastOperation !== "") {
                    currentThickness = Math.floor(currentThickness);
                }
                lastOperation = "cut";

            } else if (currentThickness * 0.8 >= targetThickness) {
                currentThickness *= 0.8;
                lap++;
                if (lastOperation !== "lap" && lastOperation !== "") {
                    currentThickness = Math.floor(currentThickness);
                }
                lastOperation = "lap";
            } else if (currentThickness - 20 >= targetThickness) {
                currentThickness -= 20;
                grind++;
                if (lastOperation !== "grind" && lastOperation !== "") {
                    currentThickness = Math.floor(currentThickness);
                }
                lastOperation = "grind";
            } else if (currentThickness - 2 >= targetThickness - 1) {
                currentThickness -= 2;
                etch++;
                if (lastOperation !== "etch" && lastOperation !== "") {
                    currentThickness = Math.floor(currentThickness);
                }
                lastOperation = "etch";
            } else {
                currentThickness++;
                xRay++;
                if (lastOperation !== "xRay" && lastOperation !== "") {
                    currentThickness = Math.floor(currentThickness);
                }
                lastOperation = "xRay";
            }
        }
        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log("Transporting and washing");
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log("Transporting and washing");
        }
        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log("Transporting and washing");
        }
        if (etch > 0) {
            console.log(`Etch x${etch}`);
            console.log("Transporting and washing");
        }
        if (xRay > 0) {
            console.log(`X-ray x${xRay}`);
        }

        console.log(`Finished crystal ${targetThickness} microns`);

    }


    for (let i = 1; i < input.length; i++) {
        let currentThickness = Number(input[i]);
        processChung(Number(input[0]), currentThickness);
    }
}

solve([1000, 4000, 8100]);