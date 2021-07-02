import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';

// canvas
const canvas = document.querySelector('.webgl');

// scene
let scene;
scene = new THREE.Scene();

// camera
let camera;
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
scene.add(camera);

// renderer
let renderer;
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

// orbit
const orbit = new OrbitControls(camera, renderer.domElement);

// earth
const earthGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('./pic/day.jpg')
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// cloud
const cloudGeometry = new THREE.SphereGeometry(0.72, 32, 32);
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./pic/cloud.png'),
    transparent: true
});
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

// stars
const starGeometry = new THREE.SphereGeometry(12, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('./pic/stars.jpg'),
    side: THREE.BackSide
});
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

// rotate
const rotate = () => {
    requestAnimationFrame(rotate);
    starMesh.rotation.y -= 0.00023;
    earthMesh.rotation.y -= 0.00046;
    cloudMesh.rotation.y -= 0.00046;
    orbit.update();
    render();
};

// rendering
const render = () => {
    renderer.render(scene, camera);
}

rotate();