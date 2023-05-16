const data = [
  {
    title: "Смартфон Apple iPhone 12 Pro 128GB Graphite",
    img: "img/iPhone-graphite.png",
    screen: "'Экран 6.1'/2532x1170 Пикс",
    tech: "Технология экрана OLED",
    processor: "Тип процессора A14 Bionic",
    memory: "Встроенная память (ROM) 128 ГБ",
    camera: "Основная камера МПикс 12/12/12/LiDAR",
    price: 9999,
  },
  {
    title: "Смартфон Apple iPhone 13 Pro 128GB Silver",
    img: "img/iPhone-silver.png",
    screen: "'Экран 5.1'/1960x1100 Пикс",
    tech: "Технология экрана AMOLED",
    processor: "Тип процессора B14 Eynous",
    memory: "Встроенная память (ROM) 64 ГБ",
    camera: "Основная камера МПикс 6/12/6/LiDAR",
    price: 1599,
  },
  {
    title: "Смартфон Apple iPhone 14 Pro 128GB Pacific Blue",
    img: "img/iPhone-blue.png",
    screen: "'Экран 6.1'/720x260 Пикс",
    tech: "Технология экрана LED",
    processor: "Тип процессора M14 Snapdragon",
    memory: "Встроенная память (ROM) 256 ГБ",
    camera: "Основная камера МПикс 24/24/24/LiDAR",
    price: 19999,
  },
]
document.addEventListener("DOMContentLoaded", () => {
  const tabs = () => {
    const cardDetailChange = document.querySelectorAll(".card-detail__change")
    const cardDetailsPrice = document.querySelector(".card-details__price")
    const cardImageItem = document.querySelector(".card__image_item")
    const changePrice = document.querySelector(".card-details__title")
    const changeScreen = document.querySelector(".description__screen")
    const changeTechScreen = document.querySelector(".description__tech-screen")
    const changeProcessor = document.querySelector(".description__processor")
    const changeMemory = document.querySelector(".description__memory")
    const changeCamera = document.querySelector(".description__camera")
    const closeActiveBtn = () => {
      cardDetailChange.forEach((elem) => {
        elem.classList.remove("active")
      })
    }

    cardDetailChange.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        closeActiveBtn()
        btn.classList.add("active")
        cardImageItem.setAttribute("src", `${data[i].img}`)
        changePrice.textContent = `${data[i].title}`
        cardDetailsPrice.textContent = `${data[i].price}₽`
        changeScreen.textContent = `${data[i].screen}`
        changeTechScreen.textContent = `${data[i].tech}`
        changeProcessor.textContent = `${data[i].processor}`
        changeMemory.textContent = `${data[i].memory}`
        changeCamera.textContent = `${data[i].camera}`
      })
    })
  }
  const accordeon = () => {
    let countClicks = 2
    const characteristicsItemElem = document.querySelector(".characteristics__item")
    const characteristicsDescription = document.querySelector(".characteristics__description")
    const characteristicsListElem = document.querySelector(".characteristics__list")
    const removeMenu = document.querySelector(".show")

    const open = (button, dropDown) => {
      dropDown.style.height = `${dropDown.scrollHeight}px`
      button.classList.add("active")
      dropDown.classList.add("active")
    }

    const close = (button, dropDown) => {
      dropDown.style.height = `${dropDown.scrollHeight}px`
      button.classList.remove("active")
      dropDown.classList.remove("active")
    }

    characteristicsListElem.addEventListener("click", (event) => {
      const target = event.target
      if (target.classList.contains("characteristics__title")) {
        const parent = target.closest(".characteristics__item")
        const description = parent.querySelector(".characteristics__description")
        description.classList.remove("show")
        open(target, description)
        ++countClicks
      }
      if (countClicks % 2 == 0) {
        const parent = target.closest(".characteristics__item")
        const description = parent.querySelector(".characteristics__description")
        description.classList.add("show")
        close(target, description)
      }
    })
  }
  accordeon()
  tabs()
})
