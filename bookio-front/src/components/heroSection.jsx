import Banner1 from "../assets/images/main-banner1.jpg"
import Banner2 from "../assets/images/main-banner1.jpg"


export default function HeroSection() {

    return (
        <>
            <section id="billboard">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <button class="prev slick-arrow">
                                <i class="icon icon-arrow-left"></i>
                            </button>
                            <div class="main-slider pattern-overlay">
                                <div class="slider-item">
                                    <div class="banner-content">
                                        <h2 class="banner-title">Life of the Wild</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                                            ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                                            urna, a eu.</p>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn btn-outline-accent btn-accent-arrow">Read More<i
                                                class="icon icon-ns-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    <img src={Banner1} alt="banner" class="banner-image" />
                                </div>
                                
                            </div>
                            <button class="next slick-arrow">
                                <i class="icon icon-arrow-right"></i>
                            </button>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}