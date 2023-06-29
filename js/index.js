const items=[
    {img:'./imges/img1.jpg',h1:'кожанная куртка из енота',p1:'Материал натуральный,енот',p2:'Страна:Италия',price:'305 000֏'},
    {img:'./imges/img2.jpg',h1:'футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'23000֏'},
    {img:'./imges/img5.jpg',h1:'черная футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'22000֏'},
    {img:'./imges/img3.jpg',h1:'футболка с воротником зеленая',p1:'Материал хлопок 100%',p2:'Страна:Италия',price:'25000֏'},
    {img:'./imges/img4.jpg',h1:'трендовая футболка голубая ',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'25000֏'},
    {img:'./imges/img5.jpg',h1:'черная футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'22000֏'},
    {img:'./imges/img6.jpg',h1:'Белая футболка с варатником',p1:'Материал 100% ',p2:'Страна:Италия',price:'25000֏'},
    {img:'./imges/img11.jpg',h1:'Куртка черная качественная',p1:'Материал 100% хлопок',p2:'Страна:Турция',price:'220 000֏'},
    {img:'./imges/img7.jpg',h1:'Белая футболка летняя',p1:'Материал 100% хлопок',p2:'Страна:Турция',price:'22000֏'},
    {img:'./imges/im1.jpg',h1:'Белая футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'23000֏'},
    {img:'./imges/im2.jpg',h1:'Черная футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'23000֏'},
    {img:'./imges/im3.jpg',h1:'Футболка с воротником',p1:'Материал хлопок 100%',p2:'Страна:Италия',price:'25000֏'},
    {img:'./imges/im9.jpg',h1:'Трендовая рубашка с узорами ',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'23000֏'},
    {img:'./imges/im4.jpg',h1:'Черная-футболка хлопок 100%',p1:'Материал хлопок',p2:'Страна:Италия',price:'22000֏'},
    {img:'./imges/im5.jpg',h1:'Клетчатая рубашка бело-синяя',p1:'Материал 30% хлопок,70% лён ',p2:'Страна:Италия',price:'25000֏'},
    {img:'./imges/im6.jpg',h1:'Голубая рубашка стильная',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'28000֏'},
    {img:'./imges/im7.jpg',h1:'Красная рубашка стильная',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'28000֏'},
    {img:'./imges/im8.jpg',h1:'Белая рубашка стильная',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'28000֏'},
    {img:'./imges/im10.jpg',h1:'Синяя рубашка стильная',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'28000֏'},
    {img:'./imges/img8.jpg',h1:'футболка с варатником разные цвета',p1:'Материал 100% хлопок',p2:'Страна:Турция',price:'25000֏'},
    {img:'./imges/img9.jpg',h1:'футболка с варатником,с пуговицами',p1:'Материал 100% хлопок',p2:'Страна:Турция',price:'23000֏'},
    {img:'./imges/img10.jpg',h1:'Кожанная куртка коричневая',p1:'Материал 100% хлопок',p2:'Страна:Италия',price:'220 000֏'},
]



let catalog=document.querySelector('.catalog')

    for(let i=0;i<items.length;i++){
        let item=document.createElement('div')
        item.className='item'
        let view=document.createElement('div')
        view.className='view'
        let img=document.createElement('img')
        img.className='iimg'
        let info=document.createElement('div')
        info.className='info'

        let h1=document.createElement('h1')
        let p1=document.createElement('p')
        p1.className='info p'
        let p2=document.createElement('p')
        p2.className='info p'
        let p3=document.createElement('p')
        p3.className='price'
        const a=document.createElement('a')
        a.className='ord'
        a.href='tel:+37491098765'

       a.innerHTML='Заказать'
        img.src=items[i].img
        h1.innerHTML=items[i].h1
        p1.innerHTML=items[i].p1
        p2.innerHTML=items[i].p2
        p3.innerHTML=items[i].price
        view.appendChild(img)
        item.appendChild(view)

        info.appendChild(h1)
        info.appendChild(p1)
        info.appendChild(p2)
        info.appendChild(p3)

        item.appendChild(info)
        item.appendChild(view)
        item.append(a)
        catalog.appendChild(item)

}
    document.onload(

    )
