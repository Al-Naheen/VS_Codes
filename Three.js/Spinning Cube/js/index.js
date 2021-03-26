let scene, camera, renderer, cube;


const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        .1,
        1000
    );
    camera.position.set(110, 110, 250);
    camera.lookAt(scene.position);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);



    const geometry = new THREE.BoxGeometry(562, 562, 562, 1, 1, 1);


    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    // Add texture - 
    // const texture = new THREE.TextureLoader().load('https://i.gifer.com/4Sw5.gif');

    // Create material with texture
    // const material = new THREE.MeshBasicMaterial({ map: texture });


    const materials = [
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-1-hi.png')
        }),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-2-hi.png')
        }),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-3-hi.png')
        }),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-4-hi.png')
        }),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-5-hi.png')
        }),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('/Content/Images/dice-6-hi.png')
        })
    ];
    cube = new THREE.Mesh(geometry, materials, new THREE.MeshFaceMAterial());
    scene.add(cube);

    camera.position.z = 5;
}
const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;

    renderer.render(scene, camera);
};
const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);


init();
animate();