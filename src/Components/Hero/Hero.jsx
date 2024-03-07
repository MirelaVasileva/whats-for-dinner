import './hero.css'
// import hero from '../../images/hero.jpg'

export const Hero = () => {
    return (
        <div id='hero-div'>
            <div className='hero-img-div'>
                <div className='hero-inner-div'>
                    <section className='hero-section'>
                        <h1 className='title'>Don't know what to cook?</h1>
                        <h2 className='description'>Tell us what you have in your fridge and we will suggest some recipes</h2>
                        <button id='hero-button'>Get started</button>
                    </section>
                </div>
            </div>
        </div>
    )
}