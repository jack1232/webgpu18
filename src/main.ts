import { CreateShapeWithLight } from './light';
import { LightInputs } from './shaders';
import { CubeData } from './vertex_data';
import $ from 'jquery';

const data = CubeData();
let li:LightInputs = {};
let isAnimation = true;
CreateShapeWithLight(data.positions, data.normals, li, isAnimation);

$('#id-radio input:radio').on('click', function(){
    let val = $('input[name="options"]:checked').val();
    if(val === 'animation') isAnimation = true;
    else isAnimation = false;
    CreateShapeWithLight(data.positions, data.normals, li, isAnimation);
});

$('#btn-redraw').on('click', function(){
    li.color = $('#id-color').val()?.toString();
    li.isPhong = $('#id-isphong').val()?.toString();
    li.ambientIntensity = $('#id-ambient').val()?.toString();
    li.diffuseIntensity = $('#id-diffuse').val()?.toString();
    li.specularIntensity= $('#id-specular').val()?.toString();
    li.shininess= $('#id-shininess').val()?.toString()!;
    li.specularColor = $('#id-scolor').val()?.toString();
    CreateShapeWithLight(data.positions, data.normals, li, isAnimation);
});