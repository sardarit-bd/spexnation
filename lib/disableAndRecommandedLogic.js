const disableAndRecommandedLogic = (lens) => {


    let disables = [];
    let recommanded = null;



    // effective sphere calculation is here
    const EffectiveSphereRight = lens?.LenseUseCase == "distance" ? Number(lens?.sph?.rightSph) : Number(lens?.sph?.rightSph) + Number(lens?.add?.rightAdd);

    const EffectiveSphereLeft = lens?.LenseUseCase == "distance" ? Number(lens?.sph?.leftSph) : Number(lens?.sph?.leftSph) + Number(lens?.add?.leftAdd);



    // final sphere and cylinder
    const s = Math.max(EffectiveSphereRight, EffectiveSphereLeft);
    const c = Math.max(Number(lens?.cyl?.rightCyl), Number(lens?.cyl?.leftCyl));



    console.log("Spahere: " + s);
    console.log("Cylinder: " + c);


    // disable logic is here
    if (s > Number("5.00")) {
        disables = ['standard'];
    } else if (s > Number("6.50")) {
        disables = ['standard', '1.60'];
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