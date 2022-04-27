const data = [
    {
      id: 1,
      image:
        "https://adamimages.sbdinc.com/GEM/Dewalt/172x172_72r/DW831_10.jpg",
      title: "Amoladora 500W",
      descripcion: "Amoladora con cable de 2m",
      categoria: "Herramientas",
      price: "73000",
      stock: "4",
    },
    {
      id: 2,
      image: "https://adamimages.sbdinc.com/GEM/Dewalt/172x172_72r/DW300_1L.jpg",
      title: "Sierra 650W",
      descripcion: "Sierra con cable de 2m",
      categoria: "Herramientas",
      price: "58000",
      stock: "10",
    },
    {
      id: 3,
      image:
        "https://adamimages.sbdinc.com/GEM/Dewalt/172x172_72r/DW505_1.jpg",
      title: "Taladro 710W",
      descripcion: "Taladro con cable de 2m",
      categoria: "Herramientas",
      price: "22000",
      stock: "5",
    },
  ];
  
  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  export default getData;