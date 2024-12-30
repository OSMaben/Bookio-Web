import Dvice1 from "../assets/images/device.png"
import Playstorer from "../assets/images/google-play.jpg"
import appleStore from "../assets/images/app-store.jpg"
export default function DownloadApp(){
    return(
        <>
        
        <section id="download-app" class="leaf-pattern-overlay">
		<div class="corner-pattern-overlay"></div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="row">

						<div class="col-md-5">
							<figure>
								<img src={Dvice1} alt="phone" class="single-image" />
							</figure>
						</div>

						<div class="col-md-7">
							<div class="app-info">
								<h2 class="section-title divider">Download our app now !</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus
									liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna.
									Adipiscing fames semper erat ac in suspendisse iaculis.</p>
								<div class="google-app d-flex gap-4">
									<img src={Playstorer} alt="google play" />
									<img src={appleStore} alt="app store" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>

        </>
    )
} 