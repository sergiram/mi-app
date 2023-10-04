import React from 'react'

export const Specials = () => {
  return (
    <>
      <section className="specials" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <h2>Specials</h2>
                    <button className="btn btn-primary btn-lg" >Online Menu</button>
      </section>
      <br />
      <section className='highlights'>
                <article className='spHighlights'>
                    <img src='../img/pasta.jpg' />
                    <h3>Greek Salad</h3>
                    <p style={{color: 'orange'}}>$12,95</p>
                    <p>A Greek salad is a classic Mediterranean dish featuring fresh ingredients like lettuce, tomatoes, cucumbers, olives, and feta cheese. It's seasoned with olive oil, oregano, salt, and pepper, creating a flavorful and refreshing salad.</p>
                    <a href='#home'>Order a delivery</a>
                </article>
                <article className='spHighlights'>
                <img src='../img/pasta.jpg' />
                    <h3>Bruschetta</h3>
                    <p style={{color: 'orange'}}>$12,95</p>
                    <p>A bruschetta is a popular Italian appetizer consisting of grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, and drizzled with olive oil. It's a simple yet flavorful dish, showcasing the vibrant taste of ripe tomatoes and aromatic basil on crispy bread.</p>
                    <a href='#home'>Order a delivery</a>
                </article >
                <article className='spHighlights'>
                <img src='../img/pasta.jpg' />
                    <h3>Lemon Dessert</h3>
                    <p style={{color: 'orange'}}>$12,95</p>
                    <p>A lemon tart is a delectable dessert with a buttery, flaky crust filled with a smooth and tangy lemon custard. It's often garnished with a dusting of powdered sugar or a dollop of whipped cream, creating a perfect balance of sweet and citrusy flavors in every bite.</p>
                    <a href='#home'>Order a delivery</a>
                </article>
            </section>
            <br />
    </>
  )
}
