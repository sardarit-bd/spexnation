import getAbsoluteLensValue from "./getAbsoluteLensValue";

const disableAndRecommandedLogic = (lens) => {


    let disables = [];
    let recommanded = null;


    const rightSph = getAbsoluteLensValue(lens?.sph?.rightSph);
    const leftSph = getAbsoluteLensValue(lens?.sph?.leftSph);
    const rightAdd = getAbsoluteLensValue(lens?.add?.rightAdd);
    const leftAdd = getAbsoluteLensValue(lens?.add?.leftAdd);
    const rightCyl = getAbsoluteLensValue(lens?.cyl?.rightCyl);
    const leftCyl = getAbsoluteLensValue(lens?.cyl?.leftCyl);


    // sphere and add calculation is here
    const rightSphAndAdd = rightSph + rightAdd;
    const leftSphAndAdd = leftSph + leftAdd;



    // effective sphere calculation is here
    const EffectiveSphereRight = lens?.LenseUseCase == "distance" ? rightSph : rightSphAndAdd;
    const EffectiveSphereLeft = lens?.LenseUseCase == "distance" ? leftSph : leftSphAndAdd;



    // final sphere and cylinder
    const s = Math.max(EffectiveSphereRight, EffectiveSphereLeft);
    const c = Math.max(rightCyl, leftCyl);


    // disable logic is here
    if (s > Number("6.50")) {
        disables = ['standard', '1.60'];
    } else if (s > Number("5.00")) {
        disables = ['standard'];
    } else if (c > Number("3.00")) {
        disables = ['standard'];
    } else {
        disables = [];
    }



    //recommended logic is here
    if (s <= Number("3.50")) {
        if (disables.includes('standard')) {
            if (c > Number("3.00")) {
                recommanded = '1.60';
            }
        } else {
            recommanded = 'standard';
        }
    } else if (s > Number("3.50") && s <= Number("5.00")) {
        recommanded = '1.60';
    } else if (s > Number("5.00")) {
        recommanded = '1.67';
    } else {
        recommanded = null;
    }



    // final return here
    return { disables, recommanded };
}

export default disableAndRecommandedLogic;