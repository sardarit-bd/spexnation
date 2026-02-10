const disableAndRecommandedLogic = (lens) => {


    let disables = [];
    let recommanded = null;



    // effective sphere calculation is here
    const EffectiveSphereRight = lens?.LenseUseCase == "distance" ? lens?.sph?.rightSph : lens?.sph?.rightSph + lens?.add?.rightAdd;

    const EffectiveSphereLeft = lens?.LenseUseCase == "distance" ? lens?.sph?.leftSph : lens?.sph?.leftSph + lens?.add?.leftAdd;



    // final sphere and cylinder
    const s = Math.max(EffectiveSphereRight, EffectiveSphereLeft);
    const c = Math.max(lens?.cyl?.rightCyl, lens?.cyl?.leftCyl);



    // disable logic is here
    if (s > "5.00") {
        disables = ['standard'];
    } else if (s > "6.50") {
        disables = ['standard', '1.60'];
    } else if (c > "3.00") {
        disables = ['standard'];
    } else {
        disables = [];
    }



    //recommended logic is here
    if (s < "3.50") {
        if (disables.includes('standard')) {
            if (c > "3.00") {
                recommanded = '1.60';
            }
        } else {
            recommanded = 'standard';
        }
    } else if (s < "3.50" && s >= "5.00") {
        recommanded = '1.60';
    } else if (s >= "5.00") {
        recommanded = '1.67';
    } else {
        recommanded = null;
    }



    // final return here
    return { disables, recommanded };
}

export default disableAndRecommandedLogic;