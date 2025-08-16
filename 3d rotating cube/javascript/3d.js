let rots = [ 
  { ry: 0,   rx: 0  }, // 1
  { ry: 90,  rx: 0  }, // 2
  { ry: 180, rx: 0  }, // 3
  { ry: 270, rx: 0  }, // 4
  { ry: 0,   rx: 90 }, // 5
  { ry: 0,   rx:-90 }  // 6
];

gsap.set(".face", { // apply transform rotations to each face of the cube
  rotateY: (i) => rots[i].ry,
  rotateX: (i) => rots[i].rx,
  transformOrigin: "50% 50% -150px",
  z: 150,
});

gsap.timeline({ repeat: -1, defaults: { duration: 1.5, ease: "expo.inOut" } })
    .to(cube, { rotateX: 0,  rotateY: -90  })
    .to(cube, { rotateX: 0,  rotateY: -180 })
    .to(cube, { rotateX: 0,  rotateY: -270 })
    .to(cube, { rotateX:-90, rotateY: -360 })
    .to(cube, { rotateX: 90, rotateY: -360 })
    .to(cube, { rotateX: 0,  rotateY: -360 }) // short rotation back to 1