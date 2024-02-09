import {MDBBtn, MDBCarousel, MDBCarouselItem, MDBCarouselCaption} from "mdb-react-ui-kit";

export const Home = () => {
    return (
      <section className="">
        {/* Section: Split screen */}
        <div className="container-fluid px-0 pt-5 pb-5">
          <div className="row g-0">
            {/* First column */}
            <div className="col-lg-6 vh-100 d-flex justify-content-center text-center">

              <div className="d-grid gap-3 w-75">
                <h5>Welcome to the Tribe!</h5>
                <div className="lead text-start">
                  <p>Welcome to <strong>Wealth Tribe AI</strong>, your gateway to a revolutionary approach to portfolio sharing and investment collaboration. Our platform empowers investors to connect, learn, and grow together.</p>
                  <p>At <strong>Wealth Tribe AI</strong>, we believe in the power of shared knowledge and collective wisdom. Our platform allows users to showcase their investment strategies and successes by publicly sharing the percentage gains or losses of their portfolios and investments. This transparency encourages an environment of learning and collaboration among a community of passionate investors.</p>
                  <p>However, we prioritize the confidentiality of your financial information. While the percentage gains or losses of your portfolio will be visible to the community, the actual investment values remain private. Your personal financial details are securely protected, ensuring your sensitive information stays confidential.</p>
                  <p>Join <strong>Wealth Tribe AI</strong> to:</p>
                  <ul>
                      <li><strong>Share Insights, Safeguard Privacy:</strong> Showcase your investment expertise by sharing percentage returns without revealing specific investment amounts.</li>
                      <li><strong>Learn and Collaborate:</strong> Engage with a community of like-minded investors, learn from their strategies, and collaborate to optimize investment approaches.</li>
                      <li><strong>Empower Decision-Making:</strong> Gain valuable insights into successful investment strategies while maintaining the privacy of your individual financial information.</li>
                  </ul>
                  <p className="pb-5">Our platform fosters an environment of transparency, collaboration, and learning without compromising the confidentiality of your personal investment details. Join <strong>Wealth Tribe AI</strong> today and become a part of a vibrant community where knowledge-sharing leads to collective success.</p>
                </div>
              </div>
            </div>
            {/* First column */}
            {/* Second column */}
            <div className="col-lg-6 d-none d-lg-inline-block vh-100">
              <MDBCarousel fade interval={5000}>
                <MDBCarouselItem itemId={1} className="bg-image background-people w-100">
                  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <MDBCarouselCaption>
                      <h4>Share Insights, Safeguard Privacy</h4>
                      <p className="lead"><b>Showcase your investment expertise by sharing percentage returns without revealing specific investment amounts.</b></p>
                      <MDBBtn color="secondary" rounded className="light mx-2"><h5>Join Now!</h5></MDBBtn>
                    </MDBCarouselCaption>
                  </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2} className="bg-image background-people w-100">
                  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <MDBCarouselCaption>
                      <h4>Learn and Collaborate</h4>
                      <p className="lead"><b>Engage with a community of like-minded investors, learn from their strategies, and collaborate to optimize investment approaches.</b></p>
                    </MDBCarouselCaption>
                  </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3} className="bg-image background-people w-100">
                  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <MDBCarouselCaption>
                      <h4>Empower Decision-Making</h4>
                      <p className="lead"><b>Gain valuable insights into successful investment strategies while maintaining the privacy of your individual financial information.</b></p>
                    </MDBCarouselCaption>
                  </div>
                </MDBCarouselItem>
              </MDBCarousel>
            </div>
            {/* Second column */}
          </div>
        </div>
      </section>
    );
}
