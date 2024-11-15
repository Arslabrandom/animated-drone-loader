// VARIABLES DEFINATION **START**

let motor_1 = document.querySelector('#prop1');
let motor_2 = document.querySelector('#prop2');
let motor_3 = document.querySelector('#prop3');
let motor_4 = document.querySelector('#prop4');
let motor_1_range = document.querySelector('#r1');
let motor_2_range = document.querySelector('#r2');
let motor_3_range = document.querySelector('#r3');
let motor_4_range = document.querySelector('#r4');

let range = document.querySelectorAll('.range');

let range_1_display = document.querySelector('#r1d');
let range_2_display = document.querySelector('#r2d');
let range_3_display = document.querySelector('#r3d');
let range_4_display = document.querySelector('#r4d');

// VARIABLES DEFINATION **END**

// ADDING LISTENERS FOR RANGE AND DISPLAY THE VALUE TO THE LABELS

Array.from(range).forEach((bar) => {
    bar.addEventListener('input', ()=> {
        range_1_display.innerHTML = motor_1_range.value;
        range_2_display.innerHTML = motor_2_range.value;
        range_3_display.innerHTML = motor_3_range.value;
        range_4_display.innerHTML = motor_4_range.value;
        controlspeed();  // PUT THE RANGE VALUE TO THE PROPS ROTATION SPEED
    })
});

function controlspeed() {
    let val1 = motor_1_range.value;
    let val2 = motor_2_range.value;
    let val3 = motor_3_range.value;
    let val4 = motor_4_range.value;

    let ms1 = val1*10;
    let ms2 = val2*10;
    let ms3 = val3*10;
    let ms4 = val4*10;

    let rotation_speed_cw_motor1 = `r-cw ${ms1}ms linear infinite`;
    let rotation_speed_ccw_motor2 = `r-ccw ${ms2}ms linear infinite`;
    let rotation_speed_ccw_motor3 = `r-ccw ${ms3}ms linear infinite`;
    let rotation_speed_cw_motor4 = `r-cw ${ms4}ms linear infinite`;

    motor_1.style.animation = rotation_speed_cw_motor1;
    motor_4.style.animation = rotation_speed_cw_motor4;
    motor_2.style.animation = rotation_speed_ccw_motor2;
    motor_3.style.animation = rotation_speed_ccw_motor3;
}